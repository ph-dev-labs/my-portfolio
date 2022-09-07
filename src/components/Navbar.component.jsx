import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, boxShadow: 10}}>
      <AppBar
        position="relative"
        sx={{
          backgroundColor: "#20272F",
          
        }}
        elevation={10}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginRight: "20px" }}
          >
            MEZIE
          </Typography>
          <div className="links-cont">
            <Link to="/" className="links">
              Home
            </Link>
            <Link to="/about" className="links">
              About us
            </Link>
            <Link to="/projects" className="links">
              Project
            </Link>
            <Link to="/services" className="links">
              Services
            </Link>
          </div>
          <div className="btn-cont">
            <Button
              variant="outlined"
              sx={{
                fontFamily: "Nunito",
                fontWeight: 600,
                lineHeight: "27px",
                letterSpacing: "0.06em",
                color: "#48CC9A",
                borderColor: "#48CC9A",
                textAlign: "center"
              }}
            >
              DOWNLOAD CV
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
