import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Accordion from "react-bootstrap/Accordion";
import { useNavigate } from "react-router-dom";

function MobileNavBar() {



  const width = {
    xs: "120px",
    sm: "170px",
    lg: "200px",
  };

  let navigate = useNavigate();

  const [menu, setMenu] = useState(null)


  useEffect(() => {

    setMenu(document.getElementsByClassName('navbar-collapse')[0])


  })

  const closeMenu = () => {
    menu.classList.remove("show")
  }

  return (
    <Navbar expand="xl">
      <Container fluid className="px-0">
        <Navbar.Brand style={{ width: "70px" }}>
          <Box width={width}>
            <img
              src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1703583684/KPGU/logo.svg"
              alt="Logo"
              width={"100%"}
            />
          </Box>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => navigate("/")
            }>HOME</Nav.Link>
            <NavDropdown title="ABOUT US" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => {
                closeMenu()
                navigate("/about/skect")
              }
              }>
                Sponsoring Body-SKECT</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                closeMenu()
                navigate("/about/our-leadership")
              }
              }>
                OUR LEADERSHIP</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                closeMenu()
                navigate("/about/kpgu-vadodara")
              }
              }>
                KPGU Vadodara</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                closeMenu()
                navigate("/about/achievements")
              }
              }>
                SIGNIFICANT ACHIEVEMENTS</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                closeMenu()
                navigate("/about/vision-mission")
              }
              }>
                VISION & MISSION</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                closeMenu()
                navigate("/about/dr-kiran-c-patel-message")
              }
              }>
                MESSAGE FROM DR. KIRAN C. PATEL</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                closeMenu()
                navigate("/about/message-from-the-presidents-desk")
              }
              }>
                MESSAGE FROM THE PRESIDENT'S DESK</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                closeMenu()
                navigate("/about/message-from-the-provost")
              }
              }>
                MESSAGE FROM THE PROVOST</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                closeMenu()
                navigate("/about/governance/governing-body")
              }
              }>
                GOVERNANCE</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                closeMenu()
                navigate("/about/university-officers")
              }
              }>
                UNIVERSITY OFFICERS</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                closeMenu()
                navigate("/about/statutory-recognition")
              }
              }>
                STATUTORY RECOGNITION</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                closeMenu()
                navigate("/about/approvals/institute-of-technology")
              }
              }>
                APPROVALS</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                closeMenu()
                navigate("/about/awards-accolades")
              }
              }>
                AWARDS & ACCOLADES</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="ACADEMIC" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => {
                closeMenu()
                navigate("academics/faculty-of-engineering-and-technology")
              }
              }>
                Faculty of Engineering Technology</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                closeMenu()
                navigate("academics/faculty-of-medicine-and-healthcare/krishna-school-of-pharmacy-and-research/ug")
              }
              }>
                Faculty Of Medicine & Healthcare</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                closeMenu()
                navigate("academics/faculty-of-sciences/krishna-school-of-sciences/ug")
              }
              }>
                Faculty Of Science</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                closeMenu()
                navigate("academics/faculty-of-commerce-and-management/krishna-school-of-business-management/ug")
              }
              }>
                Faculty Of Commerce & Management</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                closeMenu()
                navigate("academics/faculty-of-humanities-and-policy-studies/krishna-school-of-arts-and-humanities/ug")
              }
              }>
                Studies Policy & Humanities OfFaculty</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="CAMPUS" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => {
                closeMenu()
                navigate("/campus/infrastructure/smart-classrooms")
              }
              }>
                Infrastructure</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                closeMenu()
                navigate("/campus/gallery")
              }
              }>
                Gallery</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                closeMenu()
                navigate("/campus/")
              }
              }>
                ATM & Bank Facilities</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                closeMenu()
                navigate("/campus/")
              }
              }>
                Dining & Cafeteria</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                closeMenu()
                navigate("/campus/")
              }
              }>
                Health Facilities</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                closeMenu()
                navigate("/campus/")
              }
              }>
                Library & Information System</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                closeMenu()
                navigate("/campus/")
              }
              }>
                Safety & Security</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                closeMenu()
                navigate("/campus/")
              }
              }>
                Environment</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                closeMenu()
                navigate("/campus/")
              }
              }>
                Arts & Cultural Programs</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                closeMenu()
                navigate("/campus/")
              }
              }>
                Sports & Recreation</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="ADMISSIONS" id="basic-nav-dropdown">
              <NavDropdown.Item>UG PROGRAMMES</NavDropdown.Item>
              <NavDropdown.Item>PG PROGRAMMES</NavDropdown.Item>
              <NavDropdown.Item>DOCTORAL PROGRAMMES</NavDropdown.Item>
              <NavDropdown.Item>ADMISSION PROCEDURE</NavDropdown.Item>
              <NavDropdown.Item>Hostel Life</NavDropdown.Item>
              <NavDropdown.Item>SCHOLARSHIPS & FREE-SHIPS</NavDropdown.Item>
              <NavDropdown.Item>EDUCATION LOAN</NavDropdown.Item>
              <NavDropdown.Item>TRANSPORTATION</NavDropdown.Item>
              <NavDropdown.Item>EXAMINATION SYSTEM</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">PLACEMENTS</Nav.Link>
            <NavDropdown title="RESEARCH & PUBLICATIONS" id="basic-nav-dropdown">
              <NavDropdown.Item>RESEARCH & INNOVATION</NavDropdown.Item>
              <NavDropdown.Item>START-UPS</NavDropdown.Item>
              <NavDropdown.Item>PUBLICATIONS</NavDropdown.Item>
              <NavDropdown.Item>IPR</NavDropdown.Item>
              <NavDropdown.Item>FDPS</NavDropdown.Item>
              <NavDropdown.Item>KPGU JOURNAL</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MobileNavBar;
