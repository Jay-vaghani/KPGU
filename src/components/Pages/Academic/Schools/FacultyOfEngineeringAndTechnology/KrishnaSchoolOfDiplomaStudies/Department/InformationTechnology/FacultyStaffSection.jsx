import React, { useContext } from "react";
import { AppContext } from "../../../../../../../../contexts/AppContext";
import { Box, Grid } from "@mui/material";
import FacultyStaff from "../../../../../../../Common/FacultyStaff";

function FacultyStaffSection() {
  const { maxWidth } = useContext(AppContext);

  const Faculties = [
    {
      name: "Ms. Manisha Vasava",
      imgNo: "6063",
      designation: "Assistant Professor",
      experience: 16,
      qualification: "M.Tech || B.E in Computer Engineering",
      customLink: "",
    },
    {
      name: "Ms. Priyanka Patel",
      imgNo: "6065",
      designation: "Assistant Professor",
      experience: 5,
      qualification: "M.Tech || B.E in Computer Engineering",
      customLink: "",
    },
    {
      name: "Monali Parikh",
      imgNo: "6064",
      designation: "Assistant Professor",
      experience: 11,
      qualification: "M.Tech[CSE] || B.E[CE]",
      customLink: "",
    },
    {
      name: "Ms. Dhara Parikh",
      imgNo: "9870",
      designation: "Assistant Professor",
      experience: 2,
      qualification: "M.E[Cyber Security] || B.E[I.T]",
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
