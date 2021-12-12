import React from 'react';

interface SectionProps {
    id: string;
}

const Section: React.FC<SectionProps> = props => (
    <section id={props.id} className="resume-section">
        <div className="resume-section-content">{props.children}</div>
    </section>
);

export default Section;
