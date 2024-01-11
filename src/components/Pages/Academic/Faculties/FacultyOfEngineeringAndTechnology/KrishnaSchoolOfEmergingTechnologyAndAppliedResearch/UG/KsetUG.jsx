import React from "react";
import { Grid } from "@mui/material";
import ProgramCard from "../../../../../../Common/ProgramCard";

function KsetUG() {
  const Programs = [
    {
      title: " B. Tech in Computer Science & Engineering",
      des: "Build your career with B.Tech in Computer Science & Engineering program. Master the core principles of hardware, software, programming languages, algorithms, and networking.",
      link: "",
      pageLink: ""
    },
    {
      title: "B. Tech in Information Technology",
      des: "Build your career with B.Tech in Computer Science & Engineering program. Master the core principles of hardware, software, programming languages, algorithms, and networking.",
      link: "",
      pageLink: ""
    },
    {
      title: "B. Tech in Mechanical Engineering",
      des: "Build your career with B.Tech in Computer Science & Engineering program. Master the core principles of hardware, software, programming languages, algorithms, and networking.",
      link: "",
      pageLink: ""
    },
    {
      title: "B. Tech in Electrical Engineering",
      des: "Build your career with B.Tech in Computer Science & Engineering program. Master the core principles of hardware, software, programming languages, algorithms, and networking.",
      link: "",
      pageLink: ""
    },
    {
      title: "B. Tech in Civil Engineering",
      des: "Build your career with B.Tech in Computer Science & Engineering program. Master the core principles of hardware, software, programming languages, algorithms, and networking.",
      link: "",
      pageLink: ""
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

export default KsetUG;
