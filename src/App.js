import './App.css';
import React, { useState } from 'react';
import GraphDisplay from './components/GraphDisplay';
import * as G from './util/graph';

function App() {
  const [graph, setGraph] = useState(G.addNode(G.create(), 0, 1, 2));
  return (
    <div className="App">
      <button onClick={() => {
        setGraph((old) => {
          let value = Math.floor(Math.random() * 100);
          return G.addNode(old, value);
        });
      }}>Add Node</button>
      <button onClick={() => {
        setGraph((old) => {
          return old.nodes.length ? G.removeNode(old, old.nodes[0].id) : old;
        });
      }}>Remove Node</button>
      <GraphDisplay nodes={graph.nodes} links={graph.links} />
    </div>
  );
}

export default App;