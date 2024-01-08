import React from 'react'
import { Box, Typography } from '@mui/material'

function Hostels() {
    return (
        <Box bgcolor={"#fff"} className="smooth-shadow" borderRadius={4} overflow={"hidden"}>
            <Box>
                <img src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1704707352/KPGU/campus/Infrastructure/hostel.jpg" alt="smart classroom " className='w-100' />
            </Box>
            <Box p={2}>
                <h3 className='color-secondary fw-bold'>Hostels </h3>
                <Typography variant='body1' fontSize={18} textAlign={"justify"}>
                    With a key focus on developing a self-sustained residential campus, Hostel facility is provided with separate accommodation for Male and Female students, with fully furnished AC and Non AC (2 bed & 3 bed) rooms having attached bath, balcony and a common Dining Hall as well as Audio-Visual Lounge.
                </Typography>

            </Box>
        </Box>
    )
}

export default Hostels