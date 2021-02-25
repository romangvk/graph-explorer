// import './NodeEditor.css';
import React, { useRef } from 'react';

function NodeEditor({ edit, remove, value, inputRef }) {
    return (
        <div className="node">
            <input ref={inputRef} type="text" value={value} onChange={(e) => edit(e.target.value)}></input>
            <button onClick={() => remove()}>x</button>
        </div>
    );
}
export default NodeEditor;