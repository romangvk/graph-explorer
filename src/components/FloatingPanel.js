import './FloatingPanel.css';
import React from 'react';
import Draggable from 'react-draggable';

function FloatingPanel({ title, children }) {
    return (
        <Draggable>
            <div className="floating-panel">
                <div className="floating-panel-title"><b>{title}</b></div>
                <div className="floating-panel-content">
                    {children}
                </div>
            </div>
        </Draggable>
    );
}
export default FloatingPanel;