import React, { useContext } from 'react'
import { AppContext } from '../../../../../contexts/AppContext';
import { Box } from '@mui/material';

function CampusLife() {
  const { maxWidth } = useContext(AppContext);

  return (
    <Box maxWidth={maxWidth} mx={"auto"} p={"3%"}>CampusLife</Box>
  )
}

export default CampusLife