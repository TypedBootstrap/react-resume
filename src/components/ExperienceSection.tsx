import React from 'react';
import { Experience } from '../types';
import { Heading, Section, SectionItem } from './common';

interface ExperienceSectionProps {
    experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => (
    <Section id="experience">
        <Heading>Experience</Heading>
        {experiences.map((experience, i) => (
            <SectionItem
                key={i}
                heading={experience.title}
                subheading={experience.companyName}
                description={experience.description}
                meta={experience.duration}
                last={i + 1 === experiences.length}
            />
        ))}
    </Section>
);

export default ExperienceSection;
