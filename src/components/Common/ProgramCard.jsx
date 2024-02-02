import {
  DescriptionRounded,
  KeyboardDoubleArrowRightRounded,
} from "@mui/icons-material";
import { Box, Button, Grid, Typography, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function ProgramCard({ title, link, duration, eligibility, fees }) {
  const navigate = useNavigate();
  return (
    <Grid item xs={12} md={6}>
      <Box
        className="smooth-shadow-card h-100"
        p={2}
        borderRadius={4}
        position={"relative"}
      >
        <h4 className="fw-semibold">{title}</h4>
        {/* <Typography variant="body1" fontSize={"1.1rem"}>
          {des}
        </Typography> */}
        <h6 className="text-secondary fw-semibold mb-0">
          <span className="color-secondary fw-bold">Course Duration:</span>{" "}
          <Typography
            variant="caption"
            fontSize={"16px"}
            className="fw-semibold"
          >
            {duration}
          </Typography>{" "}
          Years
        </h6>

        <h6 className="text-secondary fw-semibold mb-0">
          <span className="color-secondary fw-bold">Fees As Per (FRC):</span>{" "}
          <Typography
            variant="caption"
            fontSize={"16px"}
            className="fw-semibold"
          >
            {fees}
          </Typography>
        </h6>
       

        <br />
        <br />
        <Stack
          direction={"row"}
          sx={{ position: "absolute", bottom: 16 }}
          spacing={1}
        >
          <Button
            href={link}
            variant="contained"
            color="secondary"
            // disableElevation
            endIcon={<DescriptionRounded />}
            sx={{ px: "12px" }}
          >
            download
          </Button>
          <Button
            href={link}
            variant="contained"
            color="secondary"
            // disableElevation
            endIcon={<KeyboardDoubleArrowRightRounded />}
            sx={{ px: "12px" }}
            onClick={() => navigate("/admission-inquiry")}
          >
            Apply
          </Button>
        </Stack>
      </Box>
    </Grid>
  );
}

export default ProgramCard;
