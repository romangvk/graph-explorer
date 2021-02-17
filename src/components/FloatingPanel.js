import './FloatingPanel.css';
import React from 'react';

function FloatingPanel({ children, top, bottom, left, right }) {
    return (
        <div className="floating">
            {children}
        </div>
    );
}

export default FloatingPanel;