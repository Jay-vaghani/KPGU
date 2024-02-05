import React from "react";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Page404() {
  const navigate = useNavigate();

  return (
    <Stack alignItems={"center"} maxWidth={"1000px"} mx={"auto"} px={"1%"}>
      <img
        src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1707109753/KPGU/Page404.svg"
        width={"100%"}
        alt=""
      />
      <h2
        style={{ fontFamily: "Nunito Sans, sans-serif" }}
        className="fw-semibold"
      >
        Please don't refresh pages in this website
      </h2>
      <Button
        variant="contained"
        color="info"
        sx={{ fontWeight: 600, my: 3 }}
        onClick={() => navigate("/")}
      >
        go to home page
      </Button>
    </Stack>
  );
}

export default Page404;
