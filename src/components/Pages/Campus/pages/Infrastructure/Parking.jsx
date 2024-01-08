import { Box, Typography } from '@mui/material'
import React from 'react'

function Parking() {
    return (
        <Box bgcolor={"#fff"} className="smooth-shadow" borderRadius={4} overflow={"hidden"}>
            <Box>
                <img src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1704708447/KPGU/campus/Infrastructure/parking.jpg" alt="smart classroom " className='w-100' />
            </Box>
            <Box p={2}>
                <h3 className='color-secondary fw-bold'>Parking </h3>
                <Typography variant='body1' fontSize={18} textAlign={"justify"}>
                    Available in campus spacious parking facility.
                </Typography>
            </Box>
        </Box>
    )
}

export default Parking