import React, { useContext } from "react";
import { AppContext } from "../../../../../../../../contexts/AppContext";
import { Box, Grid } from "@mui/material";
import FacultyStaff from "../../../../../../../Common/FacultyStaff";

function FacultyStaffSection() {
  const { maxWidth } = useContext(AppContext);

  const Faculties = [
    {
      name: "Komal Ketan Dave",
      imgNo: "",
      designation: "HOD[Civil Engineering] || Assistant Professor",
      experience: 17,
      qualification: "",
      customLink: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707473959/KPGU/Faculty%20Images/KSET/6024.webp",
    },
    {
      name: "Jaynika Vasava",
      imgNo: "6077",
      designation: "Lecturer",
      experience: 4,
      qualification: "",
      customLink: "",
    },
    {
      name: "Hiral U Purohit",
      imgNo: "6074",
      designation: "Assistant Professor",
      experience: 14,
      qualification: "",
      customLink: "",
    },
    {
      name: "Chirag R Shindhav",
      imgNo: "6073",
      designation: "Assistant Professor",
      experience: 15,
      qualification: "",
      customLink: "",
    },
    {
      name: "Ekta Mishra",
      imgNo: "",
      designation: "Assistant Professor",
      experience: 9,
      qualification: "M.Tech[Structural Design]",
      customLink: "https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png",
    },
    {
      name: "Snehal M Bhoi",
      imgNo: "",
      designation: "Assistant Professor",
      experience: 2,
      qualification: "M.Tech[Transportation  Engineering]",
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
