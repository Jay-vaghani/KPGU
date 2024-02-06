import React, { useContext } from "react";
import { Box, Button, Grid } from "@mui/material";
import { AppContext } from "../../../contexts/AppContext";
import { KeyboardDoubleArrowRightRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function FacultyAndCollageSection() {
  const { maxWidth } = useContext(AppContext);

  const navigation = useNavigate();

  return (
    <Box
      maxWidth={maxWidth}
      mx={"auto"}
      p={"3%"}
      bgcolor={"#fff"}
      mt={7}
      borderRadius={4}
      className="smooth-shadow"
    >
      <h2 className="fs-1 text-uppercase fw-semibold mb-4 text-uppercase">
        Continuous learning for excellence.
      </h2>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Box borderRadius={4} className="smooth-shadow-card">
            <Box>
              <img
                src="https://scontent.fbdq7-1.fna.fbcdn.net/v/t1.6435-9/116852244_1703633166467008_2708383191600170002_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=xs9FdnZ5WUgAX8bzVem&_nc_ht=scontent.fbdq7-1.fna&oh=00_AfDFYw5k8kwFHaRvp4dU0xZOnGllgEECp8yKdnbj24yr8A&oe=65E95C33"
                className="w-100 rounded-top-4 "
                alt=""
              />
            </Box>
            <Box p={2}>
              <h4 className="text-uppercase fw-bold ">Faculty Of</h4>
              <h5 className="text-uppercase fw-bold color-secondary">
                MEDICINE & HEALTHCARE
              </h5>
              <Button
                variant="contained"
                color="secondary"
                endIcon={<KeyboardDoubleArrowRightRounded />}
                onClick={() =>
                  navigation("/academics/faculty-of-medicine-and-healthcare")
                }
              >
                See more
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box borderRadius={4} className="smooth-shadow-card">
            <Box>
              <img
                src="https://scontent.fbdq7-1.fna.fbcdn.net/v/t1.6435-9/116852244_1703633166467008_2708383191600170002_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=xs9FdnZ5WUgAX8bzVem&_nc_ht=scontent.fbdq7-1.fna&oh=00_AfDFYw5k8kwFHaRvp4dU0xZOnGllgEECp8yKdnbj24yr8A&oe=65E95C33"
                className="w-100 rounded-top-4 "
                alt=""
              />
            </Box>
            <Box p={2}>
              <h4 className="text-uppercase fw-bold ">Faculty Of</h4>
              <h5 className="text-uppercase fw-bold color-secondary">
                ENGINEERING & TECHNOLOGY
              </h5>
              <Button
                variant="contained"
                color="secondary"
                endIcon={<KeyboardDoubleArrowRightRounded />}
                onClick={() =>
                  navigation("/academics/faculty-of-engineering-and-technology")
                }
              >
                See more
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box borderRadius={4} className="smooth-shadow-card">
            <Box>
              <img
                src="https://scontent.fbdq7-1.fna.fbcdn.net/v/t1.6435-9/116852244_1703633166467008_2708383191600170002_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=xs9FdnZ5WUgAX8bzVem&_nc_ht=scontent.fbdq7-1.fna&oh=00_AfDFYw5k8kwFHaRvp4dU0xZOnGllgEECp8yKdnbj24yr8A&oe=65E95C33"
                className="w-100 rounded-top-4 "
                alt=""
              />
            </Box>
            <Box p={2}>
              <h4 className="text-uppercase fw-bold ">Faculty Of</h4>
              <h5 className="text-uppercase fw-bold color-secondary">
                SCIENCE
              </h5>
              <Button
                variant="contained"
                color="secondary"
                endIcon={<KeyboardDoubleArrowRightRounded />}
                onClick={() => navigation("/academics/faculty-of-sciences")}
              >
                See more
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box borderRadius={4} className="smooth-shadow-card">
            <Box>
              <img
                src="https://scontent.fbdq7-1.fna.fbcdn.net/v/t1.6435-9/116852244_1703633166467008_2708383191600170002_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=xs9FdnZ5WUgAX8bzVem&_nc_ht=scontent.fbdq7-1.fna&oh=00_AfDFYw5k8kwFHaRvp4dU0xZOnGllgEECp8yKdnbj24yr8A&oe=65E95C33"
                className="w-100 rounded-top-4 "
                alt=""
              />
            </Box>
            <Box p={2}>
              <h4 className="text-uppercase fw-bold ">Faculty Of</h4>
              <h5 className="text-uppercase fw-bold color-secondary">
                COMMERCE & MANAGEMENT
              </h5>
              <Button
                variant="contained"
                color="secondary"
                endIcon={<KeyboardDoubleArrowRightRounded />}
                onClick={() => navigation("/academics/faculty-of-commerce-and-management")}
              >
                See more
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box borderRadius={4} className="smooth-shadow-card">
            <Box>
              <img
                src="https://scontent.fbdq7-1.fna.fbcdn.net/v/t1.6435-9/116852244_1703633166467008_2708383191600170002_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=xs9FdnZ5WUgAX8bzVem&_nc_ht=scontent.fbdq7-1.fna&oh=00_AfDFYw5k8kwFHaRvp4dU0xZOnGllgEECp8yKdnbj24yr8A&oe=65E95C33"
                className="w-100 rounded-top-4 "
                alt=""
              />
            </Box>
            <Box p={2}>
              <h4 className="text-uppercase fw-bold ">Faculty Of</h4>
              <h5 className="text-uppercase fw-bold color-secondary">
                HUMANITIES & POLICY STUDIES
              </h5>
              <Button
                variant="contained"
                color="secondary"
                endIcon={<KeyboardDoubleArrowRightRounded />}
                onClick={() =>
                    navigation("/academics/faculty-of-humanities-and-policy-studies")
                  }
              >
                See more
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FacultyAndCollageSection;
