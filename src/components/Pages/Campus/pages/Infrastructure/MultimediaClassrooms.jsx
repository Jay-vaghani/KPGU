import { Box, Typography } from '@mui/material'
import React from 'react'

function MultimediaClassrooms() {
    return (
        <Box bgcolor={"#fff"} className="smooth-shadow" borderRadius={4} overflow={"hidden"}>
            <Box>
                <img src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1704704463/KPGU/campus/Infrastructure/smart-cassroom.jpg" alt="smart classroom " className='w-100' />
            </Box>
            <Box p={2}>
                <h3 className='color-secondary fw-bold'>Multimedia enabled Specious classrooms</h3>
                <Typography variant='body1' fontSize={18} textAlign={"justify"}>
                    The classrooms have been designed exploiting Natural Elements like wind, daylight & positioning with sun diagram. This adds to not only the ambience but also the functionality of the purpose. The chairs in the classrooms are ergonomically designed to make the students stay for the day comfortable & relaxed. Care is also taken in the smallest details such as maintaining roominess by optimizing length & breadth ratio and eliminating the generation of echoes. All the classrooms are ready with Audio-Visual (Multimedia) Facilities.
                </Typography>
            </Box>
        </Box>
    )
}

export default MultimediaClassrooms