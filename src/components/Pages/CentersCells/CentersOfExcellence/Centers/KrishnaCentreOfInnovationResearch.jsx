import React, { useContext } from 'react'
import { AppContext } from '../../../../../contexts/AppContext';

import { Box, Grid } from '@mui/material';
import Quote from '../../../../Common/Quote';
import Paragraph from '../../../../Common/Paragraph';

function KrishnaCentreOfInnovationResearch() {
  const { maxWidth } = useContext(AppContext);

  const paragraphs = [
    {
      des: "To cater to the needs of genuine and innovative research in the emerging areas, Krishna Centre for Research and Innovation has been established to promote research and innovation aligned with the current societal, state, national and global problems, to ensure that India can compete in a globally competitive environment",
    },
    {
      des: "The center’s objective is to expand the expertise of pool of researchers that can contribute to knowledge base of the world in the form of research articles, books, book chapters, conference proceedings, patents and startups.",
    },
    {
      des: "To solve humanity’s biggest challenges in the field of new innovations, the center embraces multidisciplinary collaboration. The center focus is to address industrial challenges via financed initiatives or revenue-generating consulting.",
    },
    {
      des: "The strong policy framework of the Centre, guide to develop rules, procedures and guidelines for granting research support, instituting awards, and supporting all other related activities.",
    },
    {
      des: "The Centre’s focus is on preparing and regularly updating the research agenda of the University outlining the preferred focus areas and priorities of research activities to be supported. Also, the research policy is bound to implement a research quality assurance mechanism for ensuring that all research activities of the University conform to standard quality specifications.",
    },
    {
      des: "It encourages students and faculty members to participate in research, publish their work and participate in national and international conferences to present the research data and to generate new concepts in the emerging areas individually and also by collaborating with other national and foreign universities.",
    },
    {
      des: "The centre is also working to identify and establish linkages and long-term relationships with national and international research organizations for widening the scope of research opportunities and funding options available to the teachers and students of the University.",
    },
    {
      des: "Ultimately, the center’s goal is to promote researchers, industries, community and the government, all to work together to transform knowledge and innovations into sustainable advancements which can accelerate the intellectual, economic and social empowerment of the nation.",
    },

  ];

  const Director = [
    {
      name: "Name",
      image: "https://banner2.cleanpng.com/20180315/bvw/kisspng-computer-icons-clip-art-man-icon-5aab18532f4b00.7479404715211623231937.jpg",
      designation: "Dy. Director Innovation & Research",
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

export default KrishnaCentreOfInnovationResearch
