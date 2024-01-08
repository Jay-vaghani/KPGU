import { Box, Typography } from '@mui/material'
import React from 'react'

function Laboratories() {
    return (
        <Box bgcolor={"#fff"} className="smooth-shadow" borderRadius={4} overflow={"hidden"}>
            <Box>
                <img src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1704706465/KPGU/campus/Infrastructure/laboratories.webp" alt="smart classroom " className='w-100' />
            </Box>
            <Box p={2}>
                <h3 className='color-secondary fw-bold'>Well Equipped departments and laboratories</h3>
                <Typography variant='body1' fontSize={18} textAlign={"justify"}>
                    Krishna Edu Campus computing environment gives members of the community access to a rich array of technologies and information resources for academic, research, and administrative use. We have a central computing facility with High configuration computers in LAN with High Speed above 200 MBPS Internet Connectivity. The academic and administrative departments, laboratories and the central library maintain their own computing facilities. Additional facilities like Scanning, Printing (black & Color), CD & DVD Writing etc are facilitated to the students here. This Lab is consists of 4 High-speed Servers to control the Networking and share internet on the client PCs.
                </Typography>
            </Box>
        </Box>
    )
}

export default Laboratories