import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Certification } from '../types';
import { Heading, Section } from './common';

interface AwardsSectionProps {
    certifications: Certification[];
}

const AwardsSection: React.FC<AwardsSectionProps> = ({ certifications }) => {
    const place = (place?: number) => {
        if (place === 1) {
            return (
                <>
                    {place}
                    <sup>st</sup> Place -{' '}
                </>
            );
        }

        if (place === 2) {
            return (
                <>
                    {place}
                    <sup>nd</sup> Place -{' '}
                </>
            );
        }

        if (place === 3) {
            return (
                <>
                    {place}
                    <sup>rd</sup> Place -{' '}
                </>
            );
        }

        return null;
    };

    return (
        <Section id="awards">
            <Heading>Awards &amp; Certifications</Heading>
            <ul className="fa-ul mb-0">
                {certifications.map((certification, i) => (
                    <li key={i}>
                        <span className="fa-li">
                            <FontAwesomeIcon
                                color={certification.colour}
                                icon={certification.icon}
                            />
                        </span>
                        {place(certification.place)}
                        {certification.description}
                    </li>
                ))}
            </ul>
        </Section>
    );
};

export default AwardsSection;
