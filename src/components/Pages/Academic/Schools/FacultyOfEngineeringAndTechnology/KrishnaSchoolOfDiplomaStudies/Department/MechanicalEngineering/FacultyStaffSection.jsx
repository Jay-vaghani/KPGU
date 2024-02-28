import React, { useContext } from "react";
import { AppContext } from "../../../../../../../../contexts/AppContext";
import { Box, Grid } from "@mui/material";
import FacultyStaff from "../../../../../../../Common/FacultyStaff";

function FacultyStaffSection() {
  const { maxWidth } = useContext(AppContext);

  const Faculties = [
    {
      name: "Mr. Pratikkumar Rameshbhai Patel",
      imgNo: "5995",
      designation: "Assistant Professor",
      experience: 14,
      qualification: "M.E[Thermal Engineering] || B.E[Mechanical Engineering]",
      customLink: "",
    },
    {
      name: "Mr. Ankur P. Patel",
      imgNo: "6002",
      designation: "Assistant Professor",
      experience: 12,
      qualification: "M.E[Machine Design] || B.E[Mechanical Engineering]",
      customLink: "",
    },
    {
      name: "Mr Mandar Sumant",
      imgNo: "5998",
      designation: "Assistant Professor",
      experience: 18,
      qualification:
        "PhD[Mechanical-Pursuing] || M.E[Advance Mfg Systems -Mechanical] || B.E[Mechanical]",
      customLink: "",
    },
    {
      name: "Mr Mehul A. Shah",
      imgNo: "6006",
      designation: "Assistant Professor",
      experience: 9,
      qualification:
        "PhD [Mechanical-Pursuing] || M.E[Thermal Engineering] || B.E[Mechanical Engineering]",
      customLink: "",
    },
    {
      name: "Mr. Nilesh A. Patel",
      imgNo: "5991",
      designation: "Assistant Professor",
      experience: 17,
      qualification:
        "M.E[Mechanical Engineering] || B.E[Production Engineering]",
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
