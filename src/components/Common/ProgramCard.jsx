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
        {/* <Typography variant="body1" fontSize={"1.1rem"}>
          {des}
        </Typography> */}
        <h6 className='text-secondary fw-semibold mb-2'><span className="color-secondary fw-bold">Course Duration:</span> 4 Years</h6>
        <h6 className='text-secondary fw-semibold mb-2'><span className="color-secondary fw-bold">Eligibility:</span> Lorem ipsum dolor sit amet.</h6>
        <h6 className='text-secondary fw-semibold mb-2'><span className="color-secondary fw-bold">Fees As Per (FRC):</span> 1,00,000</h6>
        <br />
        <br />
        <Stack direction={"row"} sx={{ position: "absolute", bottom: 16 }} spacing={1}>
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

        </Stack>
      </Box>
    </Grid>
  );
}

export default ProgramCard;
