import { Box } from "@mui/material";
import React, { useContext } from "react";
import MobileNavBar from "./MobileNav";
import { AppContext } from "../../../contexts/AppContext";
import DesktopNav from "./DesktopNav";

function MainNavbar() {
  const { innerWidth } = useContext(AppContext);

  return (
    <Box bgcolor={"#fff"}>
      {innerWidth > 1226 ? <DesktopNav /> : <MobileNavBar />}
    </Box>
  );
}

export default MainNavbar;
