import React, { useContext } from 'react'
import { AppContext } from '../../../../../../contexts/AppContext';
import { Box, Grid, Typography } from '@mui/material';
import SchoolWelcomeSection from '../../../../../Common/SchoolWelcomeSection';
import DirectorsMessage from '../../../../../Common/DirectorsMessage';
import FacultyStaff from '../../../../../Common/FacultyStaff';

function KrishnaSchoolOfEmergingTechnologyAndAppliedResearch() {
  const { maxWidth } = useContext(AppContext);

  const Faculties = [
    {
      name: "Name 1",
      designation: "Assistant Professor",
      experience: 12,
      cv: "",
      qualification: "P.H.D"
    },
    {
      name: "Name 2",
      designation: "Assistant Professor",
      experience: 13,
      cv: "",
      qualification: "P.H.D"
    },
    {
      name: "Name 3",
      designation: "Assistant Professor",
      experience: 14,
      cv: "",
      qualification: "P.H.D"
    },
    {
      name: "Name 4",
      designation: "Assistant Professor",
      experience: 15,
      cv: "",
      qualification: "P.H.D"
    },
  ]

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
        <Grid container spacing={3}>
          {Faculties.map(({ name, cv, designation, experience, qualification }) => <FacultyStaff name={name} cv={cv} qualification={qualification} designation={designation} experience={experience} />)}

        </Grid>
      </Box>
    </Box>
  )
}

export default KrishnaSchoolOfEmergingTechnologyAndAppliedResearch