import { AppBar, Box, Stack } from "@mui/material";
import React, { useContext } from "react";
import DesktopNavBar from "./DesktopNavBar/DesktopNavBar";
import MobileNavbar from "./MobileNavBar/MobileNavbar";
import { AppContext } from "../../../../contexts/AppContext";

function MainNavBar() {
  const width = {
    xs: "120px",
    sm: "170px",
    lg: "200px",
  };

  const { innerWith, maxWidth } = useContext(AppContext);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="transparent"
      sx={{ ...maxWidth, bgcolor: "#fff" }}
    >
      <Stack
        p={2}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box width={width}>
          <img
            src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1699517175/KPGU/logo.svg"
            alt="Logo"
            width={"100%"}
          />
        </Box>
        <Box display={innerWith < 1060 ? "none" : "block"}>
          <DesktopNavBar innerWith={innerWith} />
        </Box>
        <Box display={innerWith < 1060 ? "block" : "none"}>
          <MobileNavbar innerWith={innerWith} />
        </Box>
      </Stack>
    </AppBar>
  );
}

export default MainNavBar;
