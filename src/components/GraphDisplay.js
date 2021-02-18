import './GraphDisplay.css';
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

let radius = 4;

function GraphDisplay({ nodes, links, onClickNode }) {
    const display = useRef(null);
    const force = useRef(null);

    // Only runs once
    useEffect(() => {
        // Create force
        force.current = d3.forceSimulation()
            .force("gravity", d3.forceManyBody())
            .force("links", d3.forceLink().strength(0.05))
            .force("centerX", d3.forceX().strength(0.005))
            .force("centerY", d3.forceY().strength(0.005))
            .force("bounds", (alpha) => {

            })
            .alphaDecay(0);

        // Svg reference
        let svg = d3.select(display.current);

        // Move nodes and links every tick
        force.current.on("tick", function () {
            svg.selectAll(".link")
                .attr("x1", (d) => { return d.source.x; })
                .attr("y1", (d) => { return d.source.y; })
                .attr("x2", (d) => { return d.target.x; })
                .attr("y2", (d) => { return d.target.y; });

            // Bounding box
            svg.selectAll(".node").attr("transform", (d) => {
                let container = display.current.getBoundingClientRect();
                let x = Math.max(Math.min(container.width - radius, d.x), 0 + radius);
                let y = Math.max(Math.min(container.height - radius, d.y), 0 + radius);
                return "translate(" + x + "," + y + ")";
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
        link.enter().insert("line", ":first-child").attr("class", "link");

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
                    d.fx = null;
                    d.fy = null;
                }));

        // Draw circle
        g.append("circle").attr("r", radius);

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