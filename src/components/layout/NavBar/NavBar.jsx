import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ContactNavbar from "./ContactNavbar";
import MainNavBar from "./MainNavBar";

function NavBar() {
  const [innerWith, setInnerWith] = useState(window.innerWidth);
  const Links = [
    // Home
    {
      title: "Home",
      url: "/",
      dropdown: false,
    },
    // About Us
    {
      title: "About us",
      url: "/about",
      dropdown: [
        {
          title: "Sponsoring Body-SKECT",
          url: "/",
          dropdown: false,
        },
        {
          title: "OUR LEADERSHIP",
          url: "/",
          dropdown: false,
        },
        {
          title: "SIGNIFICANT ACHIEVEMENTS",
          url: "/",
          dropdown: false,
        },
        {
          title: "KPGU Vadodara",
          url: "/",
          dropdown: false,
        },
        {
          title: "VISION & MISSION",
          url: "/",
          dropdown: false,
        },
        {
          title: "MESSAGE FROM DR. KIRAN C. PATEL",
          url: "/",
          dropdown: false,
        },
        {
          title: "MESSAGE FROM THE PRESIDENT'S DESK",
          url: "/",
          dropdown: false,
        },
        {
          title: "MESSAGE FROM THE PROVOST",
          url: "/",
          dropdown: false,
        },
        {
          title: "Governance",
          url: "/",
          dropdown: [
            {
              title: "GOVERNING BODY",
              url: "/",
              dropdown: false,
            },
            {
              title: "BOARD OF MANAGEMENT",
              url: "/",
              dropdown: false,
            },
            {
              title: "ACADEMIC COUNCIL",
              url: "/",
              dropdown: false,
            },
            {
              title: "BOARD OF STUDIES",
              url: "/",
              dropdown: false,
            },
            {
              title: "FINANCE COMMITTEE",
              url: "/",
              dropdown: false,
            },
          ],
        },
        {
          title: "UNIVERSITY OFFICERS",
          url: "/",
          dropdown: false,
        },
        {
          title: "STATUTORY RECOGNITION",
          url: "/",
          dropdown: false,
        },
        {
          title: "ACCREDITATIONS & RECOGNITION",
          url: "/",
          dropdown: false,
        },
        {
          title: "Approvals",
          url: "/",
          dropdown: [
            {
              title: "Institute of Technology",
              url: "/",
              dropdown: false,
            },
            {
              title: "Institute of Pharmacy",
              url: "/",
              dropdown: false,
            },
            {
              title: "UGC Approval",
              url: "/",
              dropdown: false,
            },
          ],
        },
        {
          title: "AWARDS & ACCOLADES",
          url: "/",
          dropdown: false,
        },
      ],
    },
    // Academic
    {
      title: "Academic",
      url: "/",
      dropdown: [
        // Faculty of Engineering & Technology
        {
          title: "Faculty of Engineering & Technology",
          url: "/",
          dropdown: [
            // Krishna School of Emerging Technology & Applied Research
            {
              title: "Krishna School of Emerging Technology & Applied Research",
              url: "/",
              dropdown: false,
            },
            // Krishna School of Diploma & Studies
            {
              title: "Krishna School of Diploma & Studies",
              url: "/",
              dropdown: [
                // Diploma
                {
                  title: "Diploma",
                  url: "/",
                  dropdown: [
                    // Computer Science and Engineering
                    {
                      title: "Computer Science and Engineering",
                      url: "/",
                      dropdown: false,
                    },
                    // Information Technology
                    {
                      title: "Information Technology",
                      url: "/",
                      dropdown: false,
                    },
                    // Electrical Engineering
                    {
                      title: "Electrical Engineering",
                      url: "/",
                      dropdown: false,
                    },
                    // Civil Engineering
                    {
                      title: "Civil Engineering",
                      url: "/",
                      dropdown: false,
                    },
                    // Mechanical Engineering
                    {
                      title: "Mechanical Engineering",
                      url: "/",
                      dropdown: false,
                    },
                  ],
                },
              ],
            },
          ],
        },
        // Faculty Of Medicine & Healthcare
        {
          title: "Faculty Of Medicine & Healthcare",
          url: "/",
          dropdown: [
            // Krishna School of Pharmacy & Research
            {
              title: "Krishna School of Pharmacy & Research",
              url: "/",
              dropdown: [
                // UG
                {
                  title: "UG",
                  url: "/",
                  dropdown: false,
                },
                // PG
                {
                  title: "PG",
                  url: "/",
                  dropdown: [
                    // Pharmaceutics
                    {
                      title: "Pharmaceutics",
                      url: "/",
                      dropdown: false,
                    },
                    // Pharmaceutical Quality Assurance
                    {
                      title: "Pharmaceutical Quality Assurance",
                      url: "/",
                      dropdown: false,
                    },
                    // Pharmaceutical Technology
                    {
                      title: "Pharmaceutical Technology",
                      url: "/",
                      dropdown: false,
                    },
                    // Pharmacology
                    {
                      title: "Pharmacology",
                      url: "/",
                      dropdown: false,
                    },
                  ],
                },
                // Ph.D
                {
                  title: "Ph.D",
                  url: "/",
                  dropdown: false,
                },
                // Audited Statement
                {
                  title: "Audited Statement",
                  url: "/",
                  dropdown: false,
                },
              ],
            },
            // Krishna School of Physiotherapy & Rehabilitation
            {
              title: "Krishna School of Physiotherapy & Rehabilitation",
              url: "/",
              dropdown: [
                // UG
                {
                  title: "UG",
                  url: "/",
                  dropdown: [
                    // BPT
                    {
                      title: "BPT",
                      url: "/",
                      dropdown: false,
                    },
                  ],
                },
                // PG
                {
                  title: "PG",
                  url: "/",
                  dropdown: [
                    // Musculoskeletal & Sports
                    {
                      title: "Musculoskeletal & Sports",
                      url: "/",
                      dropdown: false,
                    },
                    // Neurological & Psychosomatic Disorders
                    {
                      title: "Neurological & Psychosomatic Disorders",
                      url: "/",
                      dropdown: false,
                    },
                    // Cardiorespiratory & Intensive Care
                    {
                      title: "Cardiorespiratory & Intensive Care",
                      url: "/",
                      dropdown: false,
                    },
                  ],
                },
              ],
            },
            // Krishna School of Nursing
            {
              title: "Krishna School of Nursing",
              url: "/",
              dropdown: [
                // B. Sc. Nursing
                {
                  title: "B. Sc. Nursing",
                  url: "/",
                  dropdown: false,
                },
                // GNM
                {
                  title: "GNM",
                  url: "/",
                  dropdown: false,
                },
              ],
            },
            // Krishna Ayurved Medical College
            {
              title: "Krishna Ayurved Medical College",
              url: "/",
              dropdown: [
                // UG
                {
                  title: "UG",
                  url: "/",
                  dropdown: [
                    // B.A.M.S
                    {
                      title: "B.A.M.S",
                      url: "/",
                      dropdown: false,
                    },
                  ],
                },
              ],
            },
          ],
        },
        // Faculty Of Science
        {
          title: "Faculty Of Science",
          url: "/",
          dropdown: [
            // krishna school of science
            {
              title: "krishna school of science",
              url: "/",
              dropdown: false,
            },
          ],
        },
        // Faculty Of Commerce & Management
        {
          title: "Faculty Of Commerce & Management",
          url: "/",
          dropdown: [
            // Krishna School of Business Management
            {
              title: "Krishna School of Business Management",
              url: "/",
              dropdown: [
                // UG/PG
                {
                  title: "UG/PG",
                  url: "/",
                  dropdown: [
                    // BBA / MBA
                    {
                      title: "BBA / MBA",
                      url: "/",
                      dropdown: false,
                    },
                  ],
                },
              ],
            },
            // Krishna School of Commerce
            {
              title: "Krishna School of Commerce",
              url: "/",
              dropdown: [
                // UG
                {
                  title: "UG",
                  url: "/",
                  dropdown: [
                    // B.com
                    {
                      title: "B.com",
                      url: "/",
                      dropdown: false,
                    },
                  ],
                },
              ],
            },
          ],
        },
        // Faculty Of Humanities & Policy Studies
        {
          title: "Faculty Of Humanities & Policy Studies",
          url: "/",
          dropdown: [
            // Krishna School of Arts & Humanities
            {
              title: "Krishna School of Arts & Humanities",
              url: "/",
              dropdown: [
                // UG
                {
                  title: "UG",
                  url: "/",
                  dropdown: [
                    // B.A
                    {
                      title: "B.A",
                      url: "/",
                      dropdown: false,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    // Campus
    {
      title: "Campus",
      url: "/",
      dropdown: [
        // Infrastructure
        {
          title: "Infrastructure",
          url: "/",
          dropdown: false,
        },
        // Gallery
        {
          title: "Gallery",
          url: "/",
          dropdown: false,
        },
        // ATM & Bank Facilities
        {
          title: "ATM & Bank Facilities",
          url: "/",
          dropdown: false,
        },
        // Dining & Cafeteria
        {
          title: "Dining & Cafeteria",
          url: "/",
          dropdown: false,
        },
        // Health Facilities
        {
          title: "Health Facilities",
          url: "/",
          dropdown: false,
        },
        // Library & Information System
        {
          title: "Library & Information System",
          url: "/",
          dropdown: false,
        },
        // Safety & Security
        {
          title: "Safety & Security",
          url: "/",
          dropdown: false,
        },
        // Environment
        {
          title: "Environment",
          url: "/",
          dropdown: false,
        },
        // Arts & Cultural Programs
        {
          title: "Arts & Cultural Programs",
          url: "/",
          dropdown: false,
        },
        // Sports & Recreation
        {
          title: "Sports & Recreation",
          url: "/",
          dropdown: false,
        },
      ],
    },
    // ADMISSIONS
    {
      title: "ADMISSIONS",
      url: "/",
      dropdown: [
        // UG PROGRAMMES
        {
          title: "UG PROGRAMMES",
          url: "/",
          dropdown: false,
        },
        // PG PROGRAMMES
        {
          title: "PG PROGRAMMES",
          url: "/",
          dropdown: false,
        },
        // DOCTORAL PROGRAMMES
        {
          title: "DOCTORAL PROGRAMMES",
          url: "/",
          dropdown: false,
        },
        // ADMISSION PROCEDURE
        {
          title: "ADMISSION PROCEDURE",
          url: "/",
          dropdown: [
            // UG/PG Programs
            {
              title: "UG/PG Programs",
              url: "/",
              dropdown: false,
            },
            // Admission Policy
            {
              title: "Admission Policy",
              url: "/",
              dropdown: false,
            },
            // International Student Admission
            {
              title: "International Student Admission",
              url: "/",
              dropdown: false,
            },
          ],
        },
        // Hostel Life
        {
          title: "Hostel Life",
          url: "/",
          dropdown: false,
        },
        // SCHOLARSHIPS & FREE-SHIPS
        {
          title: "SCHOLARSHIPS & FREE-SHIPS",
          url: "/",
          dropdown: false,
        },
        // EDUCATION LOAN
        {
          title: "EDUCATION LOAN",
          url: "/",
          dropdown: false,
        },
        // TRANSPORTATION
        {
          title: "TRANSPORTATION",
          url: "/",
          dropdown: false,
        },
        // EXAMINATION SYSTEM
        {
          title: "EXAMINATION SYSTEM",
          url: "/",
          dropdown: false,
        },
      ],
    },
    // PLACEMENTS
    {
      title: "PLACEMENTS",
      url: "/",
      dropdown: false,
    },
    // RESEARCH & PUBLICATIONS
    {
      title: "RESEARCH & PUBLICATIONS",
      url: "/",
      dropdown: [
        {
          title: "RESEARCH & INNOVATION",
          url: "/",
          dropdown: false,
        },
        {
          title: "START-UPS",
          url: "/",
          dropdown: false,
        },
        {
          title: "PUBLICATIONS",
          url: "/",
          dropdown: false,
        },
        {
          title: "IPR",
          url: "/",
          dropdown: false,
        },
        {
          title: "FDPS",
          url: "/",
          dropdown: false,
        },
        {
          title: "KPGU JOURNAL",
          url: "/",
          dropdown: false,
        },
      ],
    },
  ];

  window.onresize = () => {
    setInnerWith(window.innerWidth);
  };

  return (
    <>
      <Box display={innerWith < 1035 ? "none" : "block"}>
        <ContactNavbar />
      </Box>
      <MainNavBar />
    </>
  );
}

export default NavBar;
/*

{
  title: "",
  url: "/",
  dropdown: false
},












*/
