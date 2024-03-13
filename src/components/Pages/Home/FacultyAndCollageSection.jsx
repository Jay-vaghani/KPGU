import React, { useContext } from "react";
import { Box, Button, Grid } from "@mui/material";
import { AppContext } from "../../../contexts/AppContext";
import { KeyboardDoubleArrowRightRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function FacultyAndCollageSection() {
  const { maxWidth } = useContext(AppContext);

  const navigation = useNavigate();

  const FacultyList = [
    {
      title: "MEDICINE & HEALTHCARE",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707388265/KPGU/Banners/Faculty/stxzqds5ojyouadezork.webp",
      link: "/academics/faculty-of-medicine-and-healthcare",
    },
    {
      title: "ENGINEERING & TECHNOLOGY",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707388265/KPGU/Banners/Faculty/twhzqv6u4hlxjkvh6j3i.webp",
      link: "/academics/faculty-of-engineering-and-technology",
    },
    {
      title: "SCIENCE",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707388265/KPGU/Banners/Faculty/skffkqfmbtyrmkjhetiw.webp",
      link: "/academics/faculty-of-sciences",
    },
    {
      title: "COMMERCE & MANAGEMENT",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707388265/KPGU/Banners/Faculty/ke1m4maldgahqkvhsbgf.webp",
      link: "/academics/faculty-of-commerce-and-management",
    },
    {
      title: "HUMANITIES & POLICY STUDIES",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707388265/KPGU/Banners/Faculty/hlxsutksab8a38tmrfia.webp",
      link: "/academics/faculty-of-humanities-and-policy-studies",
    },
  ];

  const FacultyComponent = ({ title, img, link }) => (
    <Grid item xs={12} sm={6} md={4}>
      <Box borderRadius={4} className="smooth-shadow-card">
        <Box>
          <img src={img} className="w-100 rounded-top-4 " alt="" />
        </Box>
        <Box p={2}>
          <h4 className="text-uppercase fw-bold ">Faculty Of</h4>
          <h5 className="text-uppercase fw-bold color-secondary">{title}</h5>
          <Button
            variant="contained"
            color="secondary"
            endIcon={<KeyboardDoubleArrowRightRounded />}
            onClick={() => navigation(link)}
          >
            See more
          </Button>
        </Box>
      </Box>
    </Grid>
  );

  return (
    <Box
      maxWidth={maxWidth}
      mx={"auto"}
      p={"5%"}
      bgcolor={"#fff"}
      mt={7}
      borderRadius={4}
      className="smooth-shadow"
    >
      <h2 className="fs-1 text-uppercase fw-semibold mb-4 text-uppercase">
        Continuous learning for excellence.
      </h2>
      <Grid container spacing={4}>
        {FacultyList.map(({ img, link, title }, index) => (
          <FacultyComponent img={img} link={link} title={title} key={index} />
        ))}
      </Grid>
    </Box>
  );
}

export default FacultyAndCollageSection;
