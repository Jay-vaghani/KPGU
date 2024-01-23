import React, { useContext, useEffect, useState } from 'react'
import { Box, ImageList, ImageListItem, Tab, Typography } from '@mui/material';
import { AppContext } from '../../../../../contexts/AppContext';
import { TabContext, TabList } from '@mui/lab';
import FilterTabs from './FilterGalleryImagesWithTabs';
import { RadioButtonCheckedOutlined } from '@mui/icons-material';

function Gallery() {
  const { maxWidth } = useContext(AppContext);

  const [colCount, setColCount] = useState();





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


  // const Images = [
  //   {
  //     img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-1.jpg",
  //     category: "category 1"
  //   },
  //   {
  //     img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-2.jpg",
  //     category: "category 1"
  //   },
  //   {
  //     img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-3.jpg",
  //     category: "category 1"
  //   },
  //   {
  //     img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-4.jpg",
  //     category: "category 1"
  //   },
  //   {
  //     img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-5.jpg",
  //     category: "category 1"
  //   },
  //   {
  //     img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-6.jpg",
  //     category: "category 2"
  //   },
  //   {
  //     img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-7.jpg",
  //     category: "category 2"
  //   },
  //   {
  //     img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-8.jpg",
  //     category: "category 2"
  //   },
  //   {
  //     img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-9.jpg",
  //     category: "category 1"
  //   },
  //   {
  //     img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-10.jpg",
  //     category: "category 2"
  //   },
  //   {
  //     img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-11.jpg",
  //     category: "category 2"
  //   },
  //   {
  //     img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-12.jpg",
  //     category: "category 2"
  //   },
  //   {
  //     img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-13.jpg",
  //     category: "category 2"
  //   },
  //   {
  //     img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-14.jpg",
  //     category: "category 2"
  //   },
  //   {
  //     img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-15.jpg",
  //     category: "category 3"
  //   },
  //   {
  //     img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-16.jpg",
  //     category: "category 3"
  //   },
  //   {
  //     img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-17.jpg",
  //     category: "category 3"
  //   },
  //   {
  //     img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-18.jpg",
  //     category: "category 3"
  //   },
  //   {
  //     img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-19.jpg",
  //     category: "category 3"
  //   },
  //   {
  //     img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-20.jpg",
  //     category: "category 3"
  //   },
  //   {
  //     img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-21.jpg",
  //     category: "category 3"
  //   },
  //   {
  //     img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-22.jpg",
  //     category: "category 4"
  //   },
  //   {
  //     img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-23.jpg",
  //     category: "category 4"
  //   },
  //   {
  //     img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-25.jpg",
  //     category: "category 4"
  //   },
  //   {
  //     img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-26.jpg",
  //     category: "category 4"
  //   },

  // ]


  const Images = [
    {
      year: 2023,
      categories: ["category 1", "category 2", "category 3", "category 4"],
      imagesArray: [
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-1.jpg",
          category: "category 1"
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-2.jpg",
          category: "category 2"
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-3.jpg",
          category: "category 3"
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-4.jpg",
          category: "category 4"
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
          category: "category 3"
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-8.jpg",
          category: "category 4"
        },
      ]
    },
    {
      year: 2022,
      categories: ["category 1", "category 2", "category 3", "category 4"],
      imagesArray: [
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
          category: "category 3"
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-12.jpg",
          category: "category 4"
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-13.jpg",
          category: "category 1"
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
          category: "category 4"
        },
      ]
    },
    {
      year: 2021,
      categories: ["category 1", "category 2", "category 3", "category 4"],
      imagesArray: [
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-17.jpg",
          category: "category 1"
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-18.jpg",
          category: "category 2"
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-19.jpg",
          category: "category 3"
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-20.jpg",
          category: "category 4"
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-21.jpg",
          category: "category 1"
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-22.jpg",
          category: "category 2"
        },
        {
          img: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1702986909/KPGU/Images/Gallery/gallery-23.jpg",
          category: "category 3"
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
    },
  ]




  return (

    <>

      <Box maxWidth={maxWidth} mx={"auto"} p={2} bgcolor={"#fff"} mt={4} className="smooth-shadow" borderRadius={4}>
        <h4 className='text-uppercase fw-bold color-secondary my-3'>Events & Activities</h4>

        {/*  */}

      </Box>
      <Box mt={4} bgcolor={"#fff"} maxWidth={maxWidth} mx={"auto"} p={"3%"} className="smooth-shadow" borderRadius={4}>
        {
          Images.map((element, index) => {
            return (
              <Box key={index} mt={index === 0 ? 0 : 6}>
                <h2 className='text-uppercase fw-semibold color-secondary mt-3 mb-1'>{element.year}</h2>
                <Box position={"relative"} height={"3.4px"} bgcolor={"secondary.main"}>
                  <RadioButtonCheckedOutlined color='secondary' sx={{ position: "absolute", right: -10, top: -10, zIndex: 999 }} />
                </Box>
                <FilterTabs imagesArray={element.imagesArray} colCount={colCount} />

              </Box>
            )
          })
        }
      </Box>
    </>
  )
}

export default Gallery


{/*  */ }