import './LinkEditor.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function NodeEditor({ change, action, enterAction, source, target, icon, inputRef }) {
    const enter = (event) => {
        if (event.key === 'Enter') {
            enterAction ? enterAction() : action();
        }
    }
    return (
        <div className="link">
            <input
                className="link"
                placeholder="source"
                type="text"
                ref={inputRef}
                value={source}
                onKeyDown={enter}
                onChange={(e) => change(e.target.value)} />
            <FontAwesomeIcon icon={faArrowRight} size="xs" fixedWidth />
            <input
                className="link"
                placeholder="target"
                type="text"
                ref={inputRef}
                value={target}
                onKeyDown={enter}
                onChange={(e) => change(e.target.value)} />
            <div className="action"><FontAwesomeIcon icon={icon} size="xs" fixedWidth onClick={() => action()} /></div>
        </div>
    );
}
export default NodeEditor;