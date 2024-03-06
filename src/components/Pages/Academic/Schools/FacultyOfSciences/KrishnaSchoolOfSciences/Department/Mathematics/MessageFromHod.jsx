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
          "https://res.cloudinary.com/dby2vbxv3/image/upload/v1709708448/KPGU/Faculty%20Images/KSS/hod-bio.webp"
        }
        hodEmail={"hod.me.kset@kpgu.ac.in"}
        hodName={"Dr. Rita Mahapatra"}
        hodOf={"Biotechnology"}
        hodOfShort={"[KSS]"}
        hodMessage={[
          "It gives me immense pleasure in welcoming you to the Department of Biotechnology, Krishna School of Science. Our Department aspires to provide an intellectually stimulating environment and works for the strong foundation stone of the budding scientists in the domains of Biotechnology. Our well-qualified and experienced teachers are providing individual attention to the students in innovative projects, assignments and activities in the broad spectrum of science by nurturing their critical thinking and problem-solving skills. The well-equipped laboratories of our department play a crucial role to give practical exposure to the students and to give best quality education and to prepare them to address real-world problems.",
          "I wish bright future to our students!"
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
