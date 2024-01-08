import { Box, Typography } from '@mui/material'
import React from 'react'

function Cafeteria() {
    return (
        <Box bgcolor={"#fff"} className="smooth-shadow" borderRadius={4} overflow={"hidden"}>
            <Box>
                <img src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1704706654/KPGU/campus/Infrastructure/cafeteria.webp" alt="smart classroom " className='w-100' />
            </Box>
            <Box p={2}>
                <h3 className='color-secondary fw-bold'>Cafeteria</h3>
                <Typography variant='body1' fontSize={18} textAlign={"justify"}>
                    Right from the very first day of its inception Krishana Edu Campus has provided its students with the facility for food, where they get breakfast, lunch and all other stuff. All health oriented measures are taken here for maintaining neat and clean hygienic space for all.
                </Typography>
            </Box>
        </Box>
    )
}

export default Cafeteria