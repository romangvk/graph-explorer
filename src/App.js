import './App.css';
import React, { useState } from 'react';
import GraphDisplay from './components/GraphDisplay';

function App() {
  const [nodes, setNodes] = useState([{ v: 0, index: 0 }, { v: 1, index: 0 }, { v: 2, index: 0 }]);
  const [links, setLinks] = useState([{ source: 0, target: 1 }, { source: 1, target: 2 }]);
  return (
    <div className="App">
      <button onClick={() => {
        setNodes((oldNodes) => {
          return [...oldNodes, { v: oldNodes[oldNodes.length - 1].v + 1, index: oldNodes.length }];
        });
      }}>Add Nodes</button>
      <GraphDisplay nodes={nodes} links={links} />
    </div>
  );
}

export default App;