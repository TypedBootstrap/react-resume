import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Social } from '../types';

interface SocialIconsProps {
    socials: Social[];
}

const SocialIcons: React.FC<SocialIconsProps> = ({ socials }) => (
    <div className="social-icons">
        {socials.map((social, i) => (
            <a key={i} className="social-icon" href="#!">
                <FontAwesomeIcon icon={['fab', social.icon]} />
            </a>
        ))}
    </div>
);

export default SocialIcons;
