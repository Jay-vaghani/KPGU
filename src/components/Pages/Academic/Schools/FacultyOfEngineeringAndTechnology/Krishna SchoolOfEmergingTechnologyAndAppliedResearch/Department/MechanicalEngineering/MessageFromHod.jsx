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
          "https://res.cloudinary.com/dby2vbxv3/image/upload/v1709636062/KPGU/Faculty%20Images/KSET/hod-me.webp"
        }
        hodEmail={"hod.me.kset@kpgu.ac.in"}
        hodName={"Dr. Nirmal Kumar Kushwaha"}
        hodOf={"Mechanical Engineering"}
        hodOfShort={"[KSET]"}
        hodMessage={[
          "I take the privilege to welcome you all to the Department of Mechanical Engineering at Krishna School of Emerging Technology & Applied Research, Krishna Edu Campus under the Drs. Kiran & Pallavi Patel Global University (KPGU), Vadodara. The department runs an undergraduate program in Mechanical Engineering, PG program in Advance Manufacturing System and PhD Program in Mechanical Engineering.",
          "The focus of the Department of Mechanical Engineering is on providing quality education and promoting practicals based hands on learning environment in the field of Mechanical Engineering. The Department of mechanical engineering came into existence in the year 2004. Since then the department of Mechanical Engineering strives hard to acquaint the budding engineering to sharpen their core engineering skills by taking up theoretical and practical measures in requisite quantum. Our Laboratories have been very well established not only to cover complete syllabus but to motivate students to learn beyond the syllabus which definitely develops in depth knowledge of the subject and skill sets to become promising engineers in future.",
          "The department has well qualified faculty and staff members who are available to the students all the times. The department strives to impart knowledge and training of the highest standard. The objective of the department is to prepare students for a successful career in Industry, Research and Academics to meet the needs of growing technology. Our efforts are to develop the ability among students to synthesize data and technical concepts for application to product design. We provide an opportunity for students to work as members of a team on multidisciplinary projects. Mechanical engineering department provides students with a sound foundation in the mathematical, scientific and engineering fundamentals necessary to formulate, solve and analyze engineering problems and to prepare them for higher studies as well as research.",
          "If you have further questions after browsing this website, please do not hesitate to contact us. You may also correspond with individual faculty members, or contact them by email, using the addresses shown on the faculty page. Our department looks forward to contribute in solving the technological challenges of society with active participation from all sections of the society. I wish to take the opportunity to assure you that I will try my best to maximize student’s participation in the department and will keep the admin transparent.",
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
