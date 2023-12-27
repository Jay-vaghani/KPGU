import React from "react";
import { Box } from "@mui/material";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Accordion from "react-bootstrap/Accordion";
import { useNavigate } from "react-router-dom";

function MainNavbar() {
  const width = {
    xs: "120px",
    sm: "170px",
    lg: "200px",
  };

  let navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-white ">
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
            <Nav.Link onClick={() => navigate("/")}>HOME</Nav.Link>
            <NavDropdown title="ABOUT US" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => navigate("/about/skect")}>
                Sponsoring Body-SKECT
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => navigate("/about/our-leadership")}
              >
                OUR LEADERSHIP
              </NavDropdown.Item>
              <NavDropdown.Item>KPGU Vadodara</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/about/achievements")}>
                SIGNIFICANT ACHIEVEMENTS
              </NavDropdown.Item>
              <NavDropdown.Item>VISION & MISSION</NavDropdown.Item>
              <NavDropdown.Item>
                MESSAGE FROM DR. KIRAN C. PATEL
              </NavDropdown.Item>
              <NavDropdown.Item>
                MESSAGE FROM THE PRESIDENT'S DESK
              </NavDropdown.Item>
              <NavDropdown.Item>MESSAGE FROM THE PROVOST</NavDropdown.Item>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>GOVERNANCE</Accordion.Header>
                  <Accordion.Body>
                    <NavDropdown.Item>GOVERNING BODY</NavDropdown.Item>
                    <NavDropdown.Item>BOARD OF MANAGEMENT</NavDropdown.Item>
                    <NavDropdown.Item>ACADEMIC COUNCIL</NavDropdown.Item>
                    <NavDropdown.Item>BOARD OF STUDIES</NavDropdown.Item>
                    <NavDropdown.Item>FINANCE COMMITTEE</NavDropdown.Item>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <NavDropdown.Item>UNIVERSITY OFFICERS</NavDropdown.Item>
              <NavDropdown.Item>STATUTORY RECOGNITION</NavDropdown.Item>
              <NavDropdown.Item>ACCREDITATIONS & RECOGNITION</NavDropdown.Item>
              <Accordion flush>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>APPROVALS</Accordion.Header>
                  <Accordion.Body>
                    <NavDropdown.Item>Institute of Technology</NavDropdown.Item>
                    <NavDropdown.Item>Institute of Pharmacy</NavDropdown.Item>
                    <NavDropdown.Item>ACADEMIC COUNCIL</NavDropdown.Item>
                    <NavDropdown.Item>UGC Approval</NavDropdown.Item>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <NavDropdown.Item>AWARDS & ACCOLADES</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="ACADEMIC" id="basic-nav-dropdown">
              <Accordion flush>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Faculty&nbsp;of&nbsp;Engineering&nbsp;&&nbsp;Technology&nbsp;&nbsp;&nbsp;
                  </Accordion.Header>
                  <Accordion.Body>
                    <Accordion flush>
                      <Accordion.Item eventKey="3">
                        <NavDropdown.Item>
                          Krishna School of Emerging
                          <br />
                          Technology & Applied Research
                        </NavDropdown.Item>
                        <Accordion.Header>
                          Krishna&nbsp;School&nbsp;of&nbsp;Diploma&nbsp;&
                          <br />
                          Studies
                        </Accordion.Header>
                        <Accordion.Body>
                          <Accordion flush>
                            <Accordion.Item eventKey="1">
                              <Accordion.Header>Diploma</Accordion.Header>
                              <Accordion.Body>
                                <NavDropdown.Item>
                                  Computer Science and Engineering
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                  Information Technology
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                  Electrical Engineering
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                  Civil Engineering
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                  Mechanical Engineering
                                </NavDropdown.Item>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion flush>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Faculty Of Medicine & Healthcare
                  </Accordion.Header>
                  <Accordion.Body>
                    <Accordion flush>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          Krishna School of Pharmacy & Research
                        </Accordion.Header>
                        <Accordion.Body>
                          <NavDropdown.Item>UG</NavDropdown.Item>
                          <Accordion flush>
                            <Accordion.Item eventKey="1">
                              <Accordion.Header>PG</Accordion.Header>
                              <Accordion.Body>
                                <NavDropdown.Item>
                                  Pharmaceutics
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                  Pharmaceutical Quality Assurance
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                  Pharmaceutical Technology
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                  Pharmacology
                                </NavDropdown.Item>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <NavDropdown.Item>Ph.D</NavDropdown.Item>
                          <NavDropdown.Item>BOARD OF STUDIES</NavDropdown.Item>
                          <NavDropdown.Item>Audited Statement</NavDropdown.Item>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <Accordion flush>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          Krishna School of Physiotherapy & Rehabiliation
                        </Accordion.Header>
                        <Accordion.Body>
                          <Accordion flush>
                            <Accordion.Item eventKey="1">
                              <Accordion.Header>UG</Accordion.Header>
                              <Accordion.Body>
                                <NavDropdown.Item>BPT</NavDropdown.Item>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <Accordion flush>
                            <Accordion.Item eventKey="1">
                              <Accordion.Header>PG</Accordion.Header>
                              <Accordion.Body>
                                <NavDropdown.Item>
                                  Musculoskeletal & Sports
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                  Neurological & Psychosomatic
                                  <br />
                                  Disorders
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                  Cardiorespiratory & Intensive Care
                                </NavDropdown.Item>{" "}
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <Accordion flush>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          Krishna School of Nursing
                        </Accordion.Header>
                        <Accordion.Body>
                          <NavDropdown.Item>B. Sc. Nursing</NavDropdown.Item>
                          <NavDropdown.Item>GNM</NavDropdown.Item>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <Accordion flush>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          Krishna Ayurved Medical College
                        </Accordion.Header>
                        <Accordion.Body>
                          <Accordion flush>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>UG</Accordion.Header>
                              <Accordion.Body>
                                <NavDropdown.Item>B.A.M.S</NavDropdown.Item>{" "}
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion flush>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>Faculty Of Science</Accordion.Header>
                  <Accordion.Body>
                    <NavDropdown.Item>
                      Krishna School of Science
                    </NavDropdown.Item>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion flush>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    Faculty Of Commerce & Management
                  </Accordion.Header>
                  <Accordion.Body>
                    <Accordion flush>
                      <Accordion.Item eventKey="6">
                        <Accordion.Header>
                          Krishna School of Business Management
                        </Accordion.Header>
                        <Accordion.Body>
                          <Accordion flush>
                            <Accordion.Item eventKey="6">
                              <Accordion.Header>UG/PG</Accordion.Header>
                              <Accordion.Body>
                                <NavDropdown.Item>BBA/MBA</NavDropdown.Item>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <Accordion flush>
                      <Accordion.Item eventKey="6">
                        <Accordion.Header>
                          Krishna School of Commerce
                        </Accordion.Header>
                        <Accordion.Body>
                          <Accordion flush>
                            <Accordion.Item eventKey="6">
                              <Accordion.Header>UG</Accordion.Header>
                              <Accordion.Body>
                                <NavDropdown.Item>B.com</NavDropdown.Item>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion flush>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                    Faculty Of Humanities & Policy Studies
                  </Accordion.Header>
                  <Accordion.Body>
                    <Accordion flush>
                      <Accordion.Item eventKey="7">
                        <Accordion.Header>
                          Krishna School of Arts & Humanities
                        </Accordion.Header>
                        <Accordion.Body>
                          <Accordion flush>
                            <Accordion.Item eventKey="7">
                              <Accordion.Header>UG</Accordion.Header>
                              <Accordion.Body>
                                <NavDropdown.Item>BA</NavDropdown.Item>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </NavDropdown>
            <NavDropdown title="CAMPUS" id="basic-nav-dropdown">
              <NavDropdown.Item>Infrastructure</NavDropdown.Item>
              <NavDropdown.Item>Gallery</NavDropdown.Item>
              <NavDropdown.Item>ATM & Bank Facilities</NavDropdown.Item>
              <NavDropdown.Item>Dining & Cafeteria</NavDropdown.Item>
              <NavDropdown.Item>Health Facilities</NavDropdown.Item>
              <NavDropdown.Item>Library & Information System</NavDropdown.Item>
              <NavDropdown.Item>Safety & Security</NavDropdown.Item>
              <NavDropdown.Item>Environment</NavDropdown.Item>
              <NavDropdown.Item>Arts & Cultural Programs</NavDropdown.Item>
              <NavDropdown.Item>Sports & Recreation</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="ADMISSIONS" id="basic-nav-dropdown">
              <NavDropdown.Item>UG PROGRAMMES</NavDropdown.Item>
              <NavDropdown.Item>PG PROGRAMMES</NavDropdown.Item>
              <NavDropdown.Item>DOCTORAL PROGRAMMES</NavDropdown.Item>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>ADMISSION PROCEDURE</Accordion.Header>
                  <Accordion.Body>
                    <NavDropdown.Item>UG/PG Programs</NavDropdown.Item>
                    <NavDropdown.Item>Admission Policy</NavDropdown.Item>
                    <NavDropdown.Item>ACADEMIC COUNCIL</NavDropdown.Item>
                    <NavDropdown.Item>
                      International Student <br /> Admission
                    </NavDropdown.Item>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <NavDropdown.Item>Hostel Life</NavDropdown.Item>
              <NavDropdown.Item>SCHOLARSHIPS & FREE-SHIPS</NavDropdown.Item>
              <NavDropdown.Item>EDUCATION LOAN</NavDropdown.Item>
              <NavDropdown.Item>TRANSPORTATION</NavDropdown.Item>
              <NavDropdown.Item>EXAMINATION SYSTEM</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">PLACEMENTS</Nav.Link>
            <NavDropdown
              title="RESEARCH & PUBLICATIONS"
              id="basic-nav-dropdown"
            >
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

export default MainNavbar;
