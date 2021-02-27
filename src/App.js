import './styles.css';
import React, { useRef, useState } from 'react';
import GraphDisplay from './components/GraphDisplay';
import NodeEditor from './components/NodeEditor';
import LinkEditor from './components/LinkEditor';
import * as G from './util/graph';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [graph, setGraph] = useState(G.addLink(G.addNode(G.create(), 0, 1, 2), 1, 2, 2, 0));
  const nodeRefs = useRef({})
  const addNodeRef = useRef();
  const [addV, setAddV] = useState("");

  return (
    <div className="App">
      <div className="side-panel">
        <div className="half-panel">
          <div className="half-panel-title"><b>Nodes</b></div>
          <div className="half-panel-content">
            <NodeEditor value={addV} inputRef={addNodeRef}
              change={(v) => setAddV(v)}
              action={() => {
                if (G.contains(graph, addV)) {
                  console.log("Must be a new value");
                } else {
                  setGraph((old) => G.addNode(old, addV));
                  setAddV("");
                }
                addNodeRef.current.focus();
              }}
              icon={faPlus} />
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
                    icon={faTimes} />
                );
              })}
            </div>
          </div>
        </div>
        <div className="half-panel">
          <div className="half-panel-title"><b>Links</b></div>
          <div className="half-panel-content">
            <div className="list">
              {graph.links.map((link, i) => {
                return (
                  <LinkEditor key={i} source={link.source.v} target={link.target.v}
                    icon={faTimes} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
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