import { Box } from "@mui/material";
import React from "react";
import Paragraph from "../../../../../../../Common/Paragraph";

function AboutDepartment() {
  return (
    <Box borderRadius={4}>
      <h2 className="text-uppercase fw-bold color-secondary mb-4">
        About Department
      </h2>
      <Paragraph
        content={[
          "In the Institute, the Department of Computer Science & Engineering was established in 2004.The department aims wants to offer top-notch computer science education. The controlling centre of computing for the full institute is operated by the Department of Computer Science & Engineering.",
          "Our knowledgeable faculty exposes aspiring computer engineers to a demanding and thorough industry-focused curriculum created to bring out the best in them and keep them up to date with the most cutting-edge technology. Our curriculum progressively improves students’ technical and soft skills. Along with teaching theory, a lot of emphasis is placed on projects, industrial training, and certification.",
          "Our department’s area of emphasis is on institute-industry interface programmes that let students engage with businesses constantly. Equal weight is given to classroom instruction, which is intended to provide theoretical or conceptual knowledge inputs on a range of projects.",
          "The B.Tech Computer Science & Engineering program places a strong focus on the theoretical and practical aspects of Computer Programming, Database Management System, Advance Software Design and Development, System Programming, Internet of Things & Hardware, Wireless & Mobile Computing, Computer Graphics, Web Programming and Development, Operating Systems, AI & ML, Big Data Analytics, and Cyber Security.",
          "The program offers a variety of employment opportunities on both the domestic and international markets. The department has been set up where innovative activities are planned and carried out, and is equipped with the most recent PCs, software, and hands-on expertise for providing high-quality education.",
          "It continues to be the top option among all applicants for admittance to KSET. The young talent that aspires to study, teach, or create in the field of computer science is warmly welcomed by our team. So join us by coming.",
        ]}
      />
    </Box>
  );
}

export default AboutDepartment;
