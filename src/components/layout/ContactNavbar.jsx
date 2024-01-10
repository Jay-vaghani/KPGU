import {
  Facebook,
  Instagram,
  LinkedIn,
  LocalLibraryTwoTone,
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
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

function ContactNavbar() {
  const { innerWidth, maxWidth } = useContext(AppContext);

  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Stack width={"100%"} position={"relative"} bgcolor={"yellow"}>
        <Box
          width={"50%"}
          height={innerWidth < 770 ? "0px" : "72px"}
          position={"absolute"}
          top={0}
          left={0}
          bgcolor={"primary.main"}
          zIndex={"-999"}
        ></Box>
        <Box
          width={"50%"}
          height={innerWidth < 770 ? "0px" : "72px"}
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
          xs={5.7}
          sm={5.5}
          md={4.5}
          lg={3.5}
          px={innerWidth < 450 ? 1 : 2}
          py={innerWidth < 450 ? 0.5 : 2}
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
            pt={innerWidth > 770 ? 0.8 : 0}
          >
            <Typography
              variant="body1"
              fontWeight={"600"}
              sx={{ display: innerWidth < 685 ? "none" : "block" }}
              zIndex={9}
            >
              Follow Us on
            </Typography>
            <Stack direction={"row"} spacing={0} justifyContent={"start"} sx={{ml: innerWidth < 400? "-7px !important" : "10px !important"}}>
              <IconButton
                sx={{ pl: 0, p: "5%" }}
                color="inherit"
                href="https://www.facebook.com/KPGU.Vadodara/"
                target="_blank"
              >
                <Facebook />
              </IconButton>
              <IconButton
                sx={{ p: "5%" }}
                color="inherit"
                href="https://in.linkedin.com/company/kpgu-vadodara"
                target="_blank"
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                sx={{ p: "5%" }}
                color="inherit"
                href="https://www.youtube.com/@kpguvadodara6247/featured"
                target="_blank"
              >
                <YouTube />
              </IconButton>
              <IconButton
                sx={{ p: "5%" }}
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
          px={innerWidth < 450 ? 1 : 2}
          xs={6.3}
          sm={6.5}
          md={7.5}
          lg={8.5}
          bgcolor={"secondary.main"}
          display={"flex"}
          justifyContent={"end"}
          alignItems={"center"}
        >
          <Stack direction={"row"} justifyContent={"end"} spacing={3}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              color={"whitesmoke"}
              spacing={"5%"}
              display={innerWidth < 770 ? "none" : "flex"}
            >
              <Button
                startIcon={<WifiCalling3TwoTone />}
                href="tel:8238046519"
                color="primary"
                variant="contained"
                disableElevation
              >
                8238046519
              </Button>
              <Button
                startIcon={<RateReviewTwoTone />}
                color="primary"
                href="mailto:info@kpgu.edu.in"
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
              justifyContent={"end"}
              sx={{ gap: "5%" }}
              display={innerWidth < 770 ? "flex" : "none"}
            >
              <Button
                href="tel:8238046519"
                disableElevation
                variant="contained"
                sx={{ fontSize: innerWidth < 385 ? "0.65rem" : "" }}
                size="small"
                startIcon={<WifiCalling3TwoTone />}
              >
                <Box
                  display={{
                    xs: "none",
                    sm: "block",
                  }}
                >
                  8238046519
                </Box>
                <Box
                  display={{
                    xs: "block",
                    sm: "none",
                  }}
                >
                  call 
                </Box>
              </Button>
              <Button
                startIcon={<LocalLibraryTwoTone />}
                color="primary"
                variant="contained"
                sx={{ fontSize: innerWidth < 385 ? "0.6rem" : "" }}
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
