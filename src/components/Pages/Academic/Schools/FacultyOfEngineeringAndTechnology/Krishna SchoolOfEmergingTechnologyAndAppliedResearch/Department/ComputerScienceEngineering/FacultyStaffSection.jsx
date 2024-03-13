import React, { useContext } from "react";
import { AppContext } from "../../../../../../../../contexts/AppContext";
import { Box, Grid } from "@mui/material";
import FacultyStaff from "../../../../../../../Common/FacultyStaff";

function FacultyStaffSection() {
  const { maxWidth } = useContext(AppContext);

  const Faculties = [
    {
      name: "Dr. Rocky Upadhyay",
      imgNo: "9864",
      designation: "Head & Associate Professor",
      experience: 10,
      qualification: "Ph.D[CSE] || M.E[CSE] || B.E[CE]",
      customLink: "",
    },
    {
      name: "Ms. Apoorva Shah ",
      imgNo: "6010",
      designation: "Assistant Professor",
      experience: 10,
      qualification: "Ph.D[Pursuing-CSE] || M.E[CSE] || B.E[CSE]",
      customLink: "",
    },
    {
      name: "Sonia Panesar",
      imgNo: "6044",
      designation: "Assistant Professor",
      experience: 9,
      qualification: "Phd[Pursuing-CSE] || M.Tech[CE] || B.Tech[CSE]",
      customLink: "",
    },
    {
      name: "Dr. Shivam Upadhyay ",
      imgNo: "9867",
      designation: "Assistant Professor",
      experience: 10,
      qualification: "PhD[CSE] || M.tech[CSE] || B.E[IT]",
      customLink: "",
    },
    {
      name: "Mr. Tushar Desai",
      imgNo: "6038",
      designation: "Assistant Professor",
      experience: 10,
      qualification: "M.E[CSE] || B.E",
      customLink: "",
    },
    {
      name: "Ms. Jalpa Bhatt",
      imgNo: "6049",
      designation: "Assistant Professor",
      experience: 8,
      qualification: "M.E[CSE] || B.E[CE]",
      customLink: "",
    },
    {
      name: "Ms. Ankita Kothari",
      imgNo: "6021",
      designation: "Assistant Professor",
      experience: 8,
      qualification: "M.Tech[CSE] || B.E[CSE]",
      customLink: "",
    },

    
    {
      name: "Dr. Gopal Bhatt",
      imgNo: "6035",
      designation: "Assistant Professor",
      experience: 10,
      qualification: "PhD. [Applied Physics] || M.Sc[Physics] || B.Sc[Physics]",
      customLink: "",
    },
    {
      name: "Dr. Dharmendra V.Tawde",
      imgNo: "6045",
      designation: "Assistant Professor",
      experience: 12,
      qualification: "Ph.D[Physics]",
      customLink: "",
    },
    {
      name: "Ms. Jyoti Golakia",
      imgNo: "6023",
      designation: "Assistant Professor",
      experience: 4,
      qualification: "M.E[CE] || B.E[CE]",
      customLink: "",
    },
    {
      name: "Ms. Safeya Dharmajwala ",
      imgNo: "6019",
      designation: "Assistant Professor",
      experience: 10,
      qualification: "M.E || B.E[CE]",
      customLink: "",
    },
    {
      name: "Ms. Rashmika Baria",
      imgNo: "6042",
      designation: "Assistant Professor",
      experience: 5,
      qualification: "M.E[CE] || B.E[CSE]",
      customLink: "",
    },
    {
      name: "Ms. Arohi Patel",
      imgNo: "9866",
      designation: "Assistant Professor",
      experience: 3,
      qualification: "M.E[CE] || BE[CE]",
      customLink: "",
    },
    {
      name: "Ms.Manisha Makwana",
      imgNo: "9865",
      designation: "Assistant Professor",
      experience: 3,
      qualification: "M.E || B.E - COMPUTER ENGINEERING",
      customLink: "",
    },
    {
      name: "Ms. Jariwala Krishna",
      imgNo: "8899",
      designation: "Assistant Professor",
      experience: 5,
      qualification: "M.Tech[CSE] || B.E[CSE]",
      customLink:
        "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707808598/KPGU/Faculty%20Images/KSET/8899.webp",
    },

    {
      name: "Ms. Bharati Salimath",
      imgNo: "8900",
      designation: "Assistant Professor",
      experience: 20,
      qualification: "M.Tech[CSE] || B.E[CSE]",
      customLink:
        "https://res.cloudinary.com/dby2vbxv3/image/upload/v1707809046/KPGU/Faculty%20Images/KSET/8900.webp",
    },
    {
      name: "Mr. Henilkumar Suthar",
      imgNo: "8897",
      designation: "Assistant Professor",
      experience: 3,
      qualification: "PhD[Pursuing-IT] || M.Tech[IT] || B.E[IT]",
      customLink: "",
    },
    {
      name: "Ms. Harika Thokala",
      imgNo: "8901",
      designation: "Assistant Professor",
      experience: 8,
      qualification: "M.Tech[CS] || B.Tech[CSE]",
      customLink: "",
    },

    {
      name: "Ms. Vruti Parikh",
      imgNo: "0881",
      designation: "Assistant Professor",
      experience: 7,
      qualification: "M.E || B.E - COMPUTER ENGINEERING",
      customLink: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1710303061/KPGU/Faculty%20Images/KSET/0868.webp",
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
