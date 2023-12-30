import { Box } from "@mui/material";
import React from "react";
import { LeftQuoteIcon, RightQuoteIcon } from "../../Utils/Icons/CustomIcon";

function Quote({ quote, right, white }) {
  return (
    <Box mt={2} color={white ? "#fff" : "#264796cf"} fontWeight={600}>
      <p
        className={`fs-4 mb-1  ${
          innerWidth < 400
            ? "text-justify"
            : right
            ? "text-justify"
            : "text-center"
        }`}
      >
        <sup
          style={{
            fill: white ? "#fff" : "#264796cf",
            padding: "0 10px 0 0px",
          }}
        >
          <LeftQuoteIcon />
        </sup>
        {quote}
        <sub
          style={{ fill: white ? "#fff" : "#264796cf", padding: "0 0 0 10px" }}
        >
          <RightQuoteIcon />
        </sub>
      </p>
    </Box>
  );
}

export default Quote;
