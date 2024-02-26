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
          "Krishna School of Emerging Technology & Applied Research (KSET), formerly known as Babaria Institute of Technology, is a part of Drs. Kiran and Pallavi Patel Global University (KPGU), Vadodara, Gujarat. It is impressive that the institute is highly ranked and offers diploma, UG and PG programs in various disciplines like Mechanical Engineering, Civil Engineering, Computer Science and Engineering, Information Technology, Electrical Engineering, and more.",
          "The Department of Mechanical Engineering at KSET has a rich history, being established in 2004 as part of Babaria Institute of Technology and continuing as a part of KSET under the Faculty of Engineering & Technology at KPGU Vadodara. The department has made progress by introducing a postgraduate program in Advanced Manufacturing System in 2014 and a PhD program in 2021.",
          "With a team of qualified, experienced, and dedicated faculty members specializing in various areas like production technology, machine design, CAD-CAM, and thermal system design, the department ensures quality education and guidance for students. The department has a conducive learning environment with classrooms equipped with overhead projectors, facilitating better visualization and a more interactive learning experience. Additionally, the institute provides facilities like an auditorium and smart classrooms with audio-visual capabilities for conducting seminars, workshops, and expert talks.",
          "The department actively promotes student growth by encouraging them to pursue internships and industry-defined projects, participate in short-term training programs, seminars, workshops, and webinars to enhance their technical skills. Involvement in various technical events such as Hackathon and tech-fests allow students to gain hands-on experience and stay updated with the latest developments in the field. Attending technical exhibitions at the state and national level, like Vibrant Gujarat and Auto Expo, provides students with valuable exposure to industry trends and innovations. The department also encourages students to join professional bodies like ISTE (Indian Society for Technical Education), SAE (Society of Automotive Engineers), and IE (Institution of Engineers) through student membership, facilitating their professional development and networking opportunities.",
          "To further enhance student learning, the department organizes guest lectures by industry and subject experts, providing exposure to cutting-edge technology. The department organizes regular Industrial visits that offer real-life experiences and insights into practical applications. The department also conducts project exhibitions to showcase the talent and accomplishments of final-year students.",
          "Overall, the Department of Mechanical Engineering at KSET, KPGU demonstrates a commitment to providing a comprehensive and practical education, fostering student growth through a combination of theoretical knowledge, practical skills, industry exposure, and networking opportunities. ",
        ]}
      />
    </Box>
  );
}

export default AboutDepartment;
