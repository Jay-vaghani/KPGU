import React from 'react'
import { Box, Typography } from '@mui/material'

function Workshop() {
    return (
        <Box bgcolor={"#fff"} className="smooth-shadow" borderRadius={4} overflow={"hidden"}>
            <Box>
                <img src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1704707193/KPGU/campus/Infrastructure/work-shop.jpg" alt="smart classroom " className='w-100' />
            </Box>
            <Box p={2}>
                <h3 className='color-secondary fw-bold'>Workshop </h3>
                <Typography variant='body1' fontSize={18} textAlign={"justify"}>
                    There is a state-of-the-art modern workshop, spread over 17500 sq. ft, which in itself is a construction marvel with two roofs spanning across the entire workshop supported only at the hinges. It houses smithy, carpentry, fitting and tool shops and is equipped with CNC engraving machine, CNC turning center with eight-station turret and simulation software, fully operational foundry, CAD/CAM facility besides other advanced gadgets, lathes & mechanical process machines.
                </Typography>

            </Box>
        </Box>
    )
}

export default Workshop