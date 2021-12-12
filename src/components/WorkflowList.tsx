import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Workflow } from '../types';

interface WorkflowListProps {
    workflows: Workflow[];
}

const WorkflowList: React.FC<WorkflowListProps> = ({ workflows }) => (
    <ul className="fa-ul mb-0">
        {workflows.map((workflow, i) => (
            <li key={i}>
                <span className="fa-li">
                    <FontAwesomeIcon icon="check" />
                </span>
                {workflow.description}
            </li>
        ))}
    </ul>
);

export default WorkflowList;
