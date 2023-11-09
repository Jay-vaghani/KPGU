import { AppBar, Box, Stack } from "@mui/material";
import React from "react";
import NavBarLinks from "./NavBarLinks";

function MainNavBar() {
  return (
    <AppBar position="sticky" elevation={0} color="transparent">
      <Stack
        p={2}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box
          width={{
            xs: "170px",
            lg: "200px",
          }}
        >
          <img
            src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1699517175/KPGU/logo.svg"
            alt="Logo"
            width={"100%"}
          />
        </Box>
        <Stack direction={"row"} spacing={1.5}>
          <NavBarLinks link={"/"} name={"Home"} />
          <NavBarLinks link={"/about"} name={"About Us"} />
          <NavBarLinks link={"/"} name={"Academic"} />
          <NavBarLinks link={"/"} name={"CAMPUS"} />
          <NavBarLinks link={"/"} name={"ADMISSIONS"} />
          <NavBarLinks link={"/"} name={"PLACEMENTS"} />
          <NavBarLinks link={"/"} name={"RESEARCH & PUBLICATIONS"} />
        </Stack>
      </Stack>
    </AppBar>
  );
}

export default MainNavBar;
