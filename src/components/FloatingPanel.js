import './FloatingPanel.css';
import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

function FloatingPanel({ title, children }) {
    const [expand, toggleExpand] = useState(true);
    return (
        <Draggable>
            <div className={`floating-panel ${expand ? "floating-panel-max" : "floating-panel-min"}`}>
                <div className="floating-panel-title">
                    <b>{title}</b>
                    <div className="action">
                        <FontAwesomeIcon icon={expand ? faMinus : faPlus} fixedWidth onClick={() => {
                            toggleExpand(!expand);
                        }} />
                    </div>
                </div>
                {expand ? <div className="floating-panel-content">
                    {children}
                </div> : null}
            </div>
        </Draggable>
    );
}
export default FloatingPanel;