import { Box, Grid } from "@mui/material";
import React from "react";
import Paragraph from "../../../../../../../Common/Paragraph";

function AboutDepartment() {
  const CoreCompetenciesList = [
    {
      title: "Network Security",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579042/KPGU/Images/Institutions/KSET/machine-learning.png",
    },
    {
      title: "Big Data Analytics",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579042/KPGU/Images/Institutions/KSET/machine-learning.png",
    },
    {
      title: "Cloud Computing",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579042/KPGU/Images/Institutions/KSET/machine-learning.png",
    },
    {
      title: "Internet of Things",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579042/KPGU/Images/Institutions/KSET/machine-learning.png",
    },
    {
      title: "Artificial Intelligence",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579042/KPGU/Images/Institutions/KSET/machine-learning.png",
    },
    {
      title: "Machine learning",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579042/KPGU/Images/Institutions/KSET/machine-learning.png",
    },
    {
      title: "Data Science",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579042/KPGU/Images/Institutions/KSET/machine-learning.png",
    },
  ];

  const CoreCompetenciesListComponent = ({ title, img }) => (
    <Grid item xs={12} sm={6} md={4}>
      <Box
        className="smooth-shadow-card h-100"
        borderRadius={4}
        overflow={"hidden"}
      >
        <Box>
          <img src={img} alt="" className="w-100" />
        </Box>
        <Box p={2}>
          <h5 className="fw-bold color-secondary">{title}</h5>
        </Box>
      </Box>
    </Grid>
  );

  return (
    <Box borderRadius={4}>
      <h2 className="text-uppercase fw-bold color-secondary mb-4">
        About Department
      </h2>
      <Paragraph
        content={[
          "The Department of IT Information Technology was established in the year 2020 with the objective of imparting knowledge in cutting-edge technologies in Information Technology.",
          "After creating successful computer professionals from the last 17 years at Babaria Institute of Technology we now entered into the education of Information Technology under our Global University.",
          "The Department has a team of dynamic, young and dedicated staff, with specialization in a wide array of areas. The Department has well equipped laboratories with 120 Computer Systems with facilities that are vital to train the students in state-of-art software and hardware. The Department always strives to reach the latest technology and advancement in this field to the young learners as well as aspirants by inviting the corporate legends and experienced academicians to enlighten the IT community of our institution. The department supports the self-learning capability of the students through its rich core competencies",
        ]}
      />
      <Grid container spacing={2}>
        {CoreCompetenciesList.map(({ img, title }, index) => (
          <CoreCompetenciesListComponent img={img} title={title} key={index} />
        ))}
      </Grid>
    </Box>
  );
}

export default AboutDepartment;
