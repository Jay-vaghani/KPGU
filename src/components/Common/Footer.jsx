import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { Grid, Box, Button, Stack, Typography } from "@mui/material";
import {
  AntiRaggingIcon,
  EqualOpportunityIcon,
  FacilityServicesIcon,
  GrievanceRedressalCommitteeIcon,
  HumanResourcesIcon,
  InternalComplaintCommitteeIcon,
  MapIcon,
  TelePhoneIcon,
} from "../../Utils/Icons/CustomIcon";
import {
  HealthAndSafetyRounded,
  MarkEmailReadRounded,
  PhoneInTalkRounded,
  SchoolRounded,
} from "@mui/icons-material";

function Footer() {
  const { maxWidth } = useContext(AppContext);

  return (
    <Box mt={7} className="smooth-shadow rounded-4">
      <Grid container width={maxWidth} mx={"auto"} px={"3%"}>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          p={2}
          display={{
            xs: "block",
            lg: "none",
          }}
        >
          <Box>
            <img
              src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1700155108/KPGU/logo.svg"
              alt="Logo"
              width={"100%"}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid container width={maxWidth} mx={"auto"} p={"3%"} py={5} pt={0}>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          p={2}
          display={{
            xs: "none",
            lg: "block",
          }}
        >
          <Box mb={2}>
            <img
              src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1700155108/KPGU/logo.svg"
              alt="Logo"
              width={"70%"}
            />
          </Box>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236440.11092306007!2d72.88288329453124!3d22.187784800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc3e15a4fce63%3A0x5f75d8caf42dbaec!2sKPGU%2C%20Vadodara%20(Formerly%20BITS%20Edu%20Campus)!5e0!3m2!1sen!2sin!4v1703494925840!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{borderRadius: "7px"}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          p={2}
          textTransform={"uppercase"}
        >
          <Typography variant="h4" gutterBottom fontWeight={500}>
            Contact Us
          </Typography>
          <Stack spacing={2}>
            <Button
              startIcon={<MapIcon />}
              variant="contained"
              sx={{ fill: "#fff", justifyContent: "start" }}
              href="https://maps.app.goo.gl/cpophxxBVvx84hpB9"
              target="_blank"
            >
              open in maps
            </Button>
            <Button
              startIcon={<TelePhoneIcon />}
              sx={{ fill: "#fff", justifyContent: "start" }}
              variant="contained"
              href="tel:1800 843 9999"
              target="_blank"
            >
              Click to call
            </Button>
            <Button
              startIcon={<PhoneInTalkRounded />}
              sx={{ fill: "#fff", justifyContent: "start" }}
              variant="contained"
              href="tel:7861805306"
              target="_blank"
            >
              call button 1
            </Button>
            <Button
              startIcon={<PhoneInTalkRounded />}
              sx={{ fill: "#fff", justifyContent: "start" }}
              variant="contained"
              href="tel:8238046519"
              target="_blank"
            >
              call button 2
            </Button>
            <Button
              startIcon={<MarkEmailReadRounded />}
              sx={{ fill: "#fff", justifyContent: "start" }}
              variant="contained"
              href="tel:8238046519"
              target="_blank"
            >
              Click to mail
            </Button>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          p={2}
          textTransform={"uppercase"}
        >
          <Typography variant="h4" gutterBottom fontWeight={500}>
            Our Campus
          </Typography>

          <Stack spacing={2}>
            <Button
              startIcon={<SchoolRounded />}
              sx={{ fill: "#fff", justifyContent: "start" }}
              variant="contained"
            >
              Academic program
            </Button>
            <Button
              startIcon={<HealthAndSafetyRounded />}
              sx={{ fill: "#fff", justifyContent: "start" }}
              variant="contained"
            >
              Campus Safety
            </Button>
            <Button
              startIcon={<FacilityServicesIcon />}
              sx={{ fill: "#fff", justifyContent: "start" }}
              variant="contained"
            >
              Facility Services
            </Button>
            <Button
              startIcon={<HumanResourcesIcon />}
              sx={{ fill: "#fff", justifyContent: "start" }}
              variant="contained"
            >
              Human Resources
            </Button>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          p={2}
          textTransform={"uppercase"}
        >
          <Typography variant="h4" gutterBottom fontWeight={500}>
            Quick Links
          </Typography>

          <Stack spacing={2}>
            <Button
              startIcon={<EqualOpportunityIcon />}
              sx={{ fill: "#fff", justifyContent: "start" }}
              variant="contained"
            >
              Equal Opportunity Cell
            </Button>
            <Button
              startIcon={<InternalComplaintCommitteeIcon />}
              sx={{ fill: "#fff", justifyContent: "start" }}
              variant="contained"
            >
              Complaint Committee
            </Button>
            <Button
              startIcon={<AntiRaggingIcon />}
              sx={{ fill: "#fff", justifyContent: "start" }}
              variant="contained"
            >
              Anti Ragging Committee
            </Button>
            <Button
              startIcon={<GrievanceRedressalCommitteeIcon />}
              sx={{ fill: "#fff", justifyContent: "start" }}
              variant="contained"
            >
              Grievance Redressal
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;

//
//
//
//
