import './NodeEditor.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NodeEditor({ change, action, enterAction, value, icon, inputRef }) {
    const enter = (event) => {
        if (event.key === 'Enter') {
            enterAction ? enterAction && enterAction() : action && action();
        }
    }
    return (
        <div className="node">
            <input
                placeholder="value"
                type="text"
                ref={inputRef}
                value={value}
                onKeyDown={enter}
                onChange={change && ((e) => change(e.target.value))} />
            <div className="action"><FontAwesomeIcon icon={icon} fixedWidth onClick={() => action && action()} /></div>
        </div>
    );
}
export default NodeEditor;