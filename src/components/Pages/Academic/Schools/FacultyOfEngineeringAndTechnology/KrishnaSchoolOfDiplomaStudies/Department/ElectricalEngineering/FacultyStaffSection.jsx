import React, { useContext } from "react";
import { AppContext } from "../../../../../../../../contexts/AppContext";
import { Box, Grid } from "@mui/material";
import FacultyStaff from "../../../../../../../Common/FacultyStaff";

function FacultyStaffSection() {
  const { maxWidth } = useContext(AppContext);

  const Faculties = [
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
