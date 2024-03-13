import { Box, Button, Divider, Grid, Stack } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { useNavigate } from "react-router-dom";

function StudentCorner() {
  const { maxWidth } = useContext(AppContext);

  const navigate = useNavigate();

  const StudentCorner = [
    {
      name: "Transportation",
      imageLink:
        "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707113434/KPGU/StudentCorner/transportation-services.svg",
      hrefLink: "",
    },
    {
      name: "Library",
      imageLink:
        "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707115621/KPGU/StudentCorner/library.svg",
      hrefLink: "",
    },
    {
      name: "Student Login",
      imageLink:
        "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707116443/KPGU/StudentCorner/student-login.svg",
      hrefLink: "https://ums.kpgu.ac.in/Login.aspx",
    },
  ];

  const StudentCornerCardComponent = ({
    name,
    imageLink,
    buttonLink,
    hrefLink,
  }) => {
    return (
      <Grid item xs={12} sm={6}>
        <Stack bgcolor={"#fff"} className="smooth-shadow-card" borderRadius={4}>
          <Box height={"250px"}>
            <img
              src={imageLink}
              alt="transportation"
              className="w-100 h-100 "
            />
          </Box>
          <Divider />
          <Box px={1.5}>
            <h5 className="fw-semibold my-2">{name}</h5>
            <Button
              variant="contained"
              color="info"
              size="small"
              href={hrefLink}
              disableElevation
              sx={{ mb: 1.5 }}
              target="_blank"
            >
              See more
            </Button>
          </Box>
        </Stack>
      </Grid>
    );
  };

  return (
    <Box maxWidth={maxWidth} mx={"auto"} p={"5%"}>
      <h1 className="mb-3 display-5 fw-medium ">Student corner</h1>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          md={5.5}
          order={{
            xs: 2,
            md: 1,
          }}
        >
          <Grid container spacing={2}>
            {StudentCorner.map(
              ({ buttonLink, hrefLink, imageLink, name }, index) => (
                <StudentCornerCardComponent
                  buttonLink={buttonLink}
                  hrefLink={hrefLink}
                  imageLink={imageLink}
                  name={name}
                  key={index}
                />
              )
            )}
          </Grid>
        </Grid>
        <Grid
          item
          height={"100%"}
          xs={12}
          md={6.5}
          order={{
            xs: 1,
            md: 2,
          }}
        >
          <Box
            bgcolor={"#fff"}
            borderRadius={4}
            height={"100%"}
            className="smooth-shadow-card"
          >
            <img
              src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1707113280/KPGU/StudentCorner/student-corner.svg"
              alt="student corner"
              className="w-100 h-100"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default StudentCorner;
