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
          "After creating successful Computer Engineers from last 17 years at Babaria Institute of Technology we are now entered into the education of Information technology under our Global University. The Department of Information Technology was established in the year 2020 with the objective of imparting knowledge in cutting-edge technologies in Information Technology.",
          "The Department has a team of dynamic, young and dedicated staff, with specialization in wide array of areas. The Department has well equipped laboratories with facilities that are vital to train the students in state-of-art software and hardware. It comprises of centrally air-conditioned laboratories equipped with high configuration computers and servers backed by licensed software, high speed internet connectivity through fibre optics on leased line and Wi-Fi.",
          "Technical education provides the brainpower to run the value adding processes of the nation. Technology is the vehicle for development and contributes to the conversion of material and other resources into value added products and services, which in turn enhances of quality of life of our people. The key to the engine of growth is the brain of techno scientific and managerial work force. This human resource provides the greatest advantage subject to condition the brainpower is developed to the fullest potential, both in numbers and quality. The quality of brainpower is the most important resources.", "The Department always strives to reach the latest technology and advancement in this field to the young learners as well as aspirants by inviting the corporate legends and experienced academicians to enlighten the Information Technology community of our institution.", "We focus on skill development of students and faculty members by inviting industry experts to deliver expert talks, by organizing competitions and workshops also by signing MOUs and collaborations with leading industry.", "To meet the gap between educational institute & IT industry one would like to act as a bridge & therefore would like to start advance and emerging courses and increase of strength to cater the need of various industries. So our up growing department of Information technology is offering knowledge in emerging areas and strives to work towards the vision of the institute."
        ]}
      />

    </Box>
  );
}

export default AboutDepartment;
