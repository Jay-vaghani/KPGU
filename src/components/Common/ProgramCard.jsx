import { DescriptionRounded, DoubleArrowRounded } from "@mui/icons-material";
import { Box, Button, Grid, Typography, Stack } from "@mui/material";
import React from "react";

function ProgramCard({ title, des, link, pageLink }) {
  return (
    <Grid item xs={12} md={6}>
      <Box
        className="smooth-shadow-card h-100"
        p={2}
        borderRadius={1}
        position={"relative"}
      >
        <h4 className="fw-semibold">{title}</h4>
        <Typography variant="body1" fontSize={"1.1rem"}>
          {des}
        </Typography>
        <br />
        <br />
        <Stack direction={"row"} sx={{ position: "absolute", bottom: 16 }} spacing={1} >
          <Button
            href={link}
            variant="contained"
            color="secondary"
            // disableElevation
            endIcon={<DescriptionRounded />}
          >
            download
          </Button>
          <Button
            href={pageLink}
            variant="contained"
            color="secondary"
            // disableElevation
            endIcon={<DoubleArrowRounded />}
          >
            read more
          </Button>
        </Stack>
      </Box>
    </Grid>
  );
}

export default ProgramCard;
