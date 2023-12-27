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
      variant="h5"
      position={"relative"}
      mb={3.5}
      pl={3}
      borderLeft={"3px solid #264796"}
    >
      <ParaDot />
      {content}
    </Typography>
  );
}

export default Paragraph;
