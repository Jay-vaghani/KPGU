import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import MobileNav from "./MobileNav";

function NavBar() {
  const navigation = useNavigate();

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        boxShadow: "0px 2px 25px 0px #e2e2e254",
        bgcolor: "#fff",
        color: "inherit",
      }}
    >
      <Toolbar>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
        >
          <Typography variant="h6" fontWeight={600}>
            LOGO
          </Typography>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Box
              display={{
                xs: "none",
                sm: "block",
              }}
            >
              <Button
                variant="text"
                className="nav-link"
                onClick={() => navigation("/")}
              >
                Home
              </Button>
              <Button
                variant="text"
                className="nav-link"
                onClick={() => navigation("/about")}
              >
                About
              </Button>
              <Button
                variant="text"
                className="nav-link"
                onClick={() => navigation("/contact")}
              >
                Contact
              </Button>
            </Box>
            <Box
              display={{
                xs: "block",
                sm: "none",
              }}
            >
              <MobileNav />
            </Box>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
