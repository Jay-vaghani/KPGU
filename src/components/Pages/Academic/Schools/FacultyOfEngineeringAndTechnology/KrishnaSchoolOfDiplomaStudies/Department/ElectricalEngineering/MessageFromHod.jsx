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
        hodEmail={"hod.ee.ksds@kpgu.ac.in"}
        hodName={"Dr. Dattesh Y. Joshi"}
        hodOf={" Electrical Engineering"}
        hodOfShort={"[KSDS]"}
        hodMessage={[
          "On behalf of our students and faculty, it is my privilege to welcome all of you to the Department of Electrical Engineering at Krishna School of Diploma Studies (KSDS). We are in the age of electricity. So, we train our students in frontier areas of electrical engineering. ",
          "Today, the role of a department is not only to pursue academic excellence but also to motivate and empower its students to be lifelong learners, critical thinkers, and productive members of an ever-changing global society. In this direction, the department provides an excellent environment for its students and faculties to work with zeal and enthusiasm with an aim to give their best. ","The department also provides facilities to carry out research in the emerging technology areas. We take pride in our faculty, a team of highly capable and dedicated professionals, most of whom have academic and industrial experience and degrees from leading universities of the India. “Engineers are the creators of the new world”. We welcome you to be a part of KPGU to this creative process.",
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
