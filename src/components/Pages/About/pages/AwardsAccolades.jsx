import React, { useContext } from 'react'
import { AppContext } from '../../../../contexts/AppContext';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { MilitaryTechRounded } from '@mui/icons-material';

function AwardsAccolades() {
    const { maxWidth } = useContext(AppContext);

    const PresidentAwards = [
        {
            des: "Conferred with “Corona Yodha 2020” by Collector and District Magistrate, Vadodara"
        },
        {
            des: "Education Leadership Award 2019” by Dewang Mehta National Education Awards"
        },
        {
            des: "Leadership In Higher Education Award 2018 organized by Higher Education Forum- Gujarat Chapter, Vadodara"
        },
        {
            des: "Samaj Ratna Award by Shree Dhandhuka Taluka Patel Pragati Mandal, Surat-2014"
        },
        {
            des: "True Impact Award 2016, by District CSR Cell, Federation of Gujarat Industries."
        },
        {
            des: "Global Education Excellence Award – 2016, New Delhi."
        },
        {
            des: "Campus Preparedness Award – 2015 by Higher Education Forum, Pune."
        },
        {
            des: "Indira Gandhi Shiksha Shiromani Award – 2013, From IIEM New Delhi, For ‘Outstanding Achievements in the Field of Education’."
        },
        {
            des: "Education Excellence Award – 2012, New Delhi for ‘Best Engineering College in Gujarat State’."
        },
        {
            des: "Shiksha Bharti Award – 2010, New Delhi for ‘Challenges of Economic Growth and Social Development."
        },
        {
            des: "Samaj Gaurav Award by Shree Sourashtra Leuva Patel Seva Samaj, Vadodara."
        },
    ]

    const PresidentAwardsComponent = ({ des }) => (
        <Stack direction={"row"} alignItems={"start"} spacing={1} mt={4}>
            <Typography color={"secondary"} variant='h4'>
                <MilitaryTechRounded fontSize='inherit' />
            </Typography>
            <Typography color={"secondary"} variant='h4' fontSize={"22px"}>
                {des}
            </Typography>
        </Stack>
    )

    return (
        <Box
            maxWidth={maxWidth}
            mx={"auto"}
            p={"3%"}
            mt={5}
            borderRadius={4}
        >
            <h4 className=" fw-semibold color-secondary">AWARDS AND ACHIEVEMENTS</h4>
            <Grid container mt={10} overflow={"clip"} borderRadius={4} className={"smooth-shadow"} bgcolor={"#fff"}>
                <Grid item xs={12}  >
                    <img src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1703929293/KPGU/Images/Jagdishbhai_D_Patel.webp" alt="Jagdishbhai D Patel" className='img-fluid' />
                </Grid>
                <Grid item xs={12} p={2}>
                    <h2 className='fw-semibold'>Our President Shree Jagdishbhai D Patel has been conferred with</h2>
                    <Box pl={2}>
                        {PresidentAwards.map(({ des }, index) => < PresidentAwardsComponent des={des} key={index} />)}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AwardsAccolades