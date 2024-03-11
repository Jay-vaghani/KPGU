import React, { useContext } from "react";
import { AppContext } from "../../../../../../../../contexts/AppContext";
import { Box, Grid } from "@mui/material";
import FacultyStaff from "../../../../../../../Common/FacultyStaff";

function FacultyStaffSection() {
  const { maxWidth } = useContext(AppContext);

  const Faculties = [
    {
      name: "Pritesh Ratilal Patel",
      imgNo: "5997",
      designation: "Assistant Professor || HOD- Mechanical",
      experience: 18,
      qualification: "PhD [Pursuing] || M.E[Advance Manufacturing Systems]",
      customLink: "",
    },


    {
      name: "SUSHANT PRAJAPATI",
      imgNo: "5993",
      designation: "LECTURER",
      experience: 9,
      qualification: "M.E[THERMAL ENGINEERING]",
      customLink: "",
    },
    {
      name: "OZA VIKRAM GANPATLAL",
      imgNo: "5994",
      designation: "Lecturer",
      experience: 20,
      qualification: "M.E[CAD-CAM]",
      customLink: "",
    },
    {
      name: "Hemantkumar Benjamin Rathod",
      imgNo: "",
      designation: "Assistant Professor",
      experience: 13,
      qualification: "B.E[Mechanical] || M.E[Production Engg]",
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
