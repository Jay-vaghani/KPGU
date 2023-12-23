import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import {
  DoubleArrowRounded,
  KeyboardDoubleArrowRightRounded,
} from "@mui/icons-material";

function News() {
  const { maxWidth } = useContext(AppContext);

  const News = [
    {
      title: "KPGU Spirit Week",
      des: "From 28th February 2022 to 05th March 2022, Drs. Kiran and Pallavi Patel Global University Students have celebrated various days under the theme of “KPGU Spirit Week”. This was the first, its kind of the celebration held in Krishna Edu Campus after the inception of the University",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1703322145/KPGU/Images/Events/Hackathon-2022/banner.webp",
    },
    {
      title: "73rd Republic day",
      des: "Every year Krishna Edu Campus (Formerly known as BITS Edu Campus) celebrates Republic Day in a very patriotic manner. On account of this, Flag Hoisting Ceremony was organized in which the students, teaching staff, non-teaching staff and serving staff of all disciplines of Krishna Edu Campus took active part.",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1703325751/KPGU/Images/Events/Visit%20to%20Shri.%20Ashwini%20Vaishnaw/banner.webp",
    },
    {
      title: "Online Kite Festival",
      des: "The skies are blue and clear, a cool breeze blows and a feeling of anticipation, joy and jubilation grips all who celebrate the occasion. Kites of different colors and shapes soared high and took to the clear blue skies in the backdrop of Drs. Kiran & Pallavi Patel Global University during the festival which was held in the Online Virtual Mode.",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1703327502/KPGU/Images/Events/Career%20Guidance%20to%20prepare%20the%20UPSC%20and%20GPSC%20Exams/banner.webp",
    },
  ];

  const NewsCard = ({ title, img, des }) => {
    return (
      <Grid item xs={12} md={6} lg={4}>
        <Box borderRadius={4} overflow={"hidden"}>
          <img
            src={img}
            alt="Hackathon 2022 banner"
            className="w-100 h-100 object-fit-cover"
          />
        </Box>
        <Box mt={2}>
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
          <Typography
            variant="body1"
            fontSize={"19px"}
            mb={2}
            height={{
              xs: "auto",
              md: "200px",
            }}
            overflow={"hidden"}
          >
            {des} <b>...</b>
          </Typography>
          <Button
            variant="contained"
            endIcon={<KeyboardDoubleArrowRightRounded fontSize="large" />}
          >
            Read more
          </Button>
        </Box>
      </Grid>
    );
  };

  return (
    <Grid
      container
      width={maxWidth}
      mx={"auto"}
      my={7}
      p={"3%"}
      py={5}
      className="smooth-shadow rounded-4"
    >
      <Typography
        variant="h2"
        className="journey-heading-2"
        textAlign={"center"}
        fontWeight={600}
      >
        News & Article
      </Typography>
      <Grid container spacing={2} my={3} rowGap={3}>
        {News.map(({ title, des, img }, index) => (
          <NewsCard title={title} des={des} img={img} key={index} />
        ))}
      </Grid>
      <Button
        variant="contained"
        size="large"
        sx={{ mt: 3 }}
        endIcon={<DoubleArrowRounded />}
      >
        More News
      </Button>
    </Grid>
  );
}

export default News;
