import React from 'react'
import { Box, Typography } from '@mui/material'

function HostelMess() {
    return (
        <Box bgcolor={"#fff"} className="smooth-shadow" borderRadius={4} overflow={"hidden"}>
            <Box>
                <img src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1704707713/KPGU/campus/Infrastructure/hostel-mess.jpg" alt="smart classroom " className='w-100' />
            </Box>
            <Box p={2}>
                <h3 className='color-secondary fw-bold'>Hostel Mess </h3>
                <Typography variant='body1' fontSize={18} textAlign={{
                    xs: "start",
                    sm: "justify"
                }}>
                    Hostel Mess is equipped with modern gadgets for cooking hygienic and nutritive food and Ben marry system is used to serve warm food on the dining table.
                </Typography>

            </Box>
        </Box>
    )
}

export default HostelMess