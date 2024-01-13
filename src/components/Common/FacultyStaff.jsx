import { ArticleRounded, SchoolRounded, TextSnippetRounded } from '@mui/icons-material'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

function FacultyStaff({ name, designation, experience, cv, qualification }) {
    return (
        <>
            <Grid item xs={12} sm={6} md={4} lg={3} >
                <Box className="smooth-shadow-card" borderRadius={4} overflow={"hidden"}>
                    <Box>
                        <img src="https://img.lovepik.com/element/45001/3052.png_860.png" alt="faculty" className='w-100' />
                    </Box>
                    <Box p={2} >
                        <h3 className='fw-semibold color-secondary'>{name}</h3>
                        <h6 className='text-secondary fw-semibold mb-0'>{designation}</h6>
                        <h6 className='text-secondary fw-semibold mb-2'>Experience: {experience} Years</h6>
                        <Stack direction={"row"} spacing={2} color={"secondary.main"} mb={1.5}>
                            <SchoolRounded />
                            <h5 className='fw-bold mb-2'>{qualification}</h5>
                        </Stack>
                        <Button variant='contained' disableElevation color='secondary' endIcon={<TextSnippetRounded />} href={cv}>read more</Button>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default FacultyStaff