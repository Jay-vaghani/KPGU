import React, { useContext, useState } from 'react'
import { AppContext } from '../../../../../../contexts/AppContext';
import { Box, Grid, Tab, Typography } from '@mui/material';
import SchoolWelcomeSection from '../../../../../Common/SchoolWelcomeSection';
import DirectorsMessage from '../../../../../Common/DirectorsMessage';
import FacultyStaff from '../../../../../Common/FacultyStaff';
import Quote from '../../../../../Common/Quote';
import { TabContext, TabList, TabPanel } from '@mui/lab';


function KrishnaSchoolOfEmergingTechnologyAndAppliedResearch() {
  const { maxWidth } = useContext(AppContext);

  const Faculties = [
    {
      name: "Name",
      designation: "Assistant Professor",
      experience: 12,
      cv: "",
      qualification: "P.H.D"
    },
    {
      name: "Name",
      designation: "Assistant Professor",
      experience: 13,
      cv: "",
      qualification: "P.H.D"
    },
    {
      name: "Name",
      designation: "Assistant Professor",
      experience: 14,
      cv: "",
      qualification: "P.H.D"
    },
    {
      name: "Name",
      designation: "Assistant Professor",
      experience: 15,
      cv: "",
      qualification: "P.H.D"
    },
  ]


  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box maxWidth={maxWidth} mx={"auto"} p={"3%"}>
      <SchoolWelcomeSection
        title={"Krishna School Of Emerging Technology And Applied Research [KSET]"}
        des={"The Faculty of Engineering and Emerging Technology is in the forefront of higher technological education and basic & applied research. It has established itself as a premier center for research and industrial consultancy in the country. There are 6 academic departments equipped with 58 educational and research laboratories performing diverse functions learning in harmony. The presence of internationally recognized faculty backed by exemplary technical & supporting staff and an effective administration have all contributed to the achievements of alumni successfully established all over the world."}
      />
      <DirectorsMessage
        dirImg={"https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png"}
        dirEmail={"directoremail@gmail.com"}
        dirName={"Dr. Nitesh Sureja"}
        dirOf={"Krishna School of Emerging Technology & Applied Research"}
        dirOfShort={"[KSET]"}
        dirMessage={[
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus iure quidem cumque officia repellat sed ratione itaque, libero suscipit perspiciatis natus distinctio aspernatur vero, tenetur ipsum culpa corporis? Temporibus quae quod et quas numquam voluptas debitis cum maiores voluptatem porro. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae libero veritatis aspernatur officiis repellat dicta illo dolorum consequuntur! Sapiente, modi.",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus iure quidem cumque officia repellat sed ratione itaque, libero suscipit perspiciatis natus distinctio aspernatur vero, tenetur ipsum culpa corporis? Temporibus quae quod et quas numquam voluptas debitis cum maiores voluptatem porro. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae libero veritatis aspernatur officiis repellat dicta illo dolorum consequuntur! Sapiente, modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quas facere eligendi ex blanditiis impedit!",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus iure quidem cumque officia repellat sed ratione itaque, libero suscipit perspiciatis natus distinctio aspernatur vero, tenetur ipsum culpa corporis? Temporibus quae quod et quas numquam voluptas debitis cum maiores voluptatem porro. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae libero veritatis aspernatur officiis repellat dicta illo dolorum consequuntur! Sapiente, modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quas facere eligendi ex blanditiis impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia illum distinctio adipisci ab molestiae a magni tenetur aspernatur est totam! Quasi eveniet molestiae repudiandae a omnis est, quas iusto officiis."
        ]}
      />
      <Box mt={4} bgcolor={"#fff"} borderRadius={4} className='smooth-shadow' p={2}>
        <Box mb={4}>
          <h2 className='fw-bold color-secondary fs-1'>Faculty Members</h2>
        </Box>
        <Grid container spacing={2}>
          {Faculties.map(({ name, cv, designation, experience, qualification }, index) => <FacultyStaff name={name} cv={cv} qualification={qualification} designation={designation} experience={experience} key={index} />)}
        </Grid>
      </Box>
      <Box mt={4} bgcolor={"#fff"} borderRadius={4} className='smooth-shadow' p={2}>
        <h2 className='fw-bold color-secondary fs-1'>Vision</h2>
        <Quote quote={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur quidem molestiae ea earum iste. Explicabo asperiores dignissimos veritatis quae inventore."} right={true} />
      </Box>
      <Box mt={4} bgcolor={"#fff"} borderRadius={4} className='smooth-shadow' p={2}>
        <h2 className='fw-bold color-secondary fs-1'>Mission</h2>
        <Quote quote={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur quidem molestiae ea earum iste. Explicabo asperiores dignissimos veritatis quae inventore."} right={true} />
      </Box>
      <Box mt={4} bgcolor={"#fff"} borderRadius={4} className='smooth-shadow' p={2}>
        <TabContext value={value} >
          <TabList textColor='secondary' indicatorColor='secondary' variant='scrollable' onChange={handleChange} aria-label="lab API tabs example">
            <Tab className='fw-bold' label="deploma" value="1" />
            <Tab className='fw-bold' label="ug" value="2" />
            <Tab className='fw-bold' label="pg" value="3" />
          </TabList>
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
    </Box>
  )
}

export default KrishnaSchoolOfEmergingTechnologyAndAppliedResearch