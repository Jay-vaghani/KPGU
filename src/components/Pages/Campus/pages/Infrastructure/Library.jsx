import React from 'react'
import { Box, Typography } from '@mui/material'

function Library() {
    return (
        <Box bgcolor={"#fff"} className="smooth-shadow" borderRadius={4} overflow={"hidden"}>
            <Box>
                <img src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1704706789/KPGU/campus/Infrastructure/library.jpg" alt="smart classroom " className='w-100' />
            </Box>
            <Box p={2}>
                <h3 className='color-secondary fw-bold'>Library </h3>
                <Typography variant='body1' fontSize={18} textAlign={{
                    xs: "start",
                    sm: "justify"
                }}>
                    We are the first in the state to have right from the inception Encyclopedia Britannica and Mc. Graw Hill Encyclopedia of Science & Technology. The Library also subscribes to Journals & Periodicals of Technical & General Interests. The Library also houses over 19,000 Books on various subjects ranging from Technology, Pharmacy through Management to Knowledge Resources & Personality Development.
                </Typography>
                <Typography variant='body1' fontSize={18} textAlign={{
                    xs: "start",
                    sm: "justify"
                }}>
                    The 300 Chairs placed in the Library is outcome of smallest detailing worked out in selecting ergonomic chairs for the students. Also the whole Library Management System is made fully automated where in the students uses RFID (Radio Frequency Identification System) for various functioning like book search, issue and return. We are the first in the State to launch this RFID System for various modules of Campus Management.
                </Typography>
            </Box>
        </Box>
    )
}

export default Library