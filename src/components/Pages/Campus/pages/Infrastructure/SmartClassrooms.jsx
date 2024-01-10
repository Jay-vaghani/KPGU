import { Box, Typography } from '@mui/material'
import React from 'react'

function SmartClassrooms() {
    return (
        <Box bgcolor={"#fff"} className="smooth-shadow" borderRadius={4} overflow={"hidden"}>
            <Box>
                <img src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1704704463/KPGU/campus/Infrastructure/smart-cassroom.jpg" alt="smart classroom " className='w-100' />
            </Box>
            <Box p={2}>
                <h3 className='color-secondary fw-bold'>ICT Enabled Smart Classrooms</h3>
                <Typography variant='body1' fontSize={18} textAlign={{
                    xs: "start",
                    sm: "justify"
                }}>
                    The Smart classrooms are equipped with latest configuration PCs with Projector and other amenities to enhance teaching-learning process. Fully Air-conditioned ICT enabled classrooms that provide an environment where leaning happens naturally.
                </Typography>
            </Box>
        </Box>
    )
}

export default SmartClassrooms