import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

interface NavScrollLinkProps {
    to: string;
    children: string;
}

const NavScrollLink: React.FC<NavScrollLinkProps> = (props) => (
    <Nav.Link as={Link} duration={500} spy smooth to={props.to}>
        {props.children}
    </Nav.Link>
);

export default NavScrollLink;
