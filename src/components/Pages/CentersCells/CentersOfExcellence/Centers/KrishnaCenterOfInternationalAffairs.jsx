import React, { useContext } from 'react'
import { AppContext } from '../../../../../contexts/AppContext';

import { Box } from '@mui/material';

function KrishnaCenterOfInternationalAffairs() {
  const { maxWidth } = useContext(AppContext);

  return (
    <Box maxWidth={maxWidth} mx={"auto"} p={"3%"} bgcolor={"#fff"} mt={7} borderRadius={4} className="smooth-shadow">Section</Box>
  )
}

export default KrishnaCenterOfInternationalAffairs
