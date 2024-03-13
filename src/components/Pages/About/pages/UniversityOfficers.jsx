import { Box, Grid } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../../../../contexts/AppContext";

function UniversityOfficers() {
  const { maxWidth } = useContext(AppContext);

  const UniversityOfficers = [
    {
      name: "Shree Jagdishbhai D. Patel",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1703929293/KPGU/Images/Jagdishbhai_D_Patel.webp",
      designation: "Hon’ble President",
    },
    {
      name: "Smt. Kamalben J. Patel",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1703929293/KPGU/Images/Kamal_J_Patel.webp",
      designation: "Hon’ble Vice President",
    },
    {
      name: "A. B. Choudhury",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704343686/KPGU/Images/a-b-Chaudhary_2.webp",
      designation: "Hon. Provost",
    },
    {
      name: "Dr. Chirag Nagda",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1709724751/KPGU/Images/dr-chirag-nagda.webp",
      designation: "I/C Registrar",
    },
    // {
    //   name: "Dr. Manoj M. Sattigeri",
    //   img: "",
    //   designation: "Registrar",
    // },
    // {
    //   name: "Mr. Harshil V. Shah",
    //   img: "",
    //   designation: "(I/C)Chief Finance & Accounts Officer",
    // },
  ];

  const UniversityOfficersComponent = ({ name, designation, img }) => (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box
        bgcolor={"#fff"}
        className={"smooth-shadow-card"}
        borderRadius={4}
        overflow={"clip"}
      >
        <Box>
          <img src={img} alt={name} className="img-fluid" />
        </Box>
        <Box p={2}>
          <h5 className="fw-semibold">{name}</h5>
          <p className="fw-semibold" style={{ color: "#474747" }}>
            {designation}
          </p>
        </Box>
      </Box>
    </Grid>
  );

  return (
    <Box maxWidth={maxWidth} mx={"auto"} p={"5%"}>
      <h4 className=" fw-semibold color-secondary">Officers of the University</h4>
      <Grid container mt={5} spacing={2}>
        {UniversityOfficers.map(({ designation, img, name }, index) => (
          <UniversityOfficersComponent
            designation={designation}
            name={name}
            img={img}
            key={index}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default UniversityOfficers;
