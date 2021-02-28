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
  const [addV, setAddV] = useState("");

  return (
    <div className="App">
      <FloatingPanel title="Nodes" top="1vh" left="1em">
        <NodeEditor value={addV} inputRef={addNodeRef}
          change={(v) => setAddV(v)}
          action={() => {
            if (addV === "" || G.contains(graph, addV)) {
              console.log("Must be a new value");
            } else {
              setGraph((old) => G.addNode(old, addV));
              setAddV("");
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
      <FloatingPanel title="Links" top="51vh" left="1em">
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
      <GraphDisplay nodes={graph.nodes} links={graph.links}
        onClickNode={(d) => {
          nodeRefs.current[d.id].focus();
          nodeRefs.current[d.id].select();
          nodeRefs.current[d.id].scrollIntoView();
        }}
      />
    </div >
  );
}

export default App;