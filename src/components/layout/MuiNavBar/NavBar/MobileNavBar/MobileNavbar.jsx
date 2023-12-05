import React, { useContext, useState } from "react";
import { HighlightOffTwoTone, MenuOpenRounded } from "@mui/icons-material";
import {
  IconButton,
  ListItemButton,
  ListItemText,
  Stack,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import {
  AboutLink,
  Academic,
  Admission,
  Campus,
  ResearchAndPublication,
} from "../Links";
import Drawer from "../Drawer";
import { AppContext } from "../../../../../contexts/AppContext";

function MobileNavbar() {
  const [mobileMenuDrawerOpen, setMobileMenuDrawerOpen] = useState(false);
  const [mobileLinkDrawer, setMobileLinkDrawer] = useState(false);
  const [mobileLinkData, setMobileLinkData] = useState(null);
  const { innerWith } = useContext(AppContext);

  const MobileMenuDrawerToggle = () => {
    setMobileMenuDrawerOpen(!mobileMenuDrawerOpen);
  };

  const MobileLinkDrawerToggle = () => {
    setMobileLinkDrawer(!mobileLinkDrawer);
  };

  const MobileLinkDrawerSetData = (data) => {
    setMobileLinkData(data);
  };

  return (
    <>
      <IconButton color="secondary" onClick={MobileMenuDrawerToggle}>
        <MenuOpenRounded fontSize="large" />
      </IconButton>
      <SwipeableDrawer
        sx={{ width: "auto", minHeight: "100" }}
        open={mobileMenuDrawerOpen}
        anchor="right"
        onClose={MobileMenuDrawerToggle}
        onOpen={MobileMenuDrawerToggle}
      >
        <Stack
          bgcolor={"secondary.main"}
          color={"#fff"}
          px={1.8}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography
            variant="h5"
            py={innerWith > 770 ? 3 : innerWith < 440 ? 1 : 2.5}
          >
            Navigation
          </Typography>
          <IconButton
            sx={{ color: "#fff", pr: 0 }}
            onClick={MobileMenuDrawerToggle}
          >
            <HighlightOffTwoTone />
          </IconButton>
        </Stack>
        <Stack>
          <ListItemButton className="navLink">
            <ListItemText>
              <Typography
                variant="body2"
                fontSize={"14px"}
                fontWeight={600}
                textTransform={"uppercase"}
                color={"inherit"}
              >
                Home
              </Typography>
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            className="navLink"
            onClick={() => {
              MobileLinkDrawerToggle();
              MobileLinkDrawerSetData(AboutLink);
            }}
          >
            <ListItemText>
              <Typography
                variant="body2"
                fontSize={"14px"}
                fontWeight={600}
                textTransform={"uppercase"}
                color={"inherit"}
              >
                ABOUT US
              </Typography>
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            className="navLink"
            onClick={() => {
              MobileLinkDrawerToggle();
              MobileLinkDrawerSetData(Academic);
            }}
          >
            <ListItemText>
              <Typography
                variant="body2"
                fontSize={"14px"}
                fontWeight={600}
                textTransform={"uppercase"}
                color={"inherit"}
              >
                ACADEMIC
              </Typography>
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            className="navLink"
            onClick={() => {
              MobileLinkDrawerToggle();
              MobileLinkDrawerSetData(Campus);
            }}
          >
            <ListItemText>
              <Typography
                variant="body2"
                fontSize={"14px"}
                fontWeight={600}
                textTransform={"uppercase"}
                color={"inherit"}
              >
                CAMPUS
              </Typography>
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            className="navLink"
            onClick={() => {
              MobileLinkDrawerToggle();
              MobileLinkDrawerSetData(Admission);
            }}
          >
            <ListItemText>
              <Typography
                variant="body2"
                fontSize={"14px"}
                fontWeight={600}
                textTransform={"uppercase"}
                color={"inherit"}
              >
                ADMISSIONS
              </Typography>
            </ListItemText>
          </ListItemButton>
          <ListItemButton className="navLink">
            <ListItemText>
              <Typography
                variant="body2"
                fontSize={"14px"}
                fontWeight={600}
                textTransform={"uppercase"}
                color={"inherit"}
              >
                PLACEMENTS
              </Typography>
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            className="navLink"
            onClick={() => {
              MobileLinkDrawerToggle();
              MobileLinkDrawerSetData(ResearchAndPublication);
            }}
          >
            <ListItemText>
              <Typography
                variant="body2"
                fontSize={"14px"}
                fontWeight={600}
                textTransform={"uppercase"}
                color={"inherit"}
              >
                RESEARCH & PUBLICATIONS
              </Typography>
            </ListItemText>
          </ListItemButton>
        </Stack>
      </SwipeableDrawer>
      {mobileLinkData ? (
        <Drawer
          drawerStatus={mobileLinkDrawer}
          toggleDrawer={MobileMenuDrawerToggle}
          drawerData={mobileLinkData}
          setDrawerStatus={setMobileLinkDrawer}
          innerWith={innerWith}
          closeMobileMainDrawer={MobileMenuDrawerToggle}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default MobileNavbar;
