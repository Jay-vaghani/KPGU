import React from 'react'
import { Box, Typography } from '@mui/material'

function Auditorium() {
    return (
        <Box bgcolor={"#fff"} className="smooth-shadow" borderRadius={4} overflow={"hidden"}>
            <Box>
                <img src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1704706211/KPGU/campus/Infrastructure/auditorium.jpg" alt="smart classroom " className='w-100' />
            </Box>
            <Box p={2}>
                <h3 className='color-secondary fw-bold'>Auditorium </h3>
                <Typography variant='body1' fontSize={18} textAlign={"justify"}>
                    Krishna Edu Campus can boast of two State-of-the Art Auditorium with capacity of 200 and 180 fixed cushioned chairs respectively on a gradient floor and a raised stage with a podium. Both auditoriums are complete with multi-media facility comprising LCD Projector, Large Screen and Wi-Fi internet. There exists appropriate lighting with variable illumination. The walls are fixed with suitable surface tiles to provide echo-free acoustics.
                </Typography>

            </Box>
        </Box>
    )
}

export default Auditorium