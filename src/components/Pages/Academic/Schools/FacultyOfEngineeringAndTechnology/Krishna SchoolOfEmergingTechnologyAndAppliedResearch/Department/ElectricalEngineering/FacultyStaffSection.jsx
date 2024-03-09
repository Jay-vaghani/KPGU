// ============== React Imports ==============

import React, { useContext } from "react";
import { AppContext } from "../../../../../../../../contexts/AppContext";

// ============== MUI Imports ==============

import { Box, Grid } from "@mui/material";

// ============== Custom Components Imports ==============

import FacultyStaff from "../../../../../../../Common/FacultyStaff";

function FacultyStaffSection() {
  const { maxWidth } = useContext(AppContext);

  // ============== Faculties ==============
  const Faculties = [
    {
      name: "Dr. Samir H. Patel",
      imgNo: "6013",
      designation: "Associate Professor || Head",
      experience: 14,
      qualification: "Ph.D || M.E[Power System] || B.E[Electrical]",
      customLink: "",
    },
    {
      name: "Vijay Bharat Desle",
      imgNo: "6015",
      designation: "Assistant Professor",
      experience: 10,
      qualification:
        "Ph.D[Pursuing] || M.Tech[Electrical Power Systems] || B.Tech[Electrical]",
      customLink: "",
    },
    {
      name: "Ketul Kachhia",
      imgNo: "6192",
      designation: "Assistant Professor",
      experience: 11,
      qualification:
        "PhD [Pursuing] || M.TECH[Power System] || MBA[MARKETING] || B.E[ELECTRICAL]",
      customLink: "",
    },
    {
      name: "Divyesh Vasava",
      imgNo: "",
      designation: "Assistant Professor",
      experience: 3,
      qualification: "M.TECH[Power System]  B.E[ELECTRICAL]",
      customLink: "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png",
    },
  ];

  return (
    <Box maxWidth={maxWidth} mx={"auto"} bgcolor={"#fff"} borderRadius={4}>
      <Grid container spacing={2}>
        {Faculties.map(
          (
            { name, designation, experience, qualification, imgNo, customLink },
            index
          ) => (
            <FacultyStaff
              name={name}
              qualification={qualification}
              designation={designation}
              experience={experience}
              key={index}
              facultyName={"KSET"}
              imgNo={imgNo}
              MainLink={
                "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707801651/KPGU/Faculty%20Images/"
              }
              customLink={customLink}
              insideTab={true}
            />
          )
        )}
      </Grid>
    </Box>
  );
}

export default FacultyStaffSection;
