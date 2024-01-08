import React from 'react'
import { Box, Typography } from '@mui/material'

function StationaryStall() {
    return (
        <Box bgcolor={"#fff"} className="smooth-shadow" borderRadius={4} overflow={"hidden"}>
            <Box>
                <img src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1704704463/KPGU/campus/Infrastructure/smart-cassroom.jpg" alt="smart classroom " className='w-100' />
            </Box>
            <Box p={2}>
                <h3 className='color-secondary fw-bold'>Stationary Stall </h3>
                <Typography variant='body1' fontSize={18} textAlign={"justify"}>
                    We at Krishna Edu Campus provide our students with the in house facility for Xerox and various stationery items. This stall is equipped with all the facilities like Binding, Laminating, and Spiral Binding etc. Also we provide our students with our own printed materials like drawing sheets, workshop book, journals, etc. There is also a Telephone booth here for all.
                </Typography>

            </Box>
        </Box>
    )
}

export default StationaryStall