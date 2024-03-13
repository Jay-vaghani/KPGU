import React, { useContext } from "react";
import { AppContext } from "../../../../../../../../contexts/AppContext";
import { Box, Grid } from "@mui/material";
import FacultyStaff from "../../../../../../../Common/FacultyStaff";

function FacultyStaffSection() {
  const { maxWidth } = useContext(AppContext);

  const Faculties = [
    {
      name: "Dr. Nandini Chaudhari",
      imgNo: "6056",
      designation: "Professor and Head || Dy. Director KCCACT",
      experience: 30,
      qualification: "Ph.D. || M.Tech CSE || B.E. Computer",
      customLink: "",
    },
    {
      name: "Ms. Manisha Vasava",
      imgNo: "6063",
      designation: "Assistant Professor",
      experience: 16,
      qualification: "M.Tech || B.E[CE]",
      customLink: "",
    },
    {
      name: "Ms. Monali Parikh",
      imgNo: "6064",
      designation: "Assistant Professor",
      experience: 11,
      qualification: "M.Tech[CSE] || B.E[CE]",
      customLink: "",
    },
    {
      name: "Ms. Priyanka Patel",
      imgNo: "6065",
      designation: "Assistant Professor",
      experience: 5,
      qualification: "M.Tech || B.E[CE]",
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
    {
      name: "Ms. Jayshree Ranoliya",
      imgNo: "=",
      designation: "Assistant Professor",
      experience: 3,
      qualification: "M.E[I.T] || B.E[I.T]",
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
