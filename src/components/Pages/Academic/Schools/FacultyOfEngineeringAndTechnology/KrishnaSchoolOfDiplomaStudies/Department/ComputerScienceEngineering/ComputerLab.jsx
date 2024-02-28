import React from "react";
import { Box, Grid } from "@mui/material";

function ComputerLab() {
  const LabList = [
    {
      title: "Data Structure and Algorithms Lab",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure quo fugit doloremque aliquid blanditiis mollitia animi debitis?",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579042/KPGU/Images/Institutions/KSET/machine-learning.png",
    },
    {
      title: "Operating System Lab",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure quo fugit doloremque aliquid blanditiis mollitia animi debitis?",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579016/KPGU/Images/Institutions/KSET/cyber-security.webp",
    },
    {
      title: "Computer Programming Lab",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure quo fugit doloremque aliquid blanditiis mollitia animi debitis?",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708580600/KPGU/Images/Institutions/KSET/methodologies-and-testing.webp",
    },
    {
      title: "Database Management System Lab",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure quo fugit doloremque aliquid blanditiis mollitia animi debitis?",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708580600/KPGU/Images/Institutions/KSET/methodologies-and-testing.webp",
    },
    {
      title: "Advance Software Design and Development Lab",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure quo fugit doloremque aliquid blanditiis mollitia animi debitis?",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708580600/KPGU/Images/Institutions/KSET/methodologies-and-testing.webp",
    },
    {
      title: "System Programming Lab",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure quo fugit doloremque aliquid blanditiis mollitia animi debitis?",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708580600/KPGU/Images/Institutions/KSET/methodologies-and-testing.webp",
    },
    {
      title: "Internet of Things Lab",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure quo fugit doloremque aliquid blanditiis mollitia animi debitis?",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708580600/KPGU/Images/Institutions/KSET/methodologies-and-testing.webp",
    },
    {
      title: "Wireless & Mobile Computing Lab",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure quo fugit doloremque aliquid blanditiis mollitia animi debitis?",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708580600/KPGU/Images/Institutions/KSET/methodologies-and-testing.webp",
    },
    {
      title: "Computer Graphics Lab",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure quo fugit doloremque aliquid blanditiis mollitia animi debitis?",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708580600/KPGU/Images/Institutions/KSET/methodologies-and-testing.webp",
    },
  ];

  const LabListComponent = ({ title, img, des }) => (
    <Grid item xs={12} sm={6} md={4}>
      <Box
        className="smooth-shadow-card h-100"
        borderRadius={4}
        overflow={"hidden"}
      >
        <Box>
          <img src={img} alt="" className="w-100" />
        </Box>
        <Box p={2}>
          <h5 className="fw-bold color-secondary">{title}</h5>
          <Box letterSpacing={0.2}>
            <h6 className="text-secondary  ">{des}</h6>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
  return (
    <>
      <Box borderRadius={4}>
        <h2 className="fw-bold color-secondary fs-1 mb-4">
        Computer Labs
        </h2>
        <Grid container spacing={2}>
          {LabList.map(({ title, img, des }, index) => (
            <LabListComponent
              img={img}
              title={title}
              des={des}
              key={index}
            />
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default ComputerLab;
