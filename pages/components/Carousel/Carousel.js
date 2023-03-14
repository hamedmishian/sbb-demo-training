import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography } from "@mui/material";
import { Scale } from "@mui/icons-material";

export default function Example(props) {
  var items = [
    {
      name: "Zurich",
      description: "Probably the most random thing you have ever seen!",
      image: "https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg",
    },
    {
      name: "Basel",
      description: "Hello World!",
      image:
        "https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg",
    },
    {
      name: "Lausanne",
      description: "Hello World!",
      image:
        "https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-city-900x288.jpg",
    },
  ];

  return (
    <Carousel
      animation="slide"
      height={"600px"}
      navButtonsAlwaysVisible="true"
      duration={200}
      autoPlay
      fullHeightHover="true"
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "30px",
        width: "100%",
        height: "100%",
        backgroundImage: `url(${props.item.image})`,
        backgroundRepeat: "round",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        textAlign: "center",
      }}
    >
      <div>
        <Typography
          variant="h4"
          color={"white"}
          align="center"
          px={"30px"}
          py={"30px"}
          letterSpacing={6}
        >
          {props.item.name}
        </Typography>
        <Typography variant="h6" color={"white"} align="center">
          {props.item.description}
        </Typography>

        <Button
          size="large"
          variant="contained"
          color="error"
          sx={{ marginTop: "30px" }}
        >
          Check it out!
        </Button>
      </div>
    </Paper>
  );
}
