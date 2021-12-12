import React from 'react';
import { Skill, Workflow } from '../types';
import { Heading, Section, SubHeading } from './common';
import SkillsList from './SkillsList';
import WorkflowList from './WorkflowList';

interface SkillsSectionProps {
    skills: Skill[];
    workflows: Workflow[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, workflows }) => (
    <Section id="skills">
        <Heading>Skills</Heading>
        <SubHeading>Programming Languages &amp; Tools</SubHeading>
        <SkillsList skills={skills} />

        <SubHeading>Workflow</SubHeading>
        <WorkflowList workflows={workflows} />
    </Section>
);

export default SkillsSection;
