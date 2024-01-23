import React, { useState } from 'react'
import { TabContext, TabList } from '@mui/lab';
import { Box, ImageList, ImageListItem, Tab } from '@mui/material';

function FilterGalleryImagesWithTabs({ imagesArray, colCount }) {


    const [category, setCategory] = useState("all");

    const handleChange = (event, newValue) => {
        setCategory(newValue);
    };

    const ImgFilter = imagesArray.filter((image) => {
        if (category === "all") {
            return image
        }

        return image.category === category
    })


    return (
        <Box mt={1} mb={3} >
            <TabContext value={category}>
                <TabList onChange={handleChange} indicatorColor='secondary' aria-label="lab API tabs example" textColor='secondary' variant='scrollable' >
                    <Tab label="All" value="all" sx={{ fontWeight: 600 }} />
                    <Tab label="category 1" value="category 1" sx={{ fontWeight: 600 }} />
                    <Tab label="category 2" value="category 2" sx={{ fontWeight: 600 }} />
                    <Tab label="category 3" value="category 3" sx={{ fontWeight: 600 }} />
                    <Tab label="category 4" value="category 4" sx={{ fontWeight: 600 }} />
                </TabList>
            </TabContext>
            <Box mt={2}>
                <ImageList variant="masonry" cols={colCount} gap={10}>
                    {ImgFilter.map((item, index) => (
                        <ImageListItem key={index}>
                            <img
                                src={item.img}
                                alt={item.category}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Box>
    )
}

export default FilterGalleryImagesWithTabs