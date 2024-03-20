import React, { useContext } from 'react'
import { Box, Button, Grid, Stack } from '@mui/material';
import { AppContext } from '../../../../contexts/AppContext';
import { KeyboardDoubleArrowRightRounded } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function CentersOfExcellence() {
    const { maxWidth } = useContext(AppContext);
    const navigate = useNavigate()

    const ListOfCenters = [
        {
            center: "Krishna Centre of Innovation Research",
            des: "Krishna Centre for Research and Innovation fosters cutting-edge research aligned with societal, national, and global issues, aiming to enhance India's competitiveness. It promotes interdisciplinary collaboration, provides funding, and ensures quality standards.",
            link: "/centers-cells/krishna-centre-of-innovation-research",
        },
        {
            center: "Krishna Center of Institutional Social Responsibility",
            des: "Krishna Center of Institutional Social Responsibility (KCISR), part of Drs. Kiran and Pallavi Patel Global University, focuses on social welfare initiatives. It engages students and employees, emphasizing areas like environment, community, and research-driven solutions for societal advancement.",
            link: "/centers-cells/krishna-center-of-institution-social-responsibility",
        },
        {
            center: "Krishna Center of International Affairs",
            des: "Drs. Kiran and Pallavi Patel Global University established Krishna Center of International Affairs (KCIA) to foster global connections. Its objectives include facilitating student exchanges, supporting foreign students, promoting collaborations, and enhancing research and learning opportunities.",
            link: "/centers-cells/krishna-center-of-international-affairs",
        },
        {
            center: "Krishna Center of Career Advancement Corporate Training",
            des: "Krishna Center of Career Advancement & Corporate Training (KCCACT) aids students in exploring career options and provides counseling and training to align their skills with industry needs, fostering career growth and professional development.",
            link: "/centers-cells/",
        },
        {
            center: "Krishna Center of Startups and Entrepreneurship",
            des: "Krishna Centre of Excellence in Startup and Entrepreneurship fosters innovation and entrepreneurship, providing support to aspiring entrepreneurs. Through policy frameworks and collaboration, it aims to create a vibrant startup ecosystem, contributing to economic growth and job creation.",
            link: "/centers-cells/krishna-center-of-startups-and-entrepreneurship",
        },
        {
            center: "Krishna Center of Training in Disaster Management",
            des: "The Krishna Centre of Training in Disaster Management addresses the increasing frequency of natural and man-made disasters, aiming to minimize their impact through awareness, education, and research aligned with national guidelines.",
            link: "/centers-cells/krishna-center-of-training-in-disaster-management",
        },
    ]

    const ListOfCentersComponent = ({ center, des, link }) => (
        <Grid item xs={12} sm={6} md={4}>
            <Box className="smooth-shadow-card h-100" borderRadius={4} overflow={"hidden"} p={2} position={"relative"}>
                <h4 className="fw-bold color-secondary">{center}</h4>
                <h6 className='mb-5 fw-bold text-secondary'>{des}</h6>

                <Stack position={"absolute"} bottom={16}>
                    <Button variant='contained' color='secondary' endIcon={<KeyboardDoubleArrowRightRounded />} onClick={() => navigate(link)}>view more</Button>
                </Stack>
            </Box>
        </Grid>
    )

    return (
        <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={7} borderRadius={4} className="smooth-shadow">
            <Grid container spacing={4}>
                {
                    ListOfCenters.map(({ center, des, link }, index) => <ListOfCentersComponent center={center} des={des} link={link} key={index} />)
                }
            </Grid>
        </Box>
    )
}

export default CentersOfExcellence

