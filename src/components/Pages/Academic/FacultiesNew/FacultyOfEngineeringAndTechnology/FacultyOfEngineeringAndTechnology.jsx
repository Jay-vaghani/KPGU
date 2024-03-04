import { Box, Grid } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../../../../../contexts/AppContext';
import EduCard from '../../../../Common/EduCard';

function FacultyOfEngineeringAndTechnology() {
  const { maxWidth } = useContext(AppContext);

  const Schools = [
    {
      name: "Krishna School Of Emerging Technology And Applied Research",
      des: "The Faculty of Engineering and Emerging Technologies leads in advanced education and research. It's renowned for its premier research and industrial consultancy services with 6 academic departments, 58 labs, and internationally recognized faculty. Alumni have excelled globally thanks to dedicated staff and effective administration.",
      link: "/academics/krishna-school-of-emerging-technology-and-applied-research",
      img: ""
    },
    {
      name: "Krishna School Of Diploma Studies",
      des: "The Krishna School of Diploma Studies offers top-notch education across various disciplines. With dedicated faculty, modern facilities, and a hands-on approach, we prepare students for success in diverse fields. Our focus on practical learning equips graduates to excel globally.",
      link: "/academics/krishna-school-of-diploma-studies",
      img: ""
    },
    {
      name: "Krishna School Of Technology",
      des: "Krishna School of Technology is renowned for its innovative programs, experienced faculty, and modern facilities. Our balanced curriculum combines theory and hands-on experience, preparing graduates to lead in the dynamic field of technology. We foster a dynamic learning environment, empowering students to innovate and excel, shaping the future of technology.",
      link: "/academics/krishna-school-of-technology",
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

export default FacultyOfEngineeringAndTechnology