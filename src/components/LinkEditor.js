import './LinkEditor.css';
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function LinkEditor({ action, icon, nodes }) {
    const sourceRef = useRef();
    const targetRef = useRef();
    return (
        <div className="link">
            <select ref={sourceRef} className="link"
                defaultValue="source">
                <option disabled hidden>source</option>
                {nodes && nodes.map((node, i) => <option key={i} value={node.id}>{node.v}</option>)}
            </select>
            <FontAwesomeIcon icon={faArrowRight} fixedWidth />
            <select ref={targetRef} className="link"
                defaultValue="target">
                <option disabled hidden>target</option>
                {nodes && nodes.map((node, i) => <option key={i} value={node.id}>{node.v}</option>)}
            </select>
            <div className="action"><FontAwesomeIcon icon={icon} fixedWidth
                onClick={() => action && action(parseInt(sourceRef.current.value, 10), parseInt(targetRef.current.value, 10))} />
            </div>
        </div>
    );
}
export default LinkEditor;