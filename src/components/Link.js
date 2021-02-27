import './Link.css';
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Link({ source, target, icon, action }) {
    const sourceRef = useRef();
    const targetRef = useRef();
    return (
        <div className="link">
            <div ref={sourceRef} className="link-value">{source}</div>
            <FontAwesomeIcon icon={faArrowRight} fixedWidth />
            <div ref={targetRef} className="link-value">{target}</div>
            <div className="action"><FontAwesomeIcon icon={icon} fixedWidth onClick={() => action()} />
            </div>
        </div>
    );
}
export default Link;