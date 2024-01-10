import { Grid } from "@mui/material";
import React from "react";
import ProgramCard from "../../../../../../Common/ProgramCard";

function KseDiploma() {
  const Programs = [
    {
      title: "Computer Science & Engineering",
      des: "Forge the future with Computer Science & Engineering program Dive into cutting-edge labs Here, you'll become not just an engineer, but a builder of tomorrow's world. Enroll and code your legacy.",
      link: "",
      pageLink: "",
    },
    {
      title: "Information Technology",
      des: "Master Information Technology program. Our industry-focused curriculum, state of the art labs empower you to become a tech pioneer",
      link: "",
      pageLink: "",
    },
  ];

  return (
    <Grid container spacing={2}>
      {Programs.map(({ des, link, title, pageLink }, index) => (
        <ProgramCard des={des} link={link} title={title} pageLink={pageLink} key={index} />
      ))}
    </Grid>
  );
}

export default KseDiploma;
