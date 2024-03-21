import React, { useContext } from 'react'
import { AppContext } from '../../../../../contexts/AppContext';

import { Box, Grid } from '@mui/material';
import Quote from '../../../../Common/Quote';
import Paragraph from '../../../../Common/Paragraph';

function KrishnaCenterOfCareerAdvancementCorporate() {
  const { maxWidth } = useContext(AppContext);

  const paragraphs = [
    {
      des: "As the new and innovative career and professional prospects are developing practically every day, knowing the “World of Work” is the need of hour not only to sustain in career but to grow significantly in profession.",
    },
    {
      des: "Krishna Center of Career Advancement & Corporate Training (KCCACT) is aimed to assist all university students in identifying their interests and strengths, exploring a variety of opportunities to enhance experience and clarity about their goals, and empowering them to pursue paths that are deeply relevant to them.",
    },
    {
      des: "The policy of Career advancement aims to assist students in exploring the world of employment and new career avenues, as well as assisting students in career planning through counseling, in which they acquire information about themselves in terms of their interests, aptitudes, and abilities in order to effectively select their career. It is therefore, the process of effectively correlating a candidate’s internal psychology with external variables of employability and courses, prioritizing and selecting the best option.",
    },
    {
      des: "Training provided at KCCACT are also important for corporate professionals seeking career advancement in their respective fields.",
    },
    {
      des: "The goal of KCCACT is to help students realize their full potential by educating them to refine and augment their abilities, matching them with corporate standards and bringing in corporations to choose and place them. Students can largely get benefitted from the Centre of career advancement and corporate training, because it bridges the gap between their potential and their employment opportunities in India and abroad.",
    },
    {
      des: "KCCACT has the best of in-house faculty and expert visiting faculty on its panel to provide training on functional and technical skills to develop a pool of skilled, competent, and productive professionals for contemporary India and the globe. Based on special technical and specific behavior skills needs, trainings are also provided by KCCACT to enhance the output of corporate employees working in organizations.",
    },
  ];

  const Director = [
    {
      name: "Name",
      image: "https://banner2.cleanpng.com/20180315/bvw/kisspng-computer-icons-clip-art-man-icon-5aab18532f4b00.7479404715211623231937.jpg",
      designation: "Dy. Director Career Advancement & Corporate Training",
      quote: "It is said that “No matter your industry, role, or career objectives, knowledge is power"
    }
  ]


  const DirectorComponent = ({ name, img, designation, quote, }) => (
    <Grid
      container
      maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={7} borderRadius={4} className="smooth-shadow"
      overflow={"clip"}
    >
      <Grid item bgcolor={"#fff"} xs={12} md={4}>
        <Box className="w-100 h-100 ">
          <img
            src={img}
            className="w-100 h-100 object-fit-cover rounded-4 "
            alt="photo"
          />
        </Box>
      </Grid>
      <Grid item bgcolor={"#fff"} xs={12} md={8} p={2}>
        <h3 className="display-5 fw-semibold">{name}</h3>
        <p className={`fs-4 mb-2`}>
          <b> {designation}</b>,<br />
          Drs. Kiran & Pallavi Patel Global University [KPGU, Vadodara]
        </p>
        {
          quote ?
            <Quote
              quote={quote}
              right={true}
            /> :
            ""
        }
      </Grid>
    </Grid>
  )

  return (
    <>
      <Box >
        {
          Director.map(({ designation, image, name, quote }, index) => <DirectorComponent designation={designation} img={image} name={name} quote={quote} key={index} />)
        }
      </Box>
      <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={7} borderRadius={4} className="smooth-shadow">
        {paragraphs.map(({ des }, index) => (
          <Paragraph content={[des]} key={index} />
        ))}
      </Box>

    </>
  )
}

export default KrishnaCenterOfCareerAdvancementCorporate
