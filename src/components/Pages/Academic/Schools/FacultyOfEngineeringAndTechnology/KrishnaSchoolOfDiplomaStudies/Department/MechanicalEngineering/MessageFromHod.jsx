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
        hodEmail={"hod.me.ksds@kpgu.ac.in"}
        hodName={"Mr. Patel Pritesh Ratilal"}
        hodOf={"Mechanical Engineering"}
        hodOfShort={"[KSDS]"}
        hodMessage={[
          "A warm welcome to the Department of Mechanical Engineering, Krishna School of Diploma Studies (KSDS), KPGU, Vadodara!!!",
          "The Department of Mechanical Engineering was established in the year 2004 to cater the demand of globally competitive Mechanical engineers. The department has started its 3 years’ diploma program, 4 years’ undergraduate program and 2 years post graduate program in “Advance Manufacturing System” to fulfil the need of specialized skills. The Department has well-qualified, experienced and dedicated faculty members having specialization in various fields of Mechanical Engineering. The Department has 1 faculty members pursuing their PhD.",
          "In order to ensure overall development of students, the department follows holistic approach that incorporates career counselling & industrial training along with academic activities. The Department has well equipped laboratories in the area of fluid mechanics, fluid power engineering, heat transfer, automobile engineering, material science and metallurgy, manufacturing process, refrigeration & air conditioning, computer aided design, computer aided manufacturing etc. To enhance the knowledge of students and to make them aware of recent innovation in Mechanical engineering the Department conducts workshops, seminars and expert talks. Department organizes government funded seminars like GUJCOST etc. on regular basis. Industrial visits are organized for students to various industries in and around Vadodara. Department facilitates and encourages students to pursue internships in various industries. Students get opportunity to develop in-house laboratory setups and projects.",
          "For up gradation of technical knowledge and skills, the faculty members of the Department participate in various FDPs and STTPs on regular basis. Faculty members are also encouraged to publish their research work in national and international conferences and journals. ",
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
