import {
  ArrowCircleRightTwoTone,
  CancelTwoTone,
  KeyboardArrowRightRounded,
} from "@mui/icons-material";
import {
  Box,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../contexts/AppContext";

function Drawer({ drawerStatus, toggleDrawer, drawerData, setDrawerStatus }) {
  const { someValue, setSomeValue } = useContext(AppContext);

  // console.log("ok");
  // console.log("ok2");

  const mainFun = (which, dataVal) => {
    if (which === "nestedDrawerToggle") {
      console.log("open");
      setSomeValue((prev) => {
        const updatedArray = prev.map((item) =>
          item.title === dataVal.title
            ? { ...item, value: !item.value }
            : { ...item, value: false }
        );
        return updatedArray;
      });
    }

    if (which === "closeAllDrawer") {
      console.log("close");

      setSomeValue((prev) => {
        return prev.map((item) => ({
          title: item.title,
          value: false,
        }));
      });
    }
    setDrawerStatus(false)
  };

   console.log(someValue);

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
      disableSwipeToOpen
      disableDiscovery
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
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
        <IconButton
          color="inherit"
          onClick={() => {
            mainFun("closeAllDrawer");
            setDrawerStatus(false);
          }}
          sx={{ p: 0 }}
        >
          <CancelTwoTone color="inherit" />
        </IconButton>
      </Stack>
      <Stack>
        {drawerData.dropdown
          ? drawerData.dropdown.map((linkData, index) => {
              if (linkData.dropdown) {
                return (
                  <Box key={index + 400}>
                    <ListItemButton
                      key={index}
                      className="navLink"
                      onClick={() => {
                        mainFun("nestedDrawerToggle", linkData);
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
                    </ListItemButton>
                    <Drawer
                      key={index + 1}
                      drawerStatus={
                        someValue.find((item) => item.title === linkData.title)
                          ?.value || false
                      }
                      toggleDrawer={() =>
                        mainFun("nestedDrawerToggle", linkData)
                      }
                      drawerData={linkData}
                    />
                  </Box>
                );
              } else {
                return (
                  <ListItemButton
                    key={index + 3}
                    className="navLink"
                    onClick={() => {
                      mainFun("closeAllDrawer");
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
