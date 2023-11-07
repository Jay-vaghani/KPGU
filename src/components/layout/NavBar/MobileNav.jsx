import {
  CloseRounded,
  ContactPhoneRounded,
  Delete,
  HomeRounded,
  MenuRounded,
  QuizRounded,
} from "@mui/icons-material";
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileMenuLinks from "./MobileMenuLinks";

function MobileNav() {
  const navigation = useNavigate();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const ChangeDrawerStatus = (link) => {
    setIsDrawerOpen(!isDrawerOpen);
    link ? navigation(link) : "";
  };

  const NavLinks = [
    {
      title: "Home",
      link: "/",
      icon: <HomeRounded color="primary" />,
    },
    {
      title: "About",
      link: "/about",
      icon: <QuizRounded color="primary" />,
    },
    {
      title: "Contact",
      link: "/contact",
      icon: <ContactPhoneRounded color="primary" />,
    },
  ];

  return (
    <>
      <IconButton
        aria-label="delete"
        size="large"
        color="primary"
        onClick={ChangeDrawerStatus}
      >
        <MenuRounded fontSize="inherit" />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={isDrawerOpen}
        onOpen={ChangeDrawerStatus}
        onClose={ChangeDrawerStatus}
      >
        <Stack width={"80vw"} maxWidth={"250px"}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography
              variant="body1"
              fontWeight={600}
              px={1}
              py={2}
              boxShadow={"0px 2px 25px 0px #e2e2e254"}
            >
              Menu
            </Typography>
            <IconButton
              size="large"
              color="primary"
              onClick={ChangeDrawerStatus}
            >
              <CloseRounded />
            </IconButton>
          </Stack>
          <List>
            {NavLinks.map((data, index) => (
              <MobileMenuLinks
                key={index}
                title={data.title}
                icon={data.icon}
                link={data.link}
                ChangeDrawerStatus={ChangeDrawerStatus}
              />
            ))}
          </List>
        </Stack>
      </SwipeableDrawer>
    </>
  );
}

export default MobileNav;
