import React from 'react';
import { School } from '../types';
import { Heading, Section, SectionItem } from './common';

interface EducationSectionProps {
    schools: School[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ schools }) => (
    <Section id="education">
        <Heading>Education</Heading>
        {schools.map((school, i) => (
            <SectionItem
                key={i}
                heading={school.name}
                subheading={school.degree}
                lead={school.fieldOfStudy}
                description={school.grade}
                meta={school.duration}
                last={i + 1 === schools.length}
            />
        ))}
    </Section>
);

export default EducationSection;
