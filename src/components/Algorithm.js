import './Algorithm.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Algorithm({ name, action, args, nodes }) {
    const [argValues, setArgs] = useState(args.map(() => null));
    return (
        <code className="algorithm">
            {name}&nbsp;
            {args.map((arg, i) => {
                return (
                    <select
                        defaultValue={arg}
                        key={i}
                        onChange={(e) => {
                            setArgs((oldValues) => {
                                let newValues = [...oldValues];
                                newValues[i] = e.target.value;
                                return newValues;
                            });
                        }}>
                        <option disabled hidden>{arg}</option>
                        {nodes && nodes.map((node, j) => <option key={j} value={node.id}>{node.v}</option>)}
                    </select>
                );
            })}
            <div className="action"><FontAwesomeIcon icon={faArrowRight} fixedWidth onClick={() => action && action(...argValues.map((value) => parseInt(value, 10)))}/></div>
        </code>
    );
}
export default Algorithm;