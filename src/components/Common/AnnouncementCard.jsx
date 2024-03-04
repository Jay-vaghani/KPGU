import { CalendarMonthRounded } from '@mui/icons-material'
import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

function AnnouncementCard({ title, des, date, img }) {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Box bgcolor={"#fff"} borderRadius={4} overflow={"hidden"} className={"smooth-shadow-card"}>
                <Box>
                    <img src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1709536576/KPGU/Event%20Announcement/gibv9gx758gzpc33w47l.webp" alt="Announcements Poster" className='w-100' />
                </Box>
                <Box p={2}>
                    <h4 className='color-secondary fw-semibold'>{title}</h4>
                    <Typography variant='body1' fontSize={"19px"} color={"#5d5b5b"}  gutterBottom>
                        {des}
                    </Typography>
                    <Button variant='contained' color='secondary' disableElevation startIcon={<CalendarMonthRounded />}>{date}</Button>
                </Box>
            </Box>
        </Grid>
    )
}

export default AnnouncementCard