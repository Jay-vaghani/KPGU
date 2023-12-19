import React, { useContext } from "react";
import { Grid, Typography } from "@mui/material";
import { AppContext } from "../../../contexts/AppContext";
import { DoneAllRounded } from "@mui/icons-material";

function AboutSection() {
  const { maxWidth } = useContext(AppContext);

  const ProgramsItems = [
    "Graduate Programs",
    "Undergraduate Programs",
    "Doctoral Degrees",
    "International Hubs",
    "Alumni & Giving",
    "Global Students",
  ];

  const Programs = ({ name }) => {
    return (
      <Grid
        item
        xs={12}
        lg={5.91}
        p={3}
        bgcolor={"primary.main"}
        borderRadius={2}
        color={"#fff"}
        display={"flex"}
        alignItems={"center"}
      >
        <DoneAllRounded color={"inherit"} />{" "}
        <Typography variant="body1" pl={2} fontWeight={600}>
          {name}
        </Typography>
      </Grid>
    );
  };

  return (
    <Grid
      container
      width={maxWidth}
      mx={"auto"}
      mt={7}
      px={"3%"}
    >
      <Grid item sm={12} md={5}>
        <img
          src="https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Banners/about-banner"
          alt="about us"
          width={"100%"}
          height={"100%"}
          className="object-fit-cover rounded-4"
        />
      </Grid>
      <Grid
        item
        sm={12}
        md={7}
        px={{
          xs: 0,
          sm: 3,
        }}
        pb={3}
        mt={{
          xs: 3,
          sm: 0,
        }}
      >
        <Typography variant="h3" fontWeight={600} className="about-heading">
          About
        </Typography>
        <Typography variant="h2" fontWeight={600} className="about-heading">
          KPGU University
        </Typography>
        <Typography variant="body1" className="about-text" mt={1}>
          Drs. Kiran & Pallavi Patel Global University, earlier known as Babaria
          Institute of Technology, was started in the year 2004, serves the
          objective of providing quality education in the ﬁeld of Technology and
          serving the society. It has been able to attain enviable level of
          excellence in technical education.
        </Typography>
        <Grid container gap={1} mt={2}>
          {ProgramsItems.map((item, index) => (
            <Programs name={item} key={index} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AboutSection;
