import './App.css';
import React, { useState } from 'react';
import GraphDisplay from './components/GraphDisplay';
let ID = 5;
function addNode(g, value) {
  return { ...g, nodes: [...g.nodes, { v: value, id: ID++ }] };
}
function removeNode(g, id) {
  let nodes = g.nodes.filter((node) => node.id !== id);
  let links = g.links.filter((link) => link.source.id !== id && link.target.id !== id);
  return { ...g, nodes: nodes, links: links };
}

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
  return (
    <div className="App">
      <button onClick={() => {
        setGraph((old) => {
          return addNode(old, Math.floor(Math.random() * 100));
        });
      }}>Add Node</button>
      <button onClick={() => {
        setGraph((old) => {
          return old.nodes.length ? removeNode(old, old.nodes[0].id) : old;
        });
      }}>Remove Node</button>
      <GraphDisplay nodes={g.nodes} links={g.links} />
    </div>
  );
}

export default App;