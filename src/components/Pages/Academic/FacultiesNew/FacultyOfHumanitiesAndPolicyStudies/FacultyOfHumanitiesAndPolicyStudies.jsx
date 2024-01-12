import { Box, Grid } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../../../../../contexts/AppContext';
import EduCard from '../../../../Common/EduCard';
function FacultyOfHumanitiesAndPolicyStudies() {
  const { maxWidth } = useContext(AppContext);

  const Schools = [
    {
      name: "Krishna School Of Arts And Humanities",
      des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum eum recusandae ducimus voluptate inventore corporis aut sapiente nemo alias esse?",
      link: "/academics/krishna-school-of-arts-and-humanities",
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

export default FacultyOfHumanitiesAndPolicyStudies