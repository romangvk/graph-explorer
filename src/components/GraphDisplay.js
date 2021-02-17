import './GraphDisplay.css';
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function GraphDisplay({ nodes, links }) {
    const display = useRef(null);

    useEffect(() => {
        let svg = d3.select(display.current).attr("width", "100%").attr("height", "100%");

        let force = d3.forceSimulation(nodes)
            .force("gravity", d3.forceManyBody())
            .force("link", d3.forceLink(links).strength(0.05))
            .force("centerX", d3.forceX().strength(0.01))
            .force("centerY", d3.forceY().strength(0.01))
            .alphaDecay(0);

        let link = svg.selectAll(".link")
            .data(links);

        link.exit().transition().ease(d3.easeExpOut).style("opacity", 0).style("stroke-width", 0).duration(500).remove();

        let line = link.enter().append("line")
            .attr("class", "link")
            .style("stroke-width", 3);

        let node = svg.selectAll(".node")
            .data(nodes, (d) => d.id);

        node.exit().transition().ease(d3.easeExpOut).style("opacity", 0).selectAll("circle").attr("r", "0").duration(500).remove();

        let g = node.enter().append("g")
            .attr("class", "node")
            .call(d3.drag()
                .on("start", (event, d) => {
                    if (!event.active) force.alphaTarget(0.3).restart();
                    d.fx = d.x;
                    d.fy = d.y;
                })
                .on("drag", (event, d) => {
                    d.fx = event.x;
                    d.fy = event.y;
                })
                .on("end", (event, d) => {
                    if (!event.active) force.alphaTarget(0);
                    d.fx = null;
                    d.fy = null;
                }));

        g.append("circle")
            .attr("r", "4");
        g.append("text")
            .attr("dx", "1em")
            .attr("dy", ".35em")
            .text((d) => { return d.v });

        force.on("tick", function () {
            line.attr("x1", (d) => { return d.source.x; })
                .attr("y1", (d) => { return d.source.y; })
                .attr("x2", (d) => { return d.target.x; })
                .attr("y2", (d) => { return d.target.y; });

            g.attr("transform", (d) => { return "translate(" + d.x + "," + d.y + ")"; });
        });
        const resize = () => {
            force.force("centerX").x(window.innerWidth / 2);
            force.force("centerY").y(window.innerHeight / 2);
            force.alpha(1).restart();
        }
        window.addEventListener("resize", () => {
            resize();
        });
        resize();
    });
    return (
        <svg ref={display} />
    );
}
export default GraphDisplay;