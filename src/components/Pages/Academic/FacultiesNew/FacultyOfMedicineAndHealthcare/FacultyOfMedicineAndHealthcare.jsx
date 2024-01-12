import { Box, Grid } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../../../../../contexts/AppContext';
import EduCard from '../../../../Common/EduCard';

function FacultyOfMedicineAndHealthcare() {
  const { maxWidth } = useContext(AppContext);

  const Schools = [
    {
      name: "Krishna School Of Pharmacy And Research",
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum eum recusandae ducimus voluptate inventore corporis aut sapiente nemo alias esse?",
      link: "/academics/krishna-school-of-pharmacy-and-research",
      img: ""
    },
    {
      name: "Krishna Ayurved Medical College",
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum eum recusandae ducimus voluptate inventore corporis aut sapiente nemo alias esse?",
      link: "/academics/krishna-ayurved-medical-college",
      img: ""
    },
    {
      name: "Krishna School Of Nursing",
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum eum recusandae ducimus voluptate inventore corporis aut sapiente nemo alias esse?",
      link: "/academics/krishna-school-of-nursing",
      img: ""
    },
    {
      name: "Krishna School Of Physiotherapy And Rehabilitation",
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum eum recusandae ducimus voluptate inventore corporis aut sapiente nemo alias esse?",
      link: "/academics/krishna-school-of-physiotherapy-and-rehabilitation",
      img: ""
    },
  ]


  return (
    <Box maxWidth={maxWidth} mx={"auto"} p={"3%"}>
      <Grid container spacing={3}>
        {Schools.map(({ des, img, link, name }, index) => <EduCard des={des} img={img} link={link} name={name} key={index} />)}

      </Grid>
    </Box>
  )
}

export default FacultyOfMedicineAndHealthcare