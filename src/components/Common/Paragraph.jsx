import { Typography } from "@mui/material";
import React from "react";

function Paragraph({ content }) {
  const ParaDot = () => (
    <div className="dot">
      <div className="dot2"></div>
    </div>
  );

  return (
    //
    <Typography
      variant="h6"
      position={"relative"}
      fontSize={"20px"}
      mb={3.5}
      textAlign={{
        xs: "start",
        sm: "justify"
      }}
      pl={3}
      borderLeft={"3px solid #264796"}
    >
      <ParaDot />
      {content}
    </Typography>
  );
}

export default Paragraph;
