import { Box, Grid } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../../../../../contexts/AppContext';
import EduCard from '../../../../Common/EduCard';

function FacultyOfCommerceAndManagement() {
  const { maxWidth } = useContext(AppContext);

  const Schools = [
    {
      name: "Krishna School Of Commerce",
      des: "Krishna School of Commerce champions excellence in business education, offering a diverse curriculum and hands-on learning opportunities. With a focus on practical skills and industry relevance, we prepare students to thrive in dynamic business environments. Our goal is to cultivate future leaders equipped to drive economic growth and innovation.",
      link: "/academics/krishna-school-of-commerce",
      img: ""
    },
    {
      name: "Krishna School Of Business Management",
      des: "Krishna School of Business Management is dedicated to shaping the next generation of business leaders. Through a comprehensive curriculum and experiential learning, we empower students with the skills and knowledge needed to excel in today's competitive business landscape. Our focus is on fostering innovation, leadership, and ethical decision-making",
      link: "/academics/krishna-school-of-business-management",
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

export default FacultyOfCommerceAndManagement