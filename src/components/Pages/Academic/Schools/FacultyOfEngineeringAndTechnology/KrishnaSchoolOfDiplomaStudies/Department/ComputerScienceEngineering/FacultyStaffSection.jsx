import React, { useContext } from "react";
import { AppContext } from "../../../../../../../../contexts/AppContext";
import { Box, Grid } from "@mui/material";
import FacultyStaff from "../../../../../../../Common/FacultyStaff";

function FacultyStaffSection() {
  const { maxWidth } = useContext(AppContext);

  const Faculties = [
    {
      name: "Pratik N Patel",
      imgNo: "",
      designation: "Assistant Professor || HOD[CSE-IT-AIML-CCBD]",
      experience: 9,
      qualification: "B.Tech || M.Tech",
      customLink: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707473964/KPGU/Faculty%20Images/KSET/6037.webp",
    },
    {
      name: "Helly Patel",
      imgNo: "6079",
      designation: "Lecturer",
      experience: 2,
      qualification: "B.Tech || M.Tech[CSE-Pursuing]",
      customLink: "",
    },
    {
      name: "Vaibhaviben Harshadrai Pandya",
      imgNo: "6078",
      designation: "Lecturer",
      experience: 2,
      qualification: "B.Tech || M.Tech[CSE-Pursuing]",
      customLink: "",
    },
    {
      name: "Kachhiya Janvi",
      imgNo: "",
      designation: "Lecturer",
      experience: 1,
      qualification: "B.Tech",
      customLink: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1710304081/KPGU/Faculty%20Images/KSDS/0858.webp",
    },
    {
      name: "Yachana Patel",
      imgNo: "",
      designation: "Lecturer",
      experience: 1,
      qualification: "B.E[COMPUTER SCIENCE & ENGINEERING]",
      customLink: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1710304157/KPGU/Faculty%20Images/KSDS/0856.webp",
    },
    {
      name: "Dhrupa Patel",
      imgNo: "",
      designation: "Lecturer",
      experience: 1,
      qualification: "B.E[COMPUTER SCIENCE & ENGINEERING]",
      customLink: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1710304247/KPGU/Faculty%20Images/KSDS/0859.webp",
    },
    {
      name: "Jay Prajapati",
      imgNo: "",
      designation: "Lecturer",
      experience: 1,
      qualification: "B.E[CSE]",
      customLink: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1710305647/KPGU/Faculty%20Images/KSDS/0863.webp",
    },
    {
      name: "Rutvij Upadhyay",
      imgNo: "",
      designation: "Lecturer",
      experience: 1,
      qualification: "B.Tech || M.Tech[CSE-Pursuing]",
      customLink: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1710305749/KPGU/Faculty%20Images/KSDS/0866.webp",
    },
    {
      name: "Nisha Parmar",
      imgNo: "",
      designation: "Lecturer",
      experience: 1,
      qualification: "B.Tech || M.Tech[CSE-Pursuing]",
      customLink: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1710305801/KPGU/Faculty%20Images/KSDS/0864.jpg",
    },
    {
      name: "Dharna Patel",
      imgNo: "",
      designation: "Lecturer",
      experience: 1,
      qualification: "B.E[CSE]",
      customLink: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1710310492/KPGU/Faculty%20Images/KSDS/Dharna-Patel.webp",
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
