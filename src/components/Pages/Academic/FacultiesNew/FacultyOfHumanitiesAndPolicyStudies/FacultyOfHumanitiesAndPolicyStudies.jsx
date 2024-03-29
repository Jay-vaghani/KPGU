import { Box, Grid } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../../../../../contexts/AppContext';
import EduCard from '../../../../Common/EduCard';
function FacultyOfHumanitiesAndPolicyStudies() {
  const { maxWidth } = useContext(AppContext);

  const Schools = [
    {
      name: "Krishna School Of Arts And Humanities",
      des: "Krishna School of Arts & Humanities (KSAH) believes in the transformative power of understanding history, present, and future through the lens of arts and humanities. By learning from past mistakes and achievements, students develop critical thinking, communication skills, and cultural understanding. KSAH, a new expansion of KPGU since 2022, fosters a broad perspective essential for navigating life's challenges and fostering meaningful connections in society.",
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