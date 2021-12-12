import React from 'react';
import classNames from 'classnames';
import { Interest } from '../types';
import { Heading, Section } from './common';

interface InterestsSectionProps {
    interests: Interest[];
}

const InterestsSection: React.FC<InterestsSectionProps> = ({ interests }) => (
    <Section id="interests">
        <Heading>Interests</Heading>
        {interests.map((interest, i) => (
            <p key={i} className={classNames({ 'mb-0': i + 1 === interests.length })}>
                {interest.description}
            </p>
        ))}
    </Section>
);

export default InterestsSection;
