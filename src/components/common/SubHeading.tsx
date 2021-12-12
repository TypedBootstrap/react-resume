import React from 'react';

interface SubHeadingProps {
    children: string;
}

const SubHeading: React.FC<SubHeadingProps> = props => (
    <div className="subheading mb-3">{props.children}</div>
);

export default SubHeading;
