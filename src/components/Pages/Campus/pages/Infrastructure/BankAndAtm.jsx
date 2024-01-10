import React from 'react'
import { Box, Typography } from '@mui/material'


function BankAndAtm() {
    return (
        <Box bgcolor={"#fff"} className="smooth-shadow" borderRadius={4} overflow={"hidden"}>
            <Box>
                <img src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1704708258/KPGU/campus/Infrastructure/bank-and-atm.jpg" alt="smart classroom " className='w-100' />
            </Box>
            <Box p={2}>
                <h3 className='color-secondary fw-bold'>Banking And ATM </h3>
                <Typography variant='body1' fontSize={18} textAlign={{
                    xs: "start",
                    sm: "justify"
                }}>
                    On Campus Canara bank branch with ATM facility for banking transactions for students and staff members available in the campus.
                </Typography>
            </Box>
        </Box>
    )
}

export default BankAndAtm