import './SidePanel.css';
import React from 'react';

function SidePanel({ children }) {
    return (
        <div className="floating">
            {children}
        </div>
    );
}

export default SidePanel;