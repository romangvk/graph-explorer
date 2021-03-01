import './App.css';
import React, { useRef, useState } from 'react';
import GraphDisplay from './components/GraphDisplay';
import NodeEditor from './components/NodeEditor';
import LinkEditor from './components/LinkEditor';
import Link from './components/Link';
import * as G from './util/graph';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import FloatingPanel from './components/FloatingPanel';

function App() {
  const [graph, setGraph] = useState(G.addLink(G.addNode(G.create(), 0, 1, 2), 1, 2, 2, 0));
  const nodeRefs = useRef({})
  const addNodeRef = useRef();
  const [options, setOptions] = useState({ nodeSize: 4, linkWidth: 2, linkDistance: 1 })

  return (
    <div className="App">
      <FloatingPanel title="Nodes" top="1em" left="1em">
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
      <FloatingPanel title="Links" bottom="1em" left="1em">
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
            let sourceV = link.source.v != null ? link.source.v : G.value(graph, sourceId);
            let targetV = link.target.v != null ? link.target.v : G.value(graph, targetId);
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
        <input type="range" min="1" max="20" value={options.nodeSize} onInput={(e) => {
          setOptions({ ...options, nodeSize: e.target.value });
        }} />
        <input type="range" min="1" max="10" value={options.linkWidth} onInput={(e) => {
          setOptions({ ...options, linkWidth: e.target.value });
        }} />
        <input type="range" min="1" max="500" value={options.linkDistance} onInput={(e) => {
          setOptions({ ...options, linkDistance: e.target.value });
        }} />
      </FloatingPanel>
      <FloatingPanel title="Algorithms" top="1em" right="1em">
        <div className="list">
          <span>Breadth first search</span>
          <span>Depth first search</span>
          <span>Uniform cost search</span>
          <span>Greedy search</span>
          <span>A star search</span>
        </div>
      </FloatingPanel>
      <GraphDisplay nodes={graph.nodes} links={graph.links}
        nodeSize={options.nodeSize}
        linkWidth={options.linkWidth}
        linkDistance={options.linkDistance}
        onClickNode={(d) => {
          nodeRefs.current[d.id].focus();
          nodeRefs.current[d.id].select();
          nodeRefs.current[d.id].scrollIntoView();
          d.fixed = !d.fixed;
          if (d.fixed) {
            d.fx = d.x;
            d.fy = d.y;
          } else {
            d.fx = null;
            d.fy = null;
          }
        }}
      />
    </div >
  );
}

export default App;