import { Box, Grid } from "@mui/material";
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
          "Krishna School of Diploma Studies (KSDS) (Formerly known as Babaria Institute of Technology), Drs. Kiran and Pallavi Patel Global University (KPGU), Vadodara  are highly ranked institutes in Gujarat. The institutes provide degree engineering and diploma program in various disciplines like CE, IT, ME, EE, Civil.",
          "Department of Mechanical Engineering came into existence in the year 2004 as a part of Babaria Institute of Technology and presently it is part of KSET & KSDS, Faculty of Engineering & Technology, KPGU, Vadodara.  The department started P.G. program in Advance Manufacturing System in the year 2014 and Ph.D. program in 2021.",
          "The department has well-qualified, experienced and dedicated faculty members with specialization in various areas like Production Technology, Machine Design, CAD-CAM and Thermal System Design.",
          "Classrooms in the department have over-head projectors for better learning experience with visualization. For conducting seminars, workshops and expert talks, institute has facilities like auditorium and smart class with audio-visual facilities.",
          "To further enhance student learning, the department organizes guest lectures by industry and subject experts, providing exposure to cutting-edge technology. The department organizes regular Industrial visits that offer real-life experiences and insights into practical applications. The department also conducts project exhibitions to showcase the talent and accomplishments of final-year students.",
          "Overall, the Department of Mechanical Engineering at KSET, KPGU demonstrates a commitment to providing a comprehensive and practical education, fostering student growth through a combination of theoretical knowledge, practical skills, industry exposure, and networking opportunities. ",
        ]}
      />
    </Box>
  );
}

export default AboutDepartment;
