import React from "react";
import { Box, Grid } from "@mui/material";

function ComputerLab() {
  const LabList = [
    {
      title: "Fluid Mechanics and Hydraulic Machinery",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure quo fugit doloremque aliquid blanditiis mollitia animi debitis?",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579042/KPGU/Images/Institutions/KSET/machine-learning.png",
    },
    {
      title: "Refrigeration and air conditioning",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure quo fugit doloremque aliquid blanditiis mollitia animi debitis?",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579042/KPGU/Images/Institutions/KSET/machine-learning.png",
    },
    {
      title: "Refrigeration and air conditioning",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure quo fugit doloremque aliquid blanditiis mollitia animi debitis?",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579042/KPGU/Images/Institutions/KSET/machine-learning.png",
    },
    {
      title: "Heat and Mass transfer",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure quo fugit doloremque aliquid blanditiis mollitia animi debitis?",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579042/KPGU/Images/Institutions/KSET/machine-learning.png",
    },
    {
      title: "IC Engine and Automobiles",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure quo fugit doloremque aliquid blanditiis mollitia animi debitis?",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579042/KPGU/Images/Institutions/KSET/machine-learning.png",
    },
    {
      title: "Workshop",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure quo fugit doloremque aliquid blanditiis mollitia animi debitis?",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579042/KPGU/Images/Institutions/KSET/machine-learning.png",
    },
    {
      title: "Basic Mechanical Engineering",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure quo fugit doloremque aliquid blanditiis mollitia animi debitis?",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579042/KPGU/Images/Institutions/KSET/machine-learning.png",
    },
    {
      title: "Computer Aided Design and Manufacturing",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure quo fugit doloremque aliquid blanditiis mollitia animi debitis?",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579042/KPGU/Images/Institutions/KSET/machine-learning.png",
    },
    {
      title: "Dynamics of Machinery",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure quo fugit doloremque aliquid blanditiis mollitia animi debitis?",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579042/KPGU/Images/Institutions/KSET/machine-learning.png",
    },
    {
      title: "Kinematics and Theory of Machines",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure quo fugit doloremque aliquid blanditiis mollitia animi debitis?",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579042/KPGU/Images/Institutions/KSET/machine-learning.png",
    },
    {
      title: "Manufacturing Engineering",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis maiores iure quo fugit doloremque aliquid blanditiis mollitia animi debitis?",
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1708579042/KPGU/Images/Institutions/KSET/machine-learning.png",
    },
    
  ];

  const LabListComponent = ({ title, img, des }) => (
    <Grid item xs={12} sm={6} md={6}>
      <Box
        className="smooth-shadow-card h-100"
        borderRadius={4}
        overflow={"hidden"}
      >
        <Box>
          <img src={img} alt="" className="w-100" />
        </Box>
        <Box p={2}>
          <h4 className="fw-bold color-secondary">{title}</h4>
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
        <h2 className="fw-bold color-secondary fs-1 mb-4">Machines Labs</h2>
        <Grid container spacing={4}>
          {LabList.map(({ title, img, des }, index) => (
            <LabListComponent img={img} title={title} des={des} key={index} />
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default ComputerLab;
