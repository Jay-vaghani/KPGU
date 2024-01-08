import React from 'react'
import { Box, Typography } from '@mui/material'

function Playground() {
    return (
        <Box bgcolor={"#fff"} className="smooth-shadow" borderRadius={4} overflow={"hidden"}>
            <Box>
                <img src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1704708198/KPGU/campus/Infrastructure/play-ground.jpg" alt="smart classroom " className='w-100' />
            </Box>
            <Box p={2}>
                <h3 className='color-secondary fw-bold'>Playground </h3>
                <Typography variant='body1' fontSize={18} textAlign={"justify"}>
                    Sports facilities include indoor arena with provision for table-tennis, carom, chess etc. and outdoor sports ground with kits for Cricket, Volley Ball etc.
                </Typography>
            </Box>
        </Box>
    )
}

export default Playground