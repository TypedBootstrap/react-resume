import React from 'react';

interface HeadingProps {
    children: string;
}

const Heading: React.FC<HeadingProps> = props => <h2 className="mb-5">{props.children}</h2>;

export default Heading;
