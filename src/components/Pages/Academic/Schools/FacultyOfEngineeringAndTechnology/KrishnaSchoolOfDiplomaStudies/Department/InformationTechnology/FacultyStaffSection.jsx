import React, { useContext } from "react";
import { AppContext } from "../../../../../../../../contexts/AppContext";
import { Box, Grid } from "@mui/material";
import FacultyStaff from "../../../../../../../Common/FacultyStaff";

function FacultyStaffSection() {
  const { maxWidth } = useContext(AppContext);

  const Faculties = [
    {
      name: "Vatsh Sharma",
      imgNo: "7102",
      designation: "Lecturer",
      experience: 1,
      qualification: "B.tech || M.Tech[CSE-Pursuing]",
      customLink: "",
    },
    {
      name: "Digvijaysinh Rathod",
      imgNo: "7104",
      designation: "Lecturer",
      experience: 1,
      qualification: "B.tech || M.Tech[CSE-Pursuing]",
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
              facultyName={"KSDS"}
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
