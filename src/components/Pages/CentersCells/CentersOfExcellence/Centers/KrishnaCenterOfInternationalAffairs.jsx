import React, { useContext } from 'react'
import { AppContext } from '../../../../../contexts/AppContext';

import { Box, Grid, Stack } from '@mui/material';
import Quote from '../../../../Common/Quote';
import Paragraph from '../../../../Common/Paragraph';

function KrishnaCenterOfInternationalAffairs() {
  const { maxWidth } = useContext(AppContext);



  const Director = [
    {
      name: "Name",
      image: "https://banner2.cleanpng.com/20180315/bvw/kisspng-computer-icons-clip-art-man-icon-5aab18532f4b00.7479404715211623231937.jpg",
      designation: "Dy. Director International Affairs",
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
        <h3 className='color-secondary fw-bold mb-4'>KRISHNA CENTER OF INTERNATIONAL AFFAIRS</h3>
        <Paragraph content={["Drs. Kiran and Pallavi Patel Global University (KPGU) have made significant strides in fostering global connectivity and understanding through the establishment of the Krishna Center of International Affairs. This center serves as a beacon for the university's commitment to cultivating relationships with nations and institutions worldwide. Through a multifaceted approach, the center actively engages in diplomatic dialogues, academic collaborations, and cultural exchanges to promote cross-cultural understanding and cooperation. By leveraging its extensive network of international partners, KPGU's Krishna Center not only facilitates academic and research collaborations but also serves as a platform for promoting socio-economic development and peace initiatives on a global scale. Through its relentless pursuit of forging meaningful connections and fostering mutual understanding, the center embodies KPGU's vision of becoming a hub for international discourse and collaboration in the ever-evolving global landscape."]} />
      </Box>
      <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={7} borderRadius={4} className="smooth-shadow">
        <h3 className='color-secondary fw-bold mb-4'>Core activities </h3>
        <Stack direction={"row"} flexWrap={"wrap"} gap={4}>
          <h5 className='mb-0 color-secondary smooth-shadow-card p-2 rounded-2 fw-semibold '>Facilitate Study India Initiative</h5>
          <h5 className='mb-0 color-secondary smooth-shadow-card p-2 rounded-2 fw-semibold '>Study Abroad Program</h5>
          <h5 className='mb-0 color-secondary smooth-shadow-card p-2 rounded-2 fw-semibold '>International Exchange and Mobility</h5>
        </Stack>
      </Box>
      <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={7} borderRadius={4} className="smooth-shadow">
        <h3 className='color-secondary fw-bold mb-4'>Objectives Of Krishna Center of International Affairs </h3>
        <ol>
          <li className='fw-semibold color-secondary fs-5 mb-2'>To coordinate all matters relating to welcoming and supporting foreign students</li>
          <li className='fw-semibold color-secondary fs-5 mb-2'>To disseminate information related to admission process among prospective foreign students.</li>
          <li className='fw-semibold color-secondary fs-5 mb-2'>To engage in promotional activities and brand building campaign abroad.</li>
          <li className='fw-semibold color-secondary fs-5 mb-2'>Single point contact for carrying out all collaborative activities with foreign institutions.</li>
          <li className='fw-semibold color-secondary fs-5 mb-2'>Act as a liaison body between the foreign students and sponsoring agency.</li>
          <li className='fw-semibold color-secondary fs-5 mb-2'>To address the grievances of foreign students in all matters.</li>
          <li className='fw-semibold color-secondary fs-5 mb-2'>Single point contact for registration with FRRO/e-FRRO.</li>
          <li className='fw-semibold color-secondary fs-5 mb-2'>To facilitate networking with fellow students.</li>
          <li className='fw-semibold color-secondary fs-5 mb-2'>To extend all possible help to the foreign students to adapt to the new cultural environment and make their stay in India comfortable and enriching.</li>
          <li className='fw-semibold color-secondary fs-5 mb-2'>To provide a platform to students and staff of KPGU to explore their research capabilities through joint research programs and with the interaction of collaborated universities.</li>
          <li className='fw-semibold color-secondary fs-5 mb-2'>To exposure the students and faculty members to global technologies in the area of advanced research, innovation& development.</li>
          <li className='fw-semibold color-secondary fs-5 mb-2'>To improve communication skills, self-esteem, creativity, and leadership ability of students, which are key attributes to nurture successful engineers, scientists and business leaders.</li>
          <li className='fw-semibold color-secondary fs-5 mb-2'>To develop the international learning environment by inviting the faculties, scientists and researcher from the various universities of India and abroad.</li>
          <li className='fw-semibold color-secondary fs-5 mb-2'>To offer long term and short terms technical and academic programs to international students at KPGU.</li>
          <li className='fw-semibold color-secondary fs-5 mb-2'>To identify and invite international companies for the placements and industrial internship.</li>
        </ol>
      </Box>
    </>
  )
}

export default KrishnaCenterOfInternationalAffairs
