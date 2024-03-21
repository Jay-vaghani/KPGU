import React, { useContext } from 'react'
import { AppContext } from '../../../../../contexts/AppContext';

import { Box, Grid } from '@mui/material';
import Quote from '../../../../Common/Quote';
import Paragraph from '../../../../Common/Paragraph';

function KrishnaCenterOfInstitutionSocialResponsibility() {
  const { maxWidth } = useContext(AppContext);

  const paragraphs = [
    {
      des: "For the purpose of serving the society and to work for the poor and underprivileged people and to encourages and promote various social welfare activities, Krishna Center of Institutional Social Responsibility (KCISR) has been established under the hood of Drs. Kiran and Pallavi Patel Global University. The KCISR proposes to create social impact through hands-on execution of the social initiatives, directly and through partnerships with individuals, institutions, NGOs, and local Government bodies for the purposes of accessing and enhancing expertise and resources to cater to the needs of social activities.",
    },
    {
      des: "KCISR Policy aims to involve and engage the employees and the students of the institutes to nurture a culture of “paying back to society” which leaves them with a sense of fulfilment of their social commitments. Our Key focus on ISR is on the areas of Environment conservation, Recycling of Wasted papers, ISR at Workplace, ISR on Community and ISR of promoting research and innovation to match the global standards of services.",
    },
    {
      des: "For the purpose of serving the society and to work for the poor and underprivileged people and to encourages and promote various social welfare activities, Krishna Center of Institutional Social Responsibility (KCISR) has been established under the hood of Drs. Kiran and Pallavi Patel Global University. The KCISR proposes to create social impact through hands-on execution of the social initiatives, directly and through partnerships with individuals, institutions, NGOs, and local Government bodies for the purposes of accessing and enhancing expertise and resources to cater to the needs of social activities.",
    },
    {
      des: "The Goal of KCSIR isto bring about a long-term sustainable change in the lives of less privileged through implementation of initiatives that have a clear societal impact and to support communities to lead purposeful, healthy & dignified lives, thereby driving “holistic empowerment” and overall well-being of the community.",
    },

  ];

  const Director = [
    {
      name: "Name",
      image: "https://banner2.cleanpng.com/20180315/bvw/kisspng-computer-icons-clip-art-man-icon-5aab18532f4b00.7479404715211623231937.jpg",
      designation: "Dy. Director Institutional Social Responsibility",
      quote: "Academic Social Responsibility is not Just about managing, reducing and avoiding risk. Its about creating Opportunity, Generating Improved Performance, and living the Risk Far Behind. So, with Social Responsibilities, let’s Join together to make the World a better place and not just take from it"
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
      <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={7} borderRadius={4} className="smooth-shadow">
        <h3 className='fw-bold color-secondary'>Main Objectives Of Krishna Center Of Institutional Social Responsibility</h3>
        <ol>
          <li className='fw-semibold color-secondary fs-5 mb-2'>To imbibe social responsibility concept among the students by imparting Knowledge and Skills for the welfare of the society.</li>
          <li className='fw-semibold color-secondary fs-5 mb-2'>To serve society by organizing various programme on Health, Hygiene, Child development activities, environment protection, Blood donation camp, gender discrimination and women empowerment Programs.</li>
          <li className='fw-semibold color-secondary fs-5 mb-2'>To promote value-based education by propagating integration of services, service-based learning and experiment-based learning into a curricular and co-curricular Programmes. This helps in promoting practical learning and problem-solving approach among students by means of direct engagement with the community.</li>
          <li className='fw-semibold color-secondary fs-5 mb-2'>To promote community-university partnerships to encourage participatory research in the field of social activities.</li>
          <li className='fw-semibold color-secondary fs-5 mb-2'>To work for welfare of the schedule caste, tribes, other backward classes, minorities, and women.</li>
        </ol>
      </Box>

    </>
  )
}

export default KrishnaCenterOfInstitutionSocialResponsibility
