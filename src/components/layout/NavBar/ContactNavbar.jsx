import {
  AccessTimeTwoTone,
  Facebook,
  ForwardToInboxTwoTone,
  Instagram,
  LinkedIn,
  WifiCalling3TwoTone,
  YouTube,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

function ContactNavbar() {
  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Stack width={"100%"} position={"relative"} bgcolor={"yellow"}>
        <Box
          width={"50%"}
          height={"80px"}
          position={"absolute"}
          top={0}
          left={0}
          bgcolor={"primary.main"}
          zIndex={"-999"}
        ></Box>
        <Box
          width={"50%"}
          height={"80px"}
          position={"absolute"}
          top={0}
          right={0}
          bgcolor={"secondary.main"}
          zIndex={"-999"}
        ></Box>
      </Stack>
      <Grid container maxWidth={"1240px"} mx={"auto"}>
        {/* LEFT SIDE */}
        <Grid
          item
          xs={6}
          sm={5.5}
          md={4.5}
          lg={3.5}
          p={2}
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
            color={"whitesmoke"}
            mt={0.6}
            spacing={{
              sm: 1,
              md: 3,
            }}
          >
            <Typography variant="body1" fontWeight={"600"} zIndex={9999}>
              Follow Us on
            </Typography>
            <Stack direction={"row"} spacing={0}>
              <IconButton
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
          p={2}
          xs={6}
          sm={6.5}
          md={7.5}
          lg={8.5}
          bgcolor={"secondary.main"}
        >
          <Stack direction={"row"} justifyContent={"end"} spacing={3}>
            <Stack direction={"row"} alignItems={"center"} color={"whitesmoke"}>
              <Box>
                <IconButton color="inherit" href="tel:8238046519">
                  <WifiCalling3TwoTone
                    sx={{
                      fontSize: "32px",
                    }}
                  />
                </IconButton>
              </Box>
              <Box>
                <Typography variant="subtitle2">Click Call Now !</Typography>

                <a
                  href="tel:8238046519"
                  style={{
                    color: "whitesmoke",
                  }}
                >
                  <Typography variant="body1" fontWeight={600}>
                    +91 8238046519
                  </Typography>
                </a>
              </Box>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} color={"whitesmoke"}>
              <Box>
                <IconButton color="inherit" href="tel:8238046519">
                  <ForwardToInboxTwoTone
                    sx={{
                      fontSize: "32px",
                    }}
                  />
                </IconButton>
              </Box>
              <Box>
                <Typography variant="subtitle2">Click Email Now !</Typography>

                <a
                  href="mailto:info@kpgu.edu.in"
                  style={{
                    color: "whitesmoke",
                  }}
                >
                  <Typography variant="body1" fontWeight={600}>
                    info@kpgu.edu.in
                  </Typography>
                </a>
              </Box>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} color={"whitesmoke"}>
              <Box>
                <IconButton color="inherit" href="tel:8238046519">
                  <AccessTimeTwoTone
                    sx={{
                      fontSize: "32px",
                    }}
                  />
                </IconButton>
              </Box>
              <Box>
                <Typography variant="subtitle2">Work Hours</Typography>

                <Typography variant="body1" fontWeight={600}>
                  Mon-Sat: 8am-6pm
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default ContactNavbar;
