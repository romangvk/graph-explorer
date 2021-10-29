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

  const addNode = () => {
    let value = addNodeRef.current.value;
    if (value === "" || G.contains(graph, value)) {
      console.log("Must be a new value");
    } else {
      setGraph((old) => G.addNode(old, value));
      addNodeRef.current.value = "";
    }
    addNodeRef.current.focus();
  }

  const removeNode = (id) => {
    setGraph((old) => G.removeNode(old, id))
  }

  const updateNode = (id, v) => {
    G.contains(graph, v) ?
      setGraph((old) => { return { ...old } })
      :
      setGraph((old) => G.updateNode(old, id, v));
  }

  const addEdge = (source, target) => {
    setGraph((old) => G.addLink(old, source, target));
  }

  const removeEdge = (source, target) => {
    setGraph((old) => G.removeLink(old, source, target));
  }

  const nodeRefs = useRef({});
  const addNodeRef = useRef();
  const [options, setOptions] = useState({ nodeSize: 4, linkWidth: 2, linkDistance: 1, iterationSpeed: 500 });
  const [disabled, setDisabled] = useState(false);

  const [search, setSearch] = useState({ visits: [], path: [], start: null, goal: null });
  let startFrame = useRef();
  let goalFrame = useRef();
  let visitFrame = useRef();
  let pathFrame = useRef();

  const animateSearch = (results) => {
    setDisabled(true);

    let last = performance.now();

    let start = results.start;
    startFrame.current = (timestamp) => {
      if (timestamp - last > 2000 - options.iterationSpeed) {
        last = timestamp;
        setSearch((old) => { return { ...old, start } });
        requestAnimationFrame(goalFrame.current);
      } else {
        requestAnimationFrame(startFrame.current);
      }
    }

    let goal = results.goal;
    goalFrame.current = (timestamp) => {
      if (timestamp - last > 2000 - options.iterationSpeed) {
        last = timestamp;
        setSearch((old) => { return { ...old, goal } });
        requestAnimationFrame(visitFrame.current);
      } else {
        requestAnimationFrame(goalFrame.current);
      }
    }
    
    let visits = [];
    let visiti = 0;
    visitFrame.current = (timestamp) => {
      console.log(options.iterationSpeed);
      if (timestamp - last > 2000 - options.iterationSpeed) {
        last = timestamp;
        if (visiti < results.visits.length) {
          visits.push(results.visits[visiti++]);
          setSearch((old) => { return { ...old, visits: [...visits] } });
          requestAnimationFrame(visitFrame.current);
        } else {
          requestAnimationFrame(pathFrame.current);
        }
      } else {
        requestAnimationFrame(visitFrame.current);
      }
    }

    let path = [];
    let pathi = 0;
    pathFrame.current = (timestamp) => {
      if (timestamp - last > (2000 - options.iterationSpeed) / 2) {
        last = timestamp;
        if (pathi < results.path.length) {
          path.push(results.path[pathi++]);
          setSearch((old) => { return { ...old, path: [...path] } });
          requestAnimationFrame(pathFrame.current);
        } else {
          setDisabled(false);
        }
      } else {
        requestAnimationFrame(pathFrame.current);
      }
    }
    requestAnimationFrame(startFrame.current);
  }

  const clearSearch = () => {
    setSearch({ visits: [], path: [], start: null, goal: null });
  }

  return (
    <div className="App">
      <FloatingPanel title="Nodes" top="1em" left="1em" disabled={disabled}>
        <NodeEditor inputRef={addNodeRef}
          action={() => {
            clearSearch();
            addNode();
          }}
          icon={faPlus} />
        <hr />
        <div className="list">
          {graph.nodes.map((node, i) => {
            return (
              <NodeEditor key={i} value={node.v} inputRef={(el) => (nodeRefs.current[node.id] = el)}
                change={(v) => {
                  clearSearch();
                  updateNode(node.id, v);
                }}
                action={() => {
                  clearSearch();
                  removeNode(node.id);
                }}
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
            clearSearch();
            addEdge(source, target);
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
                action={() => {
                  clearSearch();
                  removeEdge(sourceId, targetId);
                }}
                icon={faTimes} />
            );
          })}
        </div>
      </FloatingPanel>
      <FloatingPanel title="Options" bottom="1em" right="1em">
        <b>Node size</b>
        <input type="range" min="0" max="20" step=".01" value={options.nodeSize} onInput={(e) => {
          setOptions({ ...options, nodeSize: e.target.value });
        }} />
        <b>Edge width</b>
        <input type="range" min="0" max="10" step=".005" value={options.linkWidth} onInput={(e) => {
          setOptions({ ...options, linkWidth: e.target.value });
        }} />
        <b>Edge distance</b>
        <input type="range" min="0" max="1000" step="1" value={options.linkDistance} onInput={(e) => {
          setOptions({ ...options, linkDistance: e.target.value });
        }} />
        <b>Iteration Speed</b>
        <input type="range" min="0" max="2000" step="2" value={options.iterationSpeed} onInput={(e) => {
          setOptions({ ...options, iterationSpeed: e.target.value });
          console.log(options.iterationSpeed);
        }} />
      </FloatingPanel>
      <FloatingPanel title="Algorithms" top="1em" right="1em" disabled={disabled}>
        <div className="list">
          <Algorithm name="bfs" args={["start", "goal"]} nodes={graph.nodes} action={(start, goal) => {
            if (isNaN(start) || isNaN(goal)) return;
            clearSearch();
            animateSearch(A.breadthFirstSearch(start, goal, A.getAdjacencyList(graph)));
          }}></Algorithm>
          <Algorithm name="dfs" args={["start", "goal"]} nodes={graph.nodes} action={(start, goal) => {
            if (isNaN(start) || isNaN(goal)) return;
            clearSearch();
            animateSearch(A.depthFirstSearch(start, goal, A.getAdjacencyList(graph)));
          }}></Algorithm>
          {/* <Algorithm name="uniformcost" args={["start", "goal"]} nodes={graph.nodes}></Algorithm>
          <Algorithm name="greedy" args={["start", "goal"]} nodes={graph.nodes}></Algorithm>
          <Algorithm name="astar" args={["start", "goal"]} nodes={graph.nodes}></Algorithm> */}
        </div>
      </FloatingPanel>
      <GraphDisplay nodes={graph.nodes} links={graph.links}
        nodeSize={options.nodeSize}
        linkWidth={options.linkWidth}
        linkDistance={options.linkDistance}
        onClickNode={(d) => {
          clearSearch();
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
        visits={search.visits}
        path={search.path}
        start={search.start}
        goal={search.goal}
      />
    </div >
  );
}

export default App;