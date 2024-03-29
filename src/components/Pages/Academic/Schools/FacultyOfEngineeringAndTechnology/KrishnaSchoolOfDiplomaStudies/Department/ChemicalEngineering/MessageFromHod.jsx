import { Box } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../../../../../../../../contexts/AppContext";
import Quote from "../../../../../../../Common/Quote";
import HODMessage from "../../../../../../../Common/HODMessage";

function MessageFromHod() {
  const { maxWidth } = useContext(AppContext);
  return (
    <>
      <HODMessage
        hodImg={
          "https://res.cloudinary.com/dby2vbxv3/image/upload/v1710304920/KPGU/Faculty%20Images/KSDS/hod-chemical.webp"
        }
        hodEmail={"hod.me.kset@kpgu.ac.in"}
        hodName={"Mr. Jimit Kansara"}
        hodOf={"Chemical Engineering"}
        hodOfShort={"[KSDS]"}
        hodMessage={[
          "",
        ]}
      />
      {/* <Quote
        quote={
          "With the idea that mentoring is a lifetime commitment, we motivate students to achieve academic excellence with valuable life lessons"
        }
      /> */}
    </>
  );
}

export default MessageFromHod;
