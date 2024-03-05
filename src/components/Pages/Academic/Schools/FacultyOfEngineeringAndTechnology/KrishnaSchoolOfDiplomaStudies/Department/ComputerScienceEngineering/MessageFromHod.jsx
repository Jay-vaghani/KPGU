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
          "https://res.cloudinary.com/dby2vbxv3/image/upload/v1709633623/KPGU/Faculty%20Images/KSDS/hod-cse.webp"
        }
        hodEmail={"hod.cse.ksds@kpgu.ac.in"}
        hodName={"Mr. Pratik M. Patel"}
        hodOf={"Computer Science And Engineering"}
        hodOfShort={"[KSDS]"}
        hodMessage={[
          "Welcome to Department of Computer Science & Engineering, KSDS",
          "The Department of Computer Science & Engineering (CSE) is dedicated for ensuring great careers for its students. For us, this means creating deeper industry relations than ever before, forming a research culture from day one and ensuring seamless education using the best technology available anywhere We strongly embolden innovation in research, in teaching and in service to the profession, the local community and industry. ",
          "Our faculties and students are constantly motivated to excel and to advance the state of the art in Computer Science and Engineering. The outstanding infrastructure, teaching faculty of the best kind of the Department ensuring quality education such as interaction among students, parents and staff, along with a Training and Placement Cell ensures a bright future to its students. I wish all the students and faculties a good academic career.",
        ]}
      />
     
    </>
  );
}

export default MessageFromHod;
