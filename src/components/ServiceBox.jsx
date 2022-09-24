import { Box, Typography } from '@mui/material'
import React from 'react'

const ServiceBox = (props) => {
  return (
    <Box sx={{width: "300px", marginTop: "35px",
        height: "200px",    
        backgroundImage: "linear-gradient(61.87deg, rgba(255, 255, 255, 0.0405) -15.65%, rgba(255, 255, 255, 0) 68.7%)",
        borderRadius: "16px"}}>
        <div>{props.icon}</div>
        <Typography variant='h6'>{props.title}</Typography>
        <Typography variant='P'>{props.info}</Typography>
    </Box>
  )
}

export default ServiceBox