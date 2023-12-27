import { Box, Stack } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../../../../contexts/AppContext";
import Paragraph from "../../../Common/Paragraph";
import {} from "react-bootstrap";

function Achievements() {
  const { maxWidth, innerWidth } = useContext(AppContext);
  return (
    <Box maxWidth={maxWidth} mx={"auto"} p={"3%"}>
      <h4 className=" fw-semibold color-secondary">KPGU'S SPONSORING</h4>
      <h3 className="display-4 fw-semibold mb-4">SIGNIFICANT ACHIEVEMENTS</h3>
      <Paragraph
        content={
          "The Krishna Edu Campus, established by Shree Krishna Educational and Charitable Trust (SKECT), today, stands testimony as the significant hub for educational excellence, consistently in pursuit of newer horizon. Since, its inception during the year 2004, the institutions run by it have been providing equitable professional education offering programs, the most sought-after by meritorious students in Engineering, Pharmacy, Nursing, Physiotherapy, Ayurveda and Pure Science, both at UG & PG level in an environment conducive for academic and professional growth. The significant milestones include"
        }
      />

      <ol>
        <li className="fs-3 mb-3 text-capital fw-semibold">
          Established Shree Krishna Educational & Charitable Trust in 2000
        </li>
        <li className="fs-3 mb-3 text-capital fw-semibold">
          Established Krishna Edu Campus built on a sprawling 26 Acres of green
          campus with landscapes,gardens & serene environs.
        </li>
        <li className="fs-3 mb-3 text-capital fw-semibold">
          Provided institutions with 8.42 Lacs Sq.Mt. of the State-of-the-Art
          Infrastructure for Academic, and Research & Skills Building Functions.
        </li>
        <li className="fs-3 mb-3 text-capital fw-semibold">
          Established following Six Professional Institutions.
        </li>
      </ol>
    </Box>
  );
}

export default Achievements;
