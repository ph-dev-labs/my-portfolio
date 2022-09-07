import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import ReactComponent from "../asset/IMG_6875.jpeg";

const Image = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        image={ReactComponent}
        alt="IMAGE"
      />
    </Card>
  );
};

export default Image;
