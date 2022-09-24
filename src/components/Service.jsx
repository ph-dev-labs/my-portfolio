import React from "react";
import ServiceBox from "./ServiceBox";
import { Typography, Box,  } from "@mui/material";


const Service = () => {
  return (
    <Box sx={{ backgroundColor: "#1E1E1E"}}>
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Nunito",
          fontWeight: "600",
          lineHeight: "33px",
          color: "#ffff",
          marginLeft: "57px",
          paddingTop: "35px"
        }}
      >
        My Services
      </Typography>
      <Typography
        variant="p"
        sx={{
          fontFamily: "Nunito",
          fontWeight: "700",
          fontSize: "36px",
          lineHeight: "33px",
          color: "#48CC9A",
          marginLeft: "57px",
          marginTop: "29px"
        
        }}
      >
        What I do
      </Typography>

      <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignContent: "center",}}>
        <ServiceBox />
        <ServiceBox />
        <ServiceBox />
      </Box>

    </Box>
  );
};

export default Service;
