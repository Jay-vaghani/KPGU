import { CancelRounded, CancelTwoTone } from "@mui/icons-material";
import {
  IconButton,
  ListItemButton,
  ListItemText,
  Stack,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import React from "react";

function Drawer({ drawerStatus, toggleDrawer, drawerData }) {
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
        sx={{ width: "350px" }}
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
              console.log(linkData.title);
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
            })
          : ""}
      </Stack>
    </SwipeableDrawer>
  );
}

export default Drawer;
