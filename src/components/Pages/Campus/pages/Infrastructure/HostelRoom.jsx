import React from 'react'
import { Box, Typography } from '@mui/material'

function HostelRoom() {
    return (
        <Box bgcolor={"#fff"} className="smooth-shadow" borderRadius={4} overflow={"hidden"}>
            <Box>
                <img src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1704707446/KPGU/campus/Infrastructure/hostel-room.jpg" alt="smart classroom " className='w-100' />
            </Box>
            <Box p={2}>
                <h3 className='color-secondary fw-bold'>Hostel Room </h3>
                <Typography variant='body1' fontSize={18} textAlign={{
                    xs: "start",
                    sm: "justify"
                }}>
                    Other facilities include Medical center, Direct Telephone Booth, Wi-Fi internet, Elevator, stand-by Electrical Power back-up Generator, Provision store, Laundry and Garden with Lush green Lawns. The Hostel can accommodate 450 boys and 170 girls’ students separately with hospitality that can match a 3- star Hotel.
                </Typography>

            </Box>
        </Box>
    )
}

export default HostelRoom