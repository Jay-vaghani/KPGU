import React from "react";
import { Box, Grid } from "@mui/material";

function ComputerLab() {
  const LabList = [
    {
      title: "MATLAB",
    },
    {
      title: "Mi Power",
    },
    {
      title: "Proteus",
    },
    {
      title: "P-Sim 9.1",
    },
    {
      title: "SCILAB",
    },
  ];

  const LabListComponent = ({ title }) => (
    <Grid item xs={12} sm={6} md={4}>
      <Box
        className="smooth-shadow-card h-100"
        borderRadius={4}
        overflow={"hidden"}
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
        <h2 className="fw-bold color-secondary fs-1 mb-4">Software Labs</h2>
        <Grid container spacing={2}>
          {LabList.map(({ title }, index) => (
            <LabListComponent title={title} key={index} />
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default ComputerLab;
