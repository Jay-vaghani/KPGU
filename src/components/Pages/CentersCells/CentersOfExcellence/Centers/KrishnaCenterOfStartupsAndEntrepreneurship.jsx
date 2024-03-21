import React, { useContext } from 'react'
import { AppContext } from '../../../../../contexts/AppContext';

import { Box, Grid } from '@mui/material';
import Quote from '../../../../Common/Quote';
import Paragraph from '../../../../Common/Paragraph';

function KrishnaCenterOfStartupsAndEntrepreneurship() {
  const { maxWidth } = useContext(AppContext);

  const paragraphs = [
    {
      des: "These four steps will lead our country towards faster development and prosperity.",
    },
    {
      des: "The Krishna centre of Excellence in Startup and entrepreneurship is dedicated to support and fulfill the dreams of enthusiastic innovators to become successful entrepreneurs and also to contribute in the mission to step ahead in the direction of Aatmnirbhar Bharat.",
    },
    {
      des: "Traditionally, Gujarat is known for the entrepreneurial spirit of its people and to hone this skill amongst the youth, the state needs to explore scientific and technology ecosystems through start-ups and supporting incubators to further empower the youth.",
    },
    {
      des: "In order to achieve the cultural and attitudinal shift and to ensure that Innovation and startup culture is the primary fulcrum of our higher education, the Krishna centre of excellence in startup and entrepreneurship has implemented a policy framework and guidelines for supporting innovators. These guidelines help institutions to actively support their faculty, staff and students to participate in innovation and entrepreneurship related activities, thus encouraging the innovators to develop their innovative projects into sustainable startups that can bring self dependence and prosperity.",
    },
    {
      des: "The goal of Krishna Centre of Excellence in startup and Entrepreneurship is creation of a vibrant start-up culture where ideas materialize into products, entrepreneurs are mentored, businesses are incubated and product or process innovation is facilitated to become business of global scale to contribute to economic prosperity of the state and for generation of employment.",
    },
    {
      des: "The policy of the centre encourages the creation of innovation pipelines and pathways for entrepreneurs at institute level by sufficient resource mobilization and utilization of pre-incubation and incubation facilities for nurturing innovations and startups of students, staff and faculty members.",
    },
    {
      des: "Another major function of the centre is registration of IPR and licensing of IPR from institute to startup students and faculty to consider start ups and entrepreneurship as a career option.",
    },
    {
      des: "Promotion and development of Entrepreneurship is one of the major dimensions of the University strategy and is implemented through institutional programs such as conferences, workshops, mentoring sessions, Hackathons etc.",
    },
    {
      des: "The accomplishment of the Product to market strategy for startups through the development of entrepreneurship culture is not only limited within the boundaries of the institution as the strategy is well supported through collaboration with Government agencies and industries.",
    },

  ];

  const Director = [
    {
      name: "Dr. Prachi Pandey",
      image: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1710996908/KPGU/CenterOfExcellence/dr-prachi-pandey.webp",
      designation: "Dy. Director Startups & Entrepreneurship",
      quote: "Innovation and Startup success Mantra of Nation given by Prime Minister Narendra Modi is “IPPP”: “Innovate, Patent, Produce and Prosper"
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

export default KrishnaCenterOfStartupsAndEntrepreneurship
