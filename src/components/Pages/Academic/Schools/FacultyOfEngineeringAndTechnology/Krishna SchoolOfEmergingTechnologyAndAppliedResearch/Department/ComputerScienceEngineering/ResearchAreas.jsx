import { Box, Grid } from "@mui/material";
import React from "react";

function ResearchAreas() {

  const ResearchAreasList = [
    {
      title: "Artificial Intelligence and Machine Learning",
    },
    {
      title: "Computer Systems, Networks, and Security",
    },
    {
      title: "Data Science",
    },
    {
      title: "Computer Vision/Graphics/Robotics",
    },
    {
      title: "Cyber Security",
    },
    {
      title: "Internet of Things",
    },
    {
      title: "High Performance Computing",
    },
    {
      title: "Human-Computer Interaction",
    },
    {
      title: "Natural Language Processing & Information Retrieval",
    },
    {
      title: "Quantum Computing",
    },
    {
      title: "Software Engineering",
    },
    {
      title: "Theory of Computation",
    },
    {
      title: "Bioinformatics",
    },
  ];

  const ResearchAreasListComponent = ({ title }) => (
    <Grid item xs={12} sm={6} md={6}>
      <Box
        className="smooth-shadow-card h-100"
        borderRadius={4}
      >
        <Box p={2}>
          <h4 className="fw-bold color-secondary">{title}</h4>
        </Box>
      </Box>
    </Grid>
  );
  return (
    <>
      <Box borderRadius={4}>
        <h2 className="fw-bold color-secondary fs-1 mb-4">Research Areas</h2>
        <Grid container spacing={4}>
          {ResearchAreasList.map(({ title, }, index) => (
            <ResearchAreasListComponent
              title={title}
              key={index}
            />
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default ResearchAreas;
