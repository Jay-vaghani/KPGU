import React, { useContext } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { AppContext } from "../../../contexts/AppContext";
import { Button } from "@mui/material";
import { PhotoLibraryRounded, SchoolRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function JourneyAhead() {
  const { maxWidth } = useContext(AppContext);
  const navigate = useNavigate()


  return (
    <Grid container width={maxWidth} mx={"auto"} my={7} p={"3%"} className="smooth-shadow rounded-4" rowGap={3}>
      <Grid item xs={12} md={6}>
        <img src="https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Banners/about-sub-banner-2" alt="about us" className="w-100 h-100 object-fit-cover rounded-4" />
      </Grid>
      <Grid item xs={12} md={6} pl={{
        xs: 0,
        md: 3,
      }} pb={3}>
        <Typography variant="h3" fontWeight={600} className="journey-heading">
          Great Environment
        </Typography>
        <Typography variant="body1" mb={2} fontWeight={500} className="about-text" mt={1}>
          Our campus is a beautiful and vibrant place to live and learn. We have state-of-the-art facilities, stunning green spaces, and a friendly and welcoming atmosphere for everyone. Join a diverse community of learners from all backgrounds and explore your passions in a supportive environment.
        </Typography>
        <Button variant="contained" onClick={() => navigate("/gallery")} startIcon={<PhotoLibraryRounded />} disableElevation>view gallery</Button>
      </Grid>
      <Grid item xs={12} md={6} order={{
        xs: 2,
        md: 1,
      }} pr={{
        xs: 0,
        md: 3,
      }} pb={3}>
        <Typography variant="h3" fontWeight={600} className="journey-heading">
          Skill Development
        </Typography>
        <Typography variant="body1" mb={2} fontWeight={500} className="about-text" mt={1}>
          At KPGU University, we believe in an education that transcends textbook knowledge. Our innovative curriculum seamlessly integrates classroom rigor with enriching extracurricular opportunities, offering students a dynamic platform to explore their passions, discover hidden talents, and develop into well-rounded citizens prepared to thrive in a complex and ever-changing world.
        </Typography>
        <Button variant="contained" startIcon={<SchoolRounded />} disableElevation>view course</Button>
      </Grid>
      <Grid item xs={12} md={6} order={1}>
        <img src="https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Banners/about-sub-banner-2" alt="about us" className="w-100 h-100 object-fit-cover rounded-4" />
      </Grid>
    </Grid>
  );
}

export default JourneyAhead;
