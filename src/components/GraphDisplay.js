import './GraphDisplay.css';
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function GraphDisplay({ nodes, links }) {
    const display = useRef(null);

    useEffect(() => {
        console.log(nodes.length);
        let svg = d3.select(display.current);

        let force = d3.forceSimulation(nodes)
            .force("gravity", d3.forceManyBody())
            .force("link", d3.forceLink(links).strength(0.05))
            .force("centerX", d3.forceX().strength(0.01))
            .force("centerY", d3.forceY().strength(0.01))
            .alphaDecay(0);

        let link = svg.selectAll(".link")
            .data(links)
            .enter().append("line")
            .attr("class", "link")
            .style("stroke-width", 3);

        let node = svg.selectAll(".node")
            .data(nodes)
            .enter().append("g")
            .attr("class", "node");

        node.call(d3.drag()
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

        node.append("circle")
            .attr("r", "4");

        node.append("text")
            .attr("dx", "1em")
            .attr("dy", ".35em")
            .text((d) => { return d.v });

        force.on("tick", function () {
            link.attr("x1", (d) => { return d.source.x; })
                .attr("y1", (d) => { return d.source.y; })
                .attr("x2", (d) => { return d.target.x; })
                .attr("y2", (d) => { return d.target.y; });

            node.attr("transform", (d) => { return "translate(" + d.x + "," + d.y + ")"; });
        });
        const resize = () => {
            let width = window.innerWidth, height = window.innerHeight;
            svg.attr("width", width).attr("height", height);
            force.force("centerX").x(width / 2);
            force.force("centerY").y(height / 2);
            force.alpha(1).restart();
        }
        window.addEventListener("resize", () => {
            resize();
        });
        resize();
    });
    return (
        <div className="svg-container">
            <svg ref={display} />
        </div>
    );
}
export default GraphDisplay;