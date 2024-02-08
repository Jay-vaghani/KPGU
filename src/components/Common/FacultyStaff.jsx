import {
  ArticleRounded,
  SchoolRounded,
  TextSnippetRounded,
} from "@mui/icons-material";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";

function FacultyStaff({
  name,
  designation,
  experience,
  imgFaculty,
  imgNo,
  qualification,
}) {
  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box
          className="smooth-shadow-card"
          borderRadius={4}
          overflow={"hidden"}
          height={"100%"}
          position={"relative"}
        >
          <Box>
            <img src={`https://res.cloudinary.com/dby2vbxv3/image/upload/v1707393163/KPGU/Faculty%20Images/${"KAMC"}/${"5930"}.jpg`} alt="faculty" className="w-100" />
          </Box>
          <Box p={2}>
            <h4 className="fw-semibold color-secondary ">{name}</h4>
            <h6 className="text-secondary fw-semibold mb-0">{designation}</h6>
            <h6 className="text-secondary fw-semibold mb-2">
              Experience: {experience} Years
            </h6>
            <Stack
              direction={"row"}
              spacing={2}
              color={"secondary.main"}
              mb={1.5}
            >
              <SchoolRounded />
              <h5 className="fw-bold mb-2">{qualification}</h5>
            </Stack>
            <br />
            <Box position={"absolute"} bottom={0}>
              <Button
                variant="contained"
                disableElevation
                color="secondary"
                endIcon={<TextSnippetRounded />}
              >
                read more
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
}

export default FacultyStaff;
