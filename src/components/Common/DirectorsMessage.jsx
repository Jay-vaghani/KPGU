import { Box, Button, Grid } from '@mui/material'
import React from 'react'
import Quote from './Quote'
import { MarkunreadRounded } from '@mui/icons-material'
import Paragraph from './Paragraph'

function DirectorsMessage({ dirImg, dirName, dirEmail, dirMessage, dirOf, dirOfShort }) {
    return (
        <>
            <Grid container borderRadius={4} overflow={"hidden"} className='smooth-shadow' mt={4}>
                <Grid item xs={12} md={4}>
                    <Box overflow={"hidden"} height={"100%"}>
                        <img src={dirImg} alt="Directors Image" className='w-100 h-100 object-fit-cover' />
                    </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box bgcolor={"#fff"} height={"100%"} p={2}>
                        <h2 className='fs-1 fw-semibold'>{dirName}</h2>
                        <h5 className='text-secondary fw-semibold mb-0'>Director <br /></h5>
                        <h4 className='color-secondary fw-bold'>{dirOf} <br />{dirOfShort}</h4>
                        <Button variant='contained' color='secondary' href={`mailto:${dirEmail}`} disableElevation startIcon={<MarkunreadRounded />} className='text-lowercase mt-2'>{dirEmail}</Button>
                    </Box>
                </Grid>
            </Grid>
            <Box bgcolor={"#fff"} p={2} borderRadius={4} className="smooth-shadow" mt={4}>
                <h2 className='fw-bold color-secondary mb-1'>Message From Director </h2>
                <h5 className='fw-bold color-secondary'>Welcome To KPGU</h5>
                <Box mt={4}>
                    {dirMessage.map((para, index) => <Paragraph content={para} key={index} />)}
                </Box>



            </Box>
        </>
    )
}

export default DirectorsMessage