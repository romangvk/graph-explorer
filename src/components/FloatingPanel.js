import './FloatingPanel.css';
import React from 'react';

function FloatingPanel({ children }) {
    return (
        <div className="floating">
            {children}
        </div>
    );
}

export default FloatingPanel;