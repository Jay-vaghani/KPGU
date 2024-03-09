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
      name: "Dr. Khushbu Bhatt",
      imgNo: "",
      designation: "Head & Assistant Professor ",
      experience: 9,
      qualification: "Ph.D[Transportation Engineering] ||  M.Tech || B.E[Civil] || [GATE Qualified 2013]",
      customLink: "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png",
    },
    {
      name: "Mr. Ankit N Patel",
      imgNo: "6110",
      designation: "Assistant Professor",
      experience: 13,
      qualification: "M.Tech[CPM] || B.E[Civil]",
      customLink: "",
    },
    {
      name: "Mithileshdatta Pandya",
      imgNo: "6052",
      designation: "Assistant Professor",
      experience: 11,
      qualification: "Ph.D[Pursuing-Civil] || M.E[CASAD] || B.E[Civil]",
      customLink: "",
    },
    {
      name: "Mr. Ravi S. Patel",
      imgNo: "6090",
      designation: "Assistant Professor",
      experience: 9,
      qualification: "M.E in Civil Engineering || Ph.D[Pursuing-Civil]",
      customLink: "",
    },
    {
      name: "Komal Vaidhya",
      imgNo: "",
      designation: "Assistant Professor",
      experience: 14,
      qualification: "M.E[Structure] || B.E[Civil]",
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
