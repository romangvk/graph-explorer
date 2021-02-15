import './App.css';
import React, { useState } from 'react';
import GraphDisplay from './components/GraphDisplay';

function addNode(g, value) {
  return { ...g, nodes: [...g.nodes, { v: value, index: g.nodes.length }] };
}
function removeNode(g, index) {
  let nodes = g.nodes.filter((node) => node.index !== index);
  let links = g.links.filter((link) => link.source !== index && link.target !== index);
  console.log(nodes);
  console.log(links);
  return { ...g, nodes: nodes, links: links };
}

function App() {
  const [g, setGraph] = useState({
    nodes: [
      { v: 0, index: 0 },
      { v: 1, index: 0 },
      { v: 2, index: 0 }
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
          return removeNode(old, 0);
        });
      }}>Remove Node</button>
      <GraphDisplay nodes={g.nodes} links={g.links} />
    </div>
  );
}

export default App;