import { Box, Grid } from "@mui/material";
import React from "react";

function HonorsMinorsOfferedBroadly() {
  const HonorsMinorsList = [
    {
      title: "Artificial Intelligence / Machine Learning",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579042/KPGU/Images/Institutions/KSET/machine-learning.png",
    },
    {
      title: "CYBER SECURITY",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579016/KPGU/Images/Institutions/KSET/cyber-security.webp",
    },
    {
      title: "Data Science",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708580600/KPGU/Images/Institutions/KSET/methodologies-and-testing.webp",
    },
  ];

  const HonorsMinorsListComponent = ({ title, img }) => (
    <Grid item xs={12} sm={6} md={6}>
      <Box
        className="smooth-shadow-card h-100"
        borderRadius={4}
        overflow={"hidden"}
      >
        <Box>
          <img src={img} alt="" className="w-100" />
        </Box>
        <Box p={2}>
          <h4 className="fw-bold color-secondary">{title}</h4>
        </Box>
      </Box>
    </Grid>
  );
  return (
    <Box borderRadius={4} >
      <h2 className="fw-bold color-secondary fs-1 mb-4">
        Honors - Minors Offered Broadly
      </h2>
      <Grid container spacing={4}>
        {HonorsMinorsList.map(({ title, img }, index) => (
          <HonorsMinorsListComponent img={img} title={title} key={index} />
        ))}
      </Grid>
    </Box>
  );
}

export default HonorsMinorsOfferedBroadly;
