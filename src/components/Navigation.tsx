import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import profile from '../assets/images/profile.jpeg';
import { NavScrollLink } from './common';

const Navigation: React.FC = () => (
    <Navbar bg="primary" className="navigation" expand="lg" fixed="top" variant="dark">
        <Navbar.Brand href="/">
            <span className="d-block d-lg-none">Clarence Taylor</span>
            <span className="d-none d-lg-block">
                <img
                    className="img-fluid img-profile rounded-circle mx-auto mb-2"
                    src={profile}
                    alt="..."
                />
            </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
            <Nav className="me-auto">
                <NavScrollLink to="about">About</NavScrollLink>
                <NavScrollLink to="experience">Experience</NavScrollLink>
                <NavScrollLink to="education">Education</NavScrollLink>
                <NavScrollLink to="skills">Skills</NavScrollLink>
                <NavScrollLink to="interests">Interests</NavScrollLink>
                <NavScrollLink to="awards">Awards</NavScrollLink>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Navigation;
