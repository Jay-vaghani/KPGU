import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import {
  DoubleArrowRounded,
  KeyboardDoubleArrowRightRounded,
} from "@mui/icons-material";

function News() {
  const { maxWidth } = useContext(AppContext);

  const Events = [
    {
      title: "The Regional Round of Hackathon 2022",
      des: "The Regional Round of Hackathon 2022 has been organized on 7th and 8th October 2022 by the Technical Education Department of Gujarat Government at KPGU University (Babaria Colleges) running Ayurvedic, Engineering, Physio, Pharmacy, Science, Arts and Commerce courses at Varanama near the city.",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1703322145/KPGU/Images/Events/Hackathon-2022/banner.webp",
    },
    {
      title: "Visit to Shri. Ashwini Vaishnaw",
      des: "Shri Ashwini Vaishnaw, Honourable Minister of Railways, Communications and Electronics & Information Technology, Government of India interacted with students’ innovators about recent technologies and innovation in railways, Telecommunication and Information Technology at Drs. Kiran and Pallavi Patel Global University Vadodara, Gujarat",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1703325751/KPGU/Images/Events/Visit%20to%20Shri.%20Ashwini%20Vaishnaw/banner.webp",
    },
    {
      title: "Guidance to prepare the UPSC and GPSC ",
      des: "Seminar on career guidance to prepare the UPSC and GPSC exams. NSS Unit of KCISR,KPGU in association with Yuva Upanishad Foundation, Surat and Shilp Academy had organized a Seminar on “Career Guidance towards the preparation of Competitive Exams” conducted by UPSC and GPSC.",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1703327502/KPGU/Images/Events/Career%20Guidance%20to%20prepare%20the%20UPSC%20and%20GPSC%20Exams/banner.webp",
    },
  ];

  const EventCard = ({ title, img, des }) => {
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
      mt={7}
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
        Events
      </Typography>
      <Grid container spacing={2} my={3} rowGap={3}>
        {Events.map(({ title, des, img }, index) => (
          <EventCard title={title} des={des} img={img} key={index} />
        ))}
      </Grid>
      <Button
        variant="contained"
        size="large"
        sx={{ mt: 3 }}
        endIcon={<DoubleArrowRounded />}
      >
        <b> More Events</b>
      </Button>
    </Grid>
  );
}

export default News;
