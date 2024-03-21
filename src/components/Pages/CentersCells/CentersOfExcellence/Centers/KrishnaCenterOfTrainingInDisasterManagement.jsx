import React, { useContext } from 'react'
import { AppContext } from '../../../../../contexts/AppContext';

import { Box, Grid } from '@mui/material';
import Quote from '../../../../Common/Quote';
import Paragraph from '../../../../Common/Paragraph';

function KrishnaCenterOfTrainingInDisasterManagement() {
  const { maxWidth } = useContext(AppContext);

  const paragraphs = [
    {
      des: "India and the world as a whole are prone to multiple disasters due to its diverse variability, unique and vast geo-climatic conditions and ecological & socio-economic vulnerabilities",
    },
    {
      des: "Disasters like Earthquake, Cyclone, landslides, floods, draught, tsunami, fires, mass accidents, industrial disasters etc. have been occurring and are increasing in recent times, especially the Cyclones.",
    },
    {
      des: "Disasters that may be natural or man-made ultimately take a big toll leading to large scale loss of life, destruction of infrastructure, assets, resources and services. This ultimately poses a great impact and absolute threat for sustainable development of economy. Due to this, the poorer class which is almost always worst affected by disasters, pushes them further into poverty due to losses of their livelihood and assets. The COVID epidemic, has been proving to be greater disaster and has thrown a unique challenge.",
    },
    {
      des: "During such disasters, it is the awareness and training of the citizens at large would minimize and mitigate the occurrence such episodes and reduce the impact to a very great extent. Such training sessions in disaster management as well as disaster risk reduction, needs to be conducted on a larger capacity by establishing centers of dedicated for the purpose.",
    },
    {
      des: "Keeping this social concern in mind, the university has established a dedicated Krishna Centre of Training in Disaster Management with the aim of providing relief, conducting educational and awareness programs, conduct research and training in disaster mitigation and management.",
    },
    {
      des: "The framework of Policy and functionality has been built in concurrence with National Disaster Management guidelines.",
    },
    {
      des: "The Center has laid out the plan of action with the built-in systems, structures, programs, resources, capabilities and guiding principles for training individuals for disaster management and preparing them for responding to disasters and threats of disasters in order to save lives and property, avoid disruption of economic activity and damage to environment and to ensure the continuity and sustainability of development.",
    },
    {
      des: "The center considers disaster management one of the cores of its activities and it will involve thorough study and research in anticipation of the upcoming and possible disasters and developing resources for readiness and mitigation capacity, in addition to developing systems and processes designed to provide relief and rehabilitation.",
    },

  ];

  const Director = [
    {
      name: "Name",
      image: "https://banner2.cleanpng.com/20180315/bvw/kisspng-computer-icons-clip-art-man-icon-5aab18532f4b00.7479404715211623231937.jpg",
      designation: "Dy. Director Training in Disaster Management",
      quote: "We cannot stop natural disasters but we can arm ourselves with knowledge, so many lives wouldn’t have to be lost if there was enough disaster preparedness"
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
        <h5 className='fw-bolder text-black-50 mt-2'><i>Petra Nemcova</i></h5>
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

export default KrishnaCenterOfTrainingInDisasterManagement
