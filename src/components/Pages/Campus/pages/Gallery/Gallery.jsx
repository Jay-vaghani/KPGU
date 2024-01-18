import React, { useContext, useEffect, useState } from 'react'
import { Box, ImageList, ImageListItem, Tab } from '@mui/material';
import { AppContext } from '../../../../../contexts/AppContext';
import { TabContext, TabList } from '@mui/lab';

function Gallery() {
  const { maxWidth } = useContext(AppContext);

  const [category, setCategory] = useState("all");
  const [colCount, setColCount] = useState();

  const handleChange = (event, newValue) => {
    setCategory(newValue);
  };

  useEffect(() => {

    if (window.innerWidth < 460) {
      setColCount(1);
    }
    if (window.innerWidth < 960 && window.innerWidth > 460) {
      setColCount(2);
    }

    if (window.innerWidth < 1200 && window.innerWidth > 960) {
      console.log(window.innerWidth);

      setColCount(3);
    } if (window.innerWidth > 1200) {
      setColCount(3);
    }

  }, []);


  const Images = [
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-1.jpg",
      category: "category 1"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-2.jpg",
      category: "category 1"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-3.jpg",
      category: "category 1"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-4.jpg",
      category: "category 1"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-5.jpg",
      category: "category 1"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-6.jpg",
      category: "category 2"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-7.jpg",
      category: "category 2"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-8.jpg",
      category: "category 2"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-9.jpg",
      category: "category 1"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-10.jpg",
      category: "category 2"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-11.jpg",
      category: "category 2"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-12.jpg",
      category: "category 2"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-13.jpg",
      category: "category 2"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-14.jpg",
      category: "category 2"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-15.jpg",
      category: "category 3"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-16.jpg",
      category: "category 3"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-17.jpg",
      category: "category 3"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-18.jpg",
      category: "category 3"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-19.jpg",
      category: "category 3"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-20.jpg",
      category: "category 3"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-21.jpg",
      category: "category 3"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-22.jpg",
      category: "category 4"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-23.jpg",
      category: "category 4"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-25.jpg",
      category: "category 4"
    },
    {
      img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-26.jpg",
      category: "category 4"
    },

  ]

  const ImgFilter = Images.filter((image) => {
    if (category === "all") {
      return image
    }

    return image.category === category
  })



  return (
    <Box maxWidth={maxWidth} mx={"auto"} p={"3%"}>
      <h4 className='text-uppercase fw-bold color-secondary my-3'>Events & Activities</h4>
      <TabContext value={category}>

        <TabList onChange={handleChange} indicatorColor='secondary' aria-label="lab API tabs example" textColor='secondary' variant='scrollable' >
          <Tab label="All" value="all" sx={{ fontWeight: 600 }} />
          <Tab label="category 1" value="category 1" sx={{ fontWeight: 600 }} />
          <Tab label="category 2" value="category 2" sx={{ fontWeight: 600 }} />
          <Tab label="category 3" value="category 3" sx={{ fontWeight: 600 }} />
          <Tab label="category 4" value="category 4" sx={{ fontWeight: 600 }} />
        </TabList>
      </TabContext>
      <Box mt={4}>
        <ImageList variant="masonry" cols={colCount} gap={8}>
          {ImgFilter.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  )
}

export default Gallery