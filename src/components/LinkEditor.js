import './LinkEditor.css';
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function LinkEditor({ change, action, source, target, icon, nodes }) {
    const sourceRef = useRef();
    const targetRef = useRef();
    return (
        <div className="link">
            <select ref={sourceRef} className="link"
                onChange={() => change && change(sourceRef.current.value, targetRef.current.value)}
                defaultValue={source ? source : "source"}>
                {nodes && nodes.map((node, i) => <option key={i} value={node.id}>{node.v}</option>)}
            </select>
            <FontAwesomeIcon icon={faArrowRight} fixedWidth />
            <select ref={targetRef} className="link"
                onChange={() => change && change(sourceRef.current.value, targetRef.current.value)}
                defaultValue={target ? target : "target"}>
                {nodes && nodes.map((node, i) => <option key={i} value={node.id}>{node.v}</option>)}
            </select>
            <div className="action"><FontAwesomeIcon icon={icon} fixedWidth
                onClick={() => {
                    action(parseInt(sourceRef.current.value, 10), parseInt(targetRef.current.value, 10));
                }} />
            </div>
        </div>
    );
}
export default LinkEditor;