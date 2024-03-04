import { Box, Grid } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../../../../../contexts/AppContext';
import EduCard from '../../../../Common/EduCard';

function FacultyOfSciences() {
  const { maxWidth } = useContext(AppContext);

  const Schools = [
    {
      name: "Krishna School Of Sciences",
      des: "Krishna School of Science empowers students to make a global impact. With expert faculty in Physics, Chemistry, Mathematics, Biotechnology, and Microbiology, we provide excellent facilities and individualized support. Our mission is to cultivate an exceptional academic experience, nurturing each student's potential to change the world.",
      link: "/academics/krishna-school-of-sciences",
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

export default FacultyOfSciences