import {
  AccessTimeTwoTone,
  Facebook,
  ForwardToInboxTwoTone,
  Instagram,
  LinkedIn,
  LocalLibrary,
  LocalLibraryRounded,
  LocalLibraryTwoTone,
  MenuBook,
  RateReviewTwoTone,
  WifiCalling3TwoTone,
  YouTube,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

function ContactNavbar() {
  const { innerWith, maxWidth } = useContext(AppContext);

  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Stack width={"100%"} position={"relative"} bgcolor={"yellow"}>
        <Box
          width={"50%"}
          height={innerWidth < 770 ? "0px" : "80px"}
          position={"absolute"}
          top={0}
          left={0}
          bgcolor={"primary.main"}
          zIndex={"-999"}
        ></Box>
        <Box
          width={"50%"}
          height={innerWidth < 770 ? "0px" : "80px"}
          position={"absolute"}
          top={0}
          right={0}
          bgcolor={"secondary.main"}
          zIndex={"-999"}
        ></Box>
      </Stack>
      <Grid container maxWidth={maxWidth} mx={"auto"}>
        {/* LEFT SIDE */}
        <Grid
          item
          xs={6.3}
          sm={5.5}
          md={4.5}
          lg={3.5}
          px={innerWith < 450 ? 1 : 2}
          py={innerWith < 450 ? 0.5 : 2}
          bgcolor={"secondary.main"}
          sx={{
            position: "relative",
            ":before": {
              content: `""`,
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              clipPath: "polygon(0 0, 85% 0, 100% 100%, 0% 100%)",
              bgcolor: "primary.main",
            },
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"start"}
            color={"whitesmoke"}
            spacing={{
              sm: 1,
              md: 3,
            }}
            pt={innerWith > 770 ? 0.8 : 0}
          >
            <Typography
              variant="body1"
              fontWeight={"600"}
              sx={{ display: innerWith < 685 ? "none" : "block" }}
              zIndex={9}
            >
              Follow Us on
            </Typography>
            <Stack direction={"row"} spacing={0} justifyContent={"start"}>
              <IconButton
                sx={{ pl: 0 }}
                color="inherit"
                href="https://www.facebook.com/KPGU.Vadodara/"
                target="_blank"
              >
                <Facebook />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://in.linkedin.com/company/kpgu-vadodara"
                target="_blank"
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://www.youtube.com/@kpguvadodara6247/featured"
                target="_blank"
              >
                <YouTube />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://www.instagram.com/kpgu_official/"
                target="_blank"
              >
                <Instagram />
              </IconButton>
            </Stack>
          </Stack>
        </Grid>

        {/* RIGHT SIDE */}
        <Grid
          item
          py={innerWith < 450 ? 0.5 : 2}
          px={innerWith < 450 ? 1 : 2}
          xs={5.7}
          sm={6.5}
          md={7.5}
          lg={8.5}
          bgcolor={"secondary.main"}
        >
          <Stack direction={"row"} justifyContent={"end"} spacing={3}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              color={"whitesmoke"}
              spacing={"5%"}
              display={innerWith < 770 ? "none" : "flex"}
            >
              <Button
                startIcon={<WifiCalling3TwoTone />}
                href="tel:8238046519"
                color="primary"
                variant="contained"
                disableElevation
              >
                Call
              </Button>
              <Button
                startIcon={<RateReviewTwoTone />}
                color="primary"
                variant="contained"
                disableElevation
              >
                Apply
              </Button>
              <Button
                startIcon={<LocalLibraryTwoTone />}
                color="primary"
                variant="contained"
                disableElevation
              >
                Student
              </Button>
            </Stack>
            <Box
              m={0}
              width={"100%"}
              pt={0.5}
              justifyContent={"center"}
              sx={{ gap: "5%" }}
              display={innerWith < 770 ? "flex" : "none"}
            >
              <Button
                sx={{
                  fontSize: "12px",
                }}
                href="tel:8238046519"
                disableElevation
                variant="contained"
                size="small"

                startIcon={<WifiCalling3TwoTone fontSize="inherit" />}
              >
                call
              </Button>
              <Button
                startIcon={<LocalLibraryTwoTone />}
                color="primary"
                variant="contained"
                disableElevation
                size="small"
              >
                Student
              </Button>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default ContactNavbar;
