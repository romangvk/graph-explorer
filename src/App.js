import './styles.css';
import React, { useRef, useState } from 'react';
import GraphDisplay from './components/GraphDisplay';
import SidePanel from './components/SidePanel';
import NodeEditor from './components/NodeEditor';
import * as G from './util/graph';

function App() {
  const [graph, setGraph] = useState(G.addLink(G.addNode(G.create(), 0, 1, 2), 1, 2, 2, 0));
  const nodeRefs = useRef({})


  return (
    <div className="App">
      <SidePanel>
        <button onClick={() => {
          setGraph((old) => {
            let value = Math.floor(Math.random() * 100);
            return G.addNode(old, value);
          });
        }}>Add Node</button>
        <div className="nodes">
          {graph.nodes.map((node, i) => {
            return (
              <NodeEditor value={node.v} inputRef={(el) => (nodeRefs.current[node.id] = el)}
                edit={(v) => {
                  setGraph((old) => G.updateNode(old, node.id, v));
                }}
                remove={() => {
                  setGraph((old) => G.removeNode(old, node.id));
                }} />
            );
          })}
        </div>
      </SidePanel>
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