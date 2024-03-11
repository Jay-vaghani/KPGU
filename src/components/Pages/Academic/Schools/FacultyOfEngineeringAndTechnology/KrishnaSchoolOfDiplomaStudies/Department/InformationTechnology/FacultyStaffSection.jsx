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
    {
      name: "Rahulkumar Shiyani",
      imgNo: "",
      designation: "Lecturer",
      experience: 1,
      qualification: "B.E[CSE]",
      customLink: "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png",
    },
    {
      name: "Yash Ramesh Donga",
      imgNo: "",
      designation: "Lecturer",
      experience: 1,
      qualification: "B.E[CSE]",
      customLink: "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png",
    },
    {
      name: "Akash Vir",
      imgNo: "",
      designation: "Lecturer",
      experience: 1,
      qualification: "B.Tech || M.Tech[CSE-Pursuing]",
      customLink: "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png",
    },
    {
      name: "Bhumi Vaja",
      imgNo: "",
      designation: "Lecturer",
      experience: 1,
      qualification: "B.E[CE]",
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
