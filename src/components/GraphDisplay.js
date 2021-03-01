import './GraphDisplay.css';
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function GraphDisplay({ nodes, links, onClickNode, nodeSize, linkWidth, linkDistance }) {
    const display = useRef(null);
    const force = useRef(null);

    // Bounding box
    const boundX = (x) => {
        let container = display.current.getBoundingClientRect();
        return Math.max(Math.min(container.width, x), 0);
    }
    const boundY = (y) => {
        let container = display.current.getBoundingClientRect();
        return Math.max(Math.min(container.height, y), 0);
    }

    // Only runs once
    useEffect(() => {
        // Create force
        force.current = d3.forceSimulation()
            .force("gravity", d3.forceManyBody())
            .force("links", d3.forceLink().strength(0.05).id((d) => d.id))
            .force("centerX", d3.forceX().strength(0.005))
            .force("centerY", d3.forceY().strength(0.005))
            .alphaDecay(0);

        // Svg reference
        let svg = d3.select(display.current);

        // Move nodes and links every tick
        force.current.on("tick", function () {
            svg.selectAll(".link")
                .attr("x1", (d) => { return boundX(d.source.x); })
                .attr("y1", (d) => { return boundY(d.source.y); })
                .attr("x2", (d) => { return boundX(d.target.x); })
                .attr("y2", (d) => { return boundY(d.target.y); });

            svg.selectAll(".node").attr("transform", (d) => {
                return "translate(" + boundX(d.x) + "," + boundY(d.y) + ")";
            });
        });

        // Recalculate centering forces on resize
        const resize = () => {
            let container = display.current.getBoundingClientRect();
            force.current.force("centerX").x(container.width / 2);
            force.current.force("centerY").y(container.height / 2);
            force.current.alpha(1).restart();
        }
        window.addEventListener("resize", () => {
            resize();
        });
        resize();
    }, []);

    // Runs when nodes or links change
    useEffect(() => {
        // Svg reference
        let svg = d3.select(display.current);

        // Draw links
        let link = svg.selectAll(".link").data(links, (d) => d.id);

        // Animate removed links
        link.exit().transition().ease(d3.easeExpOut).style("opacity", 0).duration(500).remove();

        // Create new links
        link.enter().insert("line", ":first-child").attr("class", "link").attr("stroke-width", linkWidth || 2);

        // Draw nodes
        let node = svg.selectAll(".node").data(nodes, (d) => d.id);

        // Animate removed nodes
        node.exit().transition().ease(d3.easeExpOut).style("opacity", 0).duration(500).remove();

        // Create new nodes
        let g = node.enter().append("g")
            .attr("class", "node")
            .call(d3.drag()
                .on("start", (event, d) => {
                    if (!event.active) force.current.alphaTarget(0.3).restart();
                    d.fx = d.x;
                    d.fy = d.y;
                })
                .on("drag", (event, d) => {
                    d.fx = event.x;
                    d.fy = event.y;
                })
                .on("end", (event, d) => {
                    if (!event.active) force.current.alphaTarget(0);
                    if (!d.fixed) {
                        d.fx = null;
                        d.fy = null;
                    }
                }));

        // Draw circle
        g.append("circle").attr("r", nodeSize || 4);

        // Draw text
        g.append("text")
            .attr("dx", "1em")
            .attr("dy", ".35em")
            .merge(node.select("text"))
            .text((d) => d.v);

        // Reinitialize force
        force.current.nodes(nodes);
        force.current.force("links").links(links);
    }, [nodes, links]);

    useEffect(() => {
        d3.select(display.current).selectAll(".node").select("circle").attr("r", nodeSize || 4);
    }, [nodeSize]);
    useEffect(() => {
        d3.select(display.current).selectAll(".link").attr("stroke-width", linkWidth || 2);
    }, [linkWidth]);
    useEffect(() => {
        force.current.force("links").distance(linkDistance || 1);
    }, [linkDistance]);

    // Runs when onClickNode changes
    useEffect(() => {
        d3.selectAll("g").on("click", (e, d) => {
            onClickNode(d);
        })
    }, [onClickNode])
    return (
        <svg ref={display} width="100%" height="100%" />
    );
}
export default GraphDisplay;