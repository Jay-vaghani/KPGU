import { Typography } from '@mui/material'
import React from 'react'

function SchoolWelcomeSection({ title, des }) {
    return (
        <>
            <h2 className='color-secondary fw-bold'>Welcome To {title}</h2>
            <Typography variant='body1' fontWeight={600} fontSize={"18px"} fontFamily={"Nunito Sans"}>
                {des}
            </Typography>
        </>
    )
}

export default SchoolWelcomeSection