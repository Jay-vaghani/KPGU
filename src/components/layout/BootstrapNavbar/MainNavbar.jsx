import React, { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { Box } from "@mui/material";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Accordion from 'react-bootstrap/Accordion';

function MainNavbar() {
    const { maxWidth } = useContext(AppContext);
    const width = {
        xs: "120px",
        sm: "170px",
        lg: "200px",
    };
    return (
        <Navbar expand="lg" className="bg-white ">
            <Container fluid>
                <Navbar.Brand style={{ width: "70px" }}>
                    <Box width={width}>
                        <img
                            src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1699517175/KPGU/logo.svg"
                            alt="Logo"
                            width={"100%"}
                        />
                    </Box>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Sponsoring Body-SKECT</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">OUR LEADERSHIP</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">KPGU Vadodara</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">SIGNIFICANT ACHIEVEMENTS</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">VISION & MISSION</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Separated linkMESSAGE FROM DR. KIRAN C. PATEL</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">MESSAGE FROM THE PRESIDENT'S DESK</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">MESSAGE FROM THE PROVOST</NavDropdown.Item>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Governance</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item></Accordion>
                            <NavDropdown.Item href="#action/3.4">UNIVERSITY OFFICERS</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">STATUTORY RECOGNITION</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">ACCREDITATIONS & RECOGNITION</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Approvals</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">AWARDS & ACCOLADES</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">ACADEMIC</Nav.Link>
                        <Nav.Link href="#link">CAMPUS</Nav.Link>
                        <Nav.Link href="#link">ADMISSIONS</Nav.Link>
                        <Nav.Link href="#link">PLACEMENTS</Nav.Link>
                        <Nav.Link href="#link">RESEARCH & PUBLICATIONS</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNavbar;

{
    /* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */
}
















