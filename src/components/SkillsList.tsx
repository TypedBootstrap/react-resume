import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Skill } from '../types';

interface SkillsListProps {
    skills: Skill[];
}

const SkillsList: React.FC<SkillsListProps> = ({ skills }) => (
    <ul className="list-inline dev-icons">
        {skills.map((skill, i) => (
            <li key={i} className="list-inline-item">
                <FontAwesomeIcon icon={['fab', skill.icon]} />
            </li>
        ))}
    </ul>
);

export default SkillsList;
