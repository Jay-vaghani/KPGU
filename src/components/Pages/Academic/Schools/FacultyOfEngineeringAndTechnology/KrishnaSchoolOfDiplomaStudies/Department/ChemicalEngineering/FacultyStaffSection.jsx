import React, { useContext } from "react";
import { AppContext } from "../../../../../../../../contexts/AppContext";
import { Box, Grid } from "@mui/material";
import FacultyStaff from "../../../../../../../Common/FacultyStaff";

function FacultyStaffSection() {
  const { maxWidth } = useContext(AppContext);

  const Faculties = [
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
      qualification: "M.E in Civil Engineering",
      customLink: "",
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
