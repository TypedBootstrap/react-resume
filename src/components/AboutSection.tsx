import React from 'react';
import { Profile } from '../types';
import { Section } from './common';
import SocialIcons from './SocialIcons';

interface AboutSectionProps {
    profile: Profile;
}

const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => (
    <Section id="about">
        <h1 className="mb-0">
            {profile.firstName}
            <span className="text-primary">{profile.lastName}</span>
        </h1>
        <div className="subheading mb-5">
            {profile.addressLine1} · {profile.addressLine2} · {profile.telephone} ·{' '}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        <p className="lead mb-5">{profile.description}</p>
        <SocialIcons socials={profile.socials} />
    </Section>
);

export default AboutSection;
