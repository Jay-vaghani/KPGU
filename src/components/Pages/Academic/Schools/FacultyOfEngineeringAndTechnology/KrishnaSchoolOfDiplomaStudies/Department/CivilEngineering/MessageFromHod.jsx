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
          "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708513775/KPGU/Faculty%20Images/KSET/hod-cse.webp"
        }
        hodEmail={"hod.me.kset@kpgu.ac.in"}
        hodName={"Ms. Komal Dave"}
        hodOf={"Civil Engineering"}
        hodOfShort={"[KSDS]"}
        hodMessage={[
          "On behalf of our students and faculty, it is my privilege to welcome all of you to the Department of Civil Engineering at Krishna School of Diploma Studies (KSDS). The department of civil engineering at KPGU is well established with high quality laboratories with rich blend of traditional and modern equipment. Our well qualified faculty members from various specialized fields of civil engineering are dedicated to perform their duties and cultivating strong links with the industry, academic institution research institutions and consulting firms.",
          " It has been crafted to serve as a hub where all the stakeholders can collaborate in optimizing teaching-learning processes which ensures tailor made programmes, effective teaching learning processes, creation of enabling habitat, proactive participation of industry, embedding of stakeholders at every step of value chain and others.",
          "We take pride in our faculty, a team of highly capable and dedicated professionals, most of whom have academic and industrial experience and degrees from leading universities of the India. “Engineers are the creators of the new world”. We welcome you to be a part of KPGU to this creative process."
        ]}
      />

    </>
  );
}

export default MessageFromHod;
