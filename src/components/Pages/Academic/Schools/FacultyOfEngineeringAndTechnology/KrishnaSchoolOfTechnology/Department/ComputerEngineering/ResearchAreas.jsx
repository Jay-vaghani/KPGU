import { Box, Grid } from "@mui/material";
import React from "react";

function ResearchAreas() {
  const ResearchAreasList = [
    {
      title: "Artificial Intelligence and Machine Learning",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure",
    },
    {
      title: "Computer Systems, Networks, and Security",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure",
    },
    {
      title: "Data Science",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure",
    },
    {
      title: "Computer Vision/Graphics/Robotics",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure",
    },
    {
      title: "Cyber Security",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure",
    },
    {
      title: "Internet of Things",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure",
    },
    {
      title: "High Performance Computing",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure",
    },
    {
      title: "Human-Computer Interaction",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure",
    },
    {
      title: "Natural Language Processing & Information Retrieval",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure",
    },
    {
      title: "Quantum Computing",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure",
    },
    {
      title: "Software Engineering",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure",
    },
    {
      title: "Theory of Computation",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure",
    },
    {
      title: "Bioinformatics",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure",
    },
  ];

  const ResearchAreasListComponent = ({ title, img, des }) => (
    <Grid item xs={12} sm={6} md={6}>
      <Box
        className="smooth-shadow-card h-100"
        borderRadius={4}
        overflow={"hidden"}
      >
        <Box p={2}>
          <h4 className="fw-bold color-secondary">{title}</h4>
          <Box letterSpacing={0.2}>
            <h6 className="text-secondary  ">{des}</h6>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
  return (
    <>
      <Box borderRadius={4}>
        <h2 className="fw-bold color-secondary fs-1 mb-4">Research Areas</h2>
        <Grid container spacing={4}>
          {ResearchAreasList.map(({ title, img, des }, index) => (
            <ResearchAreasListComponent
              img={img}
              title={title}
              des={des}
              key={index}
            />
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default ResearchAreas;
