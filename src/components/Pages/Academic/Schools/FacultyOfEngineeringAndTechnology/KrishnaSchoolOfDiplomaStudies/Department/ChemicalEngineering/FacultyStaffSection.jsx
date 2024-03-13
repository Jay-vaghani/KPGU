import React, { useContext } from "react";
import { AppContext } from "../../../../../../../../contexts/AppContext";
import { Box, Grid } from "@mui/material";
import FacultyStaff from "../../../../../../../Common/FacultyStaff";

function FacultyStaffSection() {
  const { maxWidth } = useContext(AppContext);

  const Faculties = [
    {
      name: "Jimit H. Kansara",
      imgNo: "",
      designation: "HOD-Chemical || Lecturer",
      experience: 9,
      qualification: "B.E[Chemical]",
      customLink: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1710304615/KPGU/Faculty%20Images/KSDS/0881.webp",
    },
    {
      name: "YagneshKumar Alkeshbhai Vyas",
      imgNo: "",
      designation: "Assistant professor ",
      experience: 9,
      qualification: "PhD[Pursuing] || M.sc[Chemistry]",
      customLink: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1710310594/KPGU/Faculty%20Images/KSDS/YagneshKumar-Alkeshbhai-Vyas.webp",
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
