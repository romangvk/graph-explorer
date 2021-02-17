import './App.css';
import React, { useState } from 'react';
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
        <button onClick={() => {
          setGraph((old) => {
            return G.removeNode(old, 0);
          });
        }}>Remove Node</button>
        <button onClick={() => {
          setGraph((old) => {
            return G.addLink(old, 0, 1);
          });
        }}>Add Link</button>
        <button onClick={() => {
          setGraph((old) => {
            let nodes = [...old.nodes];
            nodes[0].v++;
            return { ...old, nodes: nodes };
          });
        }}>Testing</button>
      </FloatingPanel>
      <GraphDisplay nodes={graph.nodes} links={graph.links} />
    </div>
  );
}

export default App;