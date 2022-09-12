import { Typography, Box, Button } from "@mui/material";
import React from "react";
import Image from "./Image";
import Icon from "./Icon";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import PublicIcon from '@mui/icons-material/Public';
const Details = () => {
  return (
    <Box
      sx={{ backgroundColor: "#20272F", display: "flex", flexDirection: "row" }}
    >
      <div className="dev-details">
        <Typography
          variant="h5"
          component="h1"
          sx={{
            color: "#fff",
            fontFamily: "Nunito",
            marginTop: "30px",
            fontWeight: 400,
          }}
        >
          Hello, I'm
        </Typography>
        <Typography
          variant="h3"
          component="h2"
          sx={{ color: "#48CC9A", fontFamily: "Nunito", fontWeight: 600 }}
        >
          Nwosu Chimezie Justice
        </Typography>
        <Typography
          variant="h6"
          component="h6"
          sx={{
            color: "#fff",
            fontFamily: "Nunito",
            fontWeight: 300,
            marginTop: "7px",
            letterSpacing: "0.06em",
          }}
        >
          Frontend Web developer
        </Typography>
        <Typography
          variant="p"
          sx={{
            color: "#fff",
            fontFamily: "Nunito",
            fontWeight: 200,
            marginTop: "7px",
            letterSpacing: "0.06em",
          }}
          noWrap={false}
        >
          I am a frontend web developer with focus on implementing responsive
          layout and frontend functionalities for both desktop and mobile with
          REACT.JS and it's ecosystem and also a critical thinker.
        </Typography>
        <div className="contact-dev">
          <Button
            variant="outlined"
            sx={{
              fontFamily: "Nunito",
              fontWeight: 600,
              lineHeight: "27px",
              letterSpacing: "0.06em",
              color: "#48CC9A",
              borderColor: "#48CC9A",
              textAlign: "center",
              marginBottom: "5px"
            }}
          >
            Get in Touch
          </Button>
          <Typography
            variant="p"
            component="h5"
            sx={{
              fontFamily: "Nunito",
              fontWeight: 600,
              lineHeight: "27px",
              letterSpacing: "0.06em",
              color: "#fff",
            }}
          >
            FIND ME ON
          </Typography>
          <div className="icon-container">
            <Icon image={ <TwitterIcon fontSize="large"/>}/>
            <Icon image={ <GitHubIcon  fontSize="large"/>}/>
            <Icon image={ <PublicIcon fontSize="large"/>}/>

          </div>
        </div>
      </div>
      <div className="image-cont">
        <Image  />
      </div>
    </Box>
  );
};

export default Details;
