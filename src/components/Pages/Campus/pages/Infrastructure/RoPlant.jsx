import React from 'react'
import { Box, Typography } from '@mui/material'


function RoPlant() {
    return (
        <Box bgcolor={"#fff"} className="smooth-shadow" borderRadius={4} overflow={"hidden"}>
            <Box>
                <img src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1704704463/KPGU/campus/Infrastructure/smart-cassroom.jpg" alt="smart classroom " className='w-100' />
            </Box>
            <Box p={2}>
                <h3 className='color-secondary fw-bold'>RO Plant</h3>
                <Typography variant='body1' fontSize={18} textAlign={"justify"}>
                    With view to providing hygienic clean drinking water for student, Krishna Edu Campus has installed a Reverse Osmosis Plant (RO Plant)
                </Typography>

            </Box>
        </Box>
    )
}

export default RoPlant