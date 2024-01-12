import { KeyboardDoubleArrowRightRounded } from "@mui/icons-material";
import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function EduCard({ name, des, img, link }) {

  const navigate = useNavigate()

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box
        className="smooth-shadow-card h-100"
        borderRadius={4}
        position={"relative"}
        overflow={"clip"}
        bgcolor={"#fff"}
      >
        <Box>
          <img
            src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1703762061/KPGU/campus/krishna-school-of-physiotherapy.webp"
            alt="Babaria Institute of Technology"
            className="img-fluid"
          />
        </Box>
        <Box p={2}>
          <Typography variant="h6" fontWeight={600} mb={1} color={"secondary.main"}>
            {name}
          </Typography>
          <Typography variant="body1" fontWeight={600} color={"#535353"} mb={3}>
            {des}
          </Typography>
          <br />

          <Button
            target="_blank"
            variant="contained"
            color="secondary"
            endIcon={<KeyboardDoubleArrowRightRounded />}
            sx={{ position: "absolute", bottom: 16 }}
            onClick={() => navigate(link)}
          >
            View more
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}

export default EduCard;
