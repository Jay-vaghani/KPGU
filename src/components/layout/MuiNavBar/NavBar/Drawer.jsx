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
import { AppContext } from "../../../../contexts/AppContext";

function Drawer({
  drawerStatus,
  toggleDrawer,
  drawerData,
  setDrawerStatus,
  closeMobileMainDrawer,
}) {
  const { someValue, setSomeValue, innerWith } = useContext(AppContext);

  const mainFun = (which, dataVal) => {
    if (which === "nestedDrawerToggle") {
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
      setSomeValue((prev) => {
        return prev.map((item) => ({
          title: item.title,
          value: false,
        }));
      });
    }
    closeMobileMainDrawer ? closeMobileMainDrawer() : "";
    setDrawerStatus(false);
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
        sx={{ width: "auto" }}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        p={2}
        bgcolor={"secondary.main"}
        color={"#fff"}
        py={innerWith > 770 ? 3.4 : innerWith < 440 ? 1.4 : 2.9}
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
          sx={{ p: 0, ml: 4 }}
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
                      setDrawerStatus(false);
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
