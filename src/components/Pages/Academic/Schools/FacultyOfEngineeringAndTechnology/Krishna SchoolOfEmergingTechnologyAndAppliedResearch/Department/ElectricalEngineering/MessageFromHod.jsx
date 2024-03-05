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
          "https://res.cloudinary.com/dby2vbxv3/image/upload/v1709635905/KPGU/Faculty%20Images/KSET/hod-ee.webp"
        }
        hodEmail={"hod.ee.kset@kpgu.ac.in"}
        hodName={"Dr. Samir H. Patel"}
        hodOf={" Electrical Engineering"}
        hodOfShort={"[KSET]"}
        hodMessage={[
          "It is my pleasure and honor to welcome you all to the Department of Electrical Engineering at Drs. Kiran & Pallavi Patel Global University, Vadodara, Gujarat, India. Since its inception in 2004, the Krishna Edu Campus has been a premiere engineering institute in Gujarat. The Electrical Engineering department is an integral part of the institute right from the day of commencement. The Electrical Engineering is an evergreen branch of engineering offering white collar profession.",
          "An Electrical Engineer is an all-rounder required in all the industries, PSUs, Urban or Rural administrative agencies. The branch is one of the most popular for those seeking the government jobs. The latest trends in EV, Battery technologies, Solar, Wind, Industrial Automation, Robotics are offering excellent opportunities to an Electrical Engineer in addition to old and ever popular career options. This has resulted in the department boasting highly proficient electrical engineers among its alumni who are contributing towards building a brighter future for our society and nation.",
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
