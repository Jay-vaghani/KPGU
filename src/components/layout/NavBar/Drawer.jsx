import { CancelTwoTone, KeyboardArrowRightRounded } from "@mui/icons-material";
import {
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../contexts/AppContext";

function Drawer({ drawerStatus, toggleDrawer, drawerData }) {
  const { someValue, setSomeValue } = useContext(AppContext);

  const nestedDrawerToggle = (dataVal) => {
    setSomeValue((prev) => {
      const updatedArray = prev.map((item) =>
        item.title === dataVal ? { ...item, value: !item.value } : item
      );
      return updatedArray;
    });
  };

  useEffect(() => {
    if (drawerData.dropdown) {
      setSomeValue((prev) => [
        ...prev,
        {
          title: drawerData.title,
          value: false,
        },
      ]);
    }
  }, [drawerData]);

  return (
    <SwipeableDrawer
      open={drawerStatus}
      anchor="right"
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
      sx={{
        minHeight: "100vh",
      }}
    >
      <Stack
        sx={{ width: "550px" }}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        p={2}
        bgcolor={"secondary.main"}
        color={"#fff"}
        py={2.5}
      >
        <Typography
          variant="h6"
          fontSize={"16px"}
          fontWeight={600}
          textAlign={"start"}
          textTransform={"uppercase"}
        >
          {drawerData.title}
        </Typography>
        <IconButton color="inherit" onClick={toggleDrawer} sx={{ p: 0 }}>
          <CancelTwoTone color="inherit" />
        </IconButton>
      </Stack>
      <Stack>
        {drawerData.dropdown
          ? drawerData.dropdown.map((linkData, index) => {
              if (linkData.dropdown) {
                return (
                  <ListItemButton
                    key={index}
                    className="navLink"
                    onClick={() => nestedDrawerToggle(linkData.title)}
                  >
                    <ListItemText>
                      <Typography
                        variant="body2"
                        fontSize={"14px"}
                        fontWeight={600}
                        textTransform={"uppercase"}
                        color={"inherit"}
                      >
                        {linkData.title}
                      </Typography>
                    </ListItemText>
                    <ListItemIcon
                      sx={{
                        justifyContent: "end",
                      }}
                    >
                      <KeyboardArrowRightRounded color="secondary" />
                    </ListItemIcon>
                    <Drawer
                      drawerStatus={
                        someValue.find((item) => item.title === linkData.title)
                          ?.value || false
                      }
                      toggleDrawer={nestedDrawerToggle}
                      drawerData={linkData}
                    />
                  </ListItemButton>
                );
              } else {
                return (
                  <ListItemButton key={index} className="navLink">
                    <ListItemText>
                      <Typography
                        variant="body2"
                        fontSize={"14px"}
                        fontWeight={600}
                        textTransform={"uppercase"}
                        color={"inherit"}
                      >
                        {linkData.title}
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                );
              }
            })
          : ""}
      </Stack>
    </SwipeableDrawer>
  );
}

export default Drawer;
