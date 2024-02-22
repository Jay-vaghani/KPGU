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
  facultyName,
  imgNo,
  qualification,
  MainLink,
  customLink,
  insideTab
}) {


  return (
    <>
      <Grid item xs={12} sm={6} lg={insideTab ? 4 : 3}>
        <Box
          className="smooth-shadow-card"
          borderRadius={4}
          overflow={"hidden"}
          height={"100%"}
          position={"relative"}
        >
          <Box>
            <img
              src={
                customLink
                  ? customLink
                  : `${MainLink}/${facultyName}/${imgNo}.webp`
              }
              alt="faculty"
              className="w-100"
            />
          </Box>
          <Box p={2}>
            <h4 className="fw-semibold color-secondary">{name.toUpperCase()}</h4>
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
              <h6 className="fw-bold mb-2">{qualification}</h6>
            </Stack>
            <br />
            <Box position={"absolute"} bottom={16}>
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
