import './App.css';
import React, { useRef, useState } from 'react';
import GraphDisplay from './components/GraphDisplay';
import FloatingPanel from './components/FloatingPanel';
import * as G from './util/graph';

function App() {
  const [graph, setGraph] = useState(G.addLink(G.addNode(G.create(), 0, 1, 2), 1, 2, 2, 0));
  return (
    <div className="App">
      <FloatingPanel>
        <button onClick={() => {
          setGraph((old) => {
            let value = Math.floor(Math.random() * 100);
            return G.addNode(old, value);
          });
        }}>Add Node</button>
        {graph.nodes.map((node, i) => {
          return (
            <input key={i} type="text" value={node.v} onChange={(e) => {
              setGraph((old) => {
                let nodes = [...old.nodes];
                nodes[i].v = e.target.value;
                return { ...old, nodes: nodes };
              });
            }}></input>
          );
        })}
        <button onClick={() => {
          setGraph((old) => G.removeNode(old, 0));
        }}>Remove Node</button>
      </FloatingPanel>
      <GraphDisplay nodes={graph.nodes} links={graph.links} />
    </div >
  );
}

export default App;