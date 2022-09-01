import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/material/Icon";

export const Navbar = () => {
  return (
    <div>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#20272F",
          height: "100px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "space-evenly",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            MEZIE
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, mr: 30 }}>
            <Link className="links" to="/">
              Home
            </Link>
            <Link className="links" to="/projects">
              Projects
            </Link>
            <Link className="links" to="/about">
              About me{" "}
            </Link>
            <Link className="links" to="/services">
              {" "}
              service
            </Link>
          </Box>
          <Button
            variant="outlined"
            size="large"
            sx={{
              mr: 5,
              fontWeight: 400,
              color: "#48CC9A",
              fontSize: "15px",
              lineHeight: "27px",
              letterSpacing: "0.06em",
              border: "1px solid #48CC9A"
            }}
          >
            Download CV
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
