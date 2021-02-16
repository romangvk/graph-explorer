import './App.css';
import React, { useRef, useState } from 'react';
import GraphDisplay from './components/GraphDisplay';
import graph from './util/graph';

function App() {
  const [g, setGraph] = useState({
    nodes: [
      { v: 0, id: 0 },
      { v: 1, id: 1 },
      { v: 2, id: 2 }
    ],
    links: [
      { source: 0, target: 1 },
      { source: 1, target: 2 }
    ]
  });
  const G = useRef(new graph());
  return (
    <div className="App">
      <button onClick={() => {
        setGraph((old) => {
          return G.addNode(old, Math.floor(Math.random() * 100));
        });
      }}>Add Node</button>
      <button onClick={() => {
        setGraph((old) => {
          return old.nodes.length ? G.removeNode(old, old.nodes[0].id) : old;
        });
      }}>Remove Node</button>z
      <GraphDisplay nodes={g.nodes} links={g.links} />
    </div>
  );
}

export default App;