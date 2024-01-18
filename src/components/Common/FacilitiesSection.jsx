import React, { useContext } from 'react'
import { Box, Grid, Typography } from '@mui/material';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

// import required modules
import { EffectFade, Pagination, Autoplay, } from 'swiper/modules';
import { AppContext } from '../../contexts/AppContext';


function FacilitiesSection({ title, images, des }) {

    const { maxWidth } = useContext(AppContext);

    return (
        <>

            <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={4} className="smooth-shadow" borderRadius={4}>
                <h4 className='text-uppercase fw-bold color-secondary mb-3'>{title}</h4>
                <Grid container className='smooth-shadow-card' borderRadius={4} overflow={"hidden"}>
                    <Grid item xs={12} >
                        <Swiper
                            height={""}
                            spaceBetween={30}
                            effect={'fade'}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[EffectFade, Pagination, Autoplay]}
                            className="mySwiper"
                            loop={true}
                        >
                            {
                                images.map((img, index) =>
                                    <SwiperSlide style={{ height: "550px", background: `url(${img}) center / cover` }} key={index}>
                                    </SwiperSlide>
                                )
                            }

                        </Swiper>
                    </Grid>
                    <Grid item xs={12}>
                        <Box p={2}>
                            <Typography variant='body1' fontSize={20} fontFamily={"Nunito Sans"} textAlign={{
                                xs: "start",
                                sm: "justify"
                            }} fontWeight={700}>
                                {des}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}

export default FacilitiesSection


{
    /*
        
    */
}
