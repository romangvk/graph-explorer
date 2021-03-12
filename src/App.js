import './App.css';
import React, { useRef, useState } from 'react';
import GraphDisplay from './components/GraphDisplay';
import NodeEditor from './components/NodeEditor';
import LinkEditor from './components/LinkEditor';
import Link from './components/Link';
import Algorithm from './components/Algorithm';
import * as G from './util/graph';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import FloatingPanel from './components/FloatingPanel';
import * as A from './util/algorithms';

const example = G.addLink(G.addNode(G.create(), 0, 1, 2, 3, 4, 5, 6, 7, 8), 0, 1, 0, 2, 2, 4, 2, 6, 1, 3, 1, 5, 3, 7, 4, 8);

function App() {
  const [graph, setGraph] = useState(example);
  const nodeRefs = useRef({});
  const addNodeRef = useRef();
  const [options, setOptions] = useState({ nodeSize: 4, linkWidth: 2, linkDistance: 1, iterationSpeed: 1500 });
  const [search, setSearch] = useState({ expands: [], path: [] });
  const [disabled, setDisabled] = useState(false);

  const animateSearch = (results) => {
    setDisabled(true);
    let expands = [];
    let path = [];
    let expandi = 0;
    let pathi = 0;
    let animation = setInterval(() => {
      if (expandi < results.expands.length) {
        expands.push(results.expands[expandi++]);
        console.log(expands);
      } else if (pathi < results.path.length) {
        path.push(results.path[pathi++]);
        console.log(path);
      } else {
        setTimeout(() => {
          setSearch({ expands: [], path: [] });
          setDisabled(false);
        }, 2000);
        clearInterval(animation);
      }
      setSearch({ expands: [...expands], path: [...path] });
    }, 2000 - options.iterationSpeed);
  }

  return (
    <div className="App">
      <FloatingPanel title="Nodes" top="1em" left="1em" disabled={disabled}>
        <NodeEditor inputRef={addNodeRef}
          action={() => {
            let value = addNodeRef.current.value;
            if (value === "" || G.contains(graph, value)) {
              console.log("Must be a new value");
            } else {
              setGraph((old) => G.addNode(old, value));
              addNodeRef.current.value = "";
            }
            addNodeRef.current.focus();
          }}
          icon={faPlus} />
        <hr />
        <div className="list">
          {graph.nodes.map((node, i) => {
            return (
              <NodeEditor key={i} value={node.v} inputRef={(el) => (nodeRefs.current[node.id] = el)}
                change={(v) => {
                  G.contains(graph, v) ?
                    setGraph((old) => { return { ...old } })
                    :
                    setGraph((old) => G.updateNode(old, node.id, v))
                }}
                action={() => setGraph((old) => G.removeNode(old, node.id))}
                enterAction={() => {
                  if (i + 1 < graph.nodes.length) {
                    nodeRefs.current[graph.nodes[i + 1].id].focus();
                    nodeRefs.current[graph.nodes[i + 1].id].select();
                    nodeRefs.current[graph.nodes[i + 1].id].scrollIntoView();
                  } else {
                    nodeRefs.current[node.id].blur();
                  }
                }}
                icon={faTimes} />
            );
          })}
        </div>
      </FloatingPanel>
      <FloatingPanel title="Edges" bottom="1em" left="1em" disabled={disabled}>
        <LinkEditor nodes={graph.nodes}
          icon={faPlus}
          action={(source, target) => {
            setGraph((old) => G.addLink(old, source, target));
          }} />
        <hr />
        <div className="list">
          {graph.links.map((link, i) => {
            let sourceId = link.source.id != null ? link.source.id : link.source;
            let targetId = link.target.id != null ? link.target.id : link.target;
            let sourceV = link.source.v != null ? link.source.v : G.getNode(graph, sourceId).v;
            let targetV = link.target.v != null ? link.target.v : G.getNode(graph, targetId).v;
            return (
              <Link key={i}
                source={sourceV}
                target={targetV}
                action={() => { setGraph((old) => G.removeLink(old, sourceId, targetId)) }}
                icon={faTimes} />
            );
          })}
        </div>
      </FloatingPanel>
      <FloatingPanel title="Options" bottom="1em" right="1em">
        <b>Node size</b>
        <input type="range" min="1" max="20" step=".1" value={options.nodeSize} onInput={(e) => {
          setOptions({ ...options, nodeSize: e.target.value });
        }} />
        <b>Edge width</b>
        <input type="range" min="1" max="10" step=".05" value={options.linkWidth} onInput={(e) => {
          setOptions({ ...options, linkWidth: e.target.value });
        }} />
        <b>Edge distance</b>
        <input type="range" min="1" max="1000" step="5" value={options.linkDistance} onInput={(e) => {
          setOptions({ ...options, linkDistance: e.target.value });
        }} />
        <b>Iteration Speed</b>
        <input type="range" min="0" max="2000" step="5" value={options.iterationSpeed} onInput={(e) => {
          setOptions({ ...options, iterationSpeed: e.target.value });
        }} />
      </FloatingPanel>
      <FloatingPanel title="Algorithms" top="1em" right="1em" disabled={disabled}>
        <div className="list">
          <Algorithm name="bfs" args={["start", "goal"]} nodes={graph.nodes} action={(start, goal) => {
            if (isNaN(start) || isNaN(goal)) return;
            let results = A.breadthFirstSearch(start, goal, A.getAdjacencyList(graph));
            animateSearch(results);
          }}></Algorithm>
          <Algorithm name="dfs" args={["start", "goal"]} nodes={graph.nodes} action={(start, goal) => {
            if (isNaN(start) || isNaN(goal)) return;
            let results = A.depthFirstSearch(start, goal, A.getAdjacencyList(graph));
            animateSearch(results);
          }}></Algorithm>
          <Algorithm name="uniformcost" args={["start", "goal"]} nodes={graph.nodes}></Algorithm>
          <Algorithm name="greedy" args={["start", "goal"]} nodes={graph.nodes}></Algorithm>
          <Algorithm name="astar" args={["start", "goal"]} nodes={graph.nodes}></Algorithm>
        </div>
      </FloatingPanel>
      <GraphDisplay nodes={graph.nodes} links={graph.links}
        nodeSize={options.nodeSize}
        linkWidth={options.linkWidth}
        linkDistance={options.linkDistance}
        onClickNode={(d) => {
          if (nodeRefs.current[d.id]) {
            nodeRefs.current[d.id].focus();
            nodeRefs.current[d.id].select();
            nodeRefs.current[d.id].scrollIntoView();
          }
          d.fixed = !d.fixed;
          if (d.fixed) {
            d.fx = d.x;
            d.fy = d.y;
          } else {
            d.fx = null;
            d.fy = null;
          }
        }}
        expands={search.expands}
        path={search.path}
      />
    </div >
  );
}

export default App;