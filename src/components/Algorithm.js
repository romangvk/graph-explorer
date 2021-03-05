import './Algorithm.css';
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Algorithm({ name, action, args, nodes }) {
    const inputRefs = useRef({});
    return (
        <code className="algorithm">
            {name}&nbsp;
            {args.map((arg, i) => {
                return (
                    <select
                        defaultValue={arg}
                        ref={(el) => (inputRefs.current[arg] = el)}>
                        <option disabled hidden>{arg}</option>
                        {nodes && nodes.map((node, i) => <option key={i} value={node.id}>{node.v}</option>)}
                    </select>
                );
            })}
            <div className="action"><FontAwesomeIcon icon={faArrowRight} fixedWidth onClick={() => action && action()} /></div>
        </code>
    );
}
export default Algorithm;