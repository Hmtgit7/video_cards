import React from 'react'
import {Box, Typography} from "@mui/material";

const Footer = () => {
  return (
      <Box sx={{ mt: 'auto', p: '0.2rem', bgcolor: '#3498DB', zIndex:1201 }}>
        <Typography sx={{ textAlign: 'center', verticalAlign: 'middle' }}>
          Made by <a style={{textDecoration: 'none',color:'black'}} target="_blank" href="https://www.github.com/Hmtgit7">Hemnat</a>
        </Typography>
      </Box>
  )
}

export default Footer