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
          "https://res.cloudinary.com/dby2vbxv3/image/upload/v1709635524/KPGU/Faculty%20Images/KSET/hod-it.webp"
        }
        hodEmail={"hod.it.kset@kpgu.ac.in"}
        hodName={"Dr. Nandini M. Chaudhari"}
        hodOf={"Information Technology"}
        hodOfShort={"[KSET]"}
        hodMessage={[
          "Department of information Technology  has started its journey from last 3 years, The objective of IT department is imparting knowledge in cutting-edge technologies in IT Information Technology. We are just now two leaf sapling , and definitely will grow into the big tree in next 10 years.",
          "We take tremendous pride in our academic excellence, The Department has a team of dynamic, young and dedicated staff, with specialization in wide array of areas. our faculty members are known for blending advanced theories with practical Engineering applications. We continue to strive to meet our mission.",
          "In order to ensure the quality education- teaching, training, continuous assessment & tutorials with systematic testing are the tools to increases the student’s potential. Accordingly, measures are taken to keep the students busy throughout the course. The periodically updated curriculum imparts technical knowledge to the students and the application based environment in the state of the art laboratories.",
          "It will be our responsibility to provide you with excellent education, we expect from you to work hard and run that extra mile to achieve grand academic and personal success.",
        ]}
      />
    </>
  );
}

export default MessageFromHod;
