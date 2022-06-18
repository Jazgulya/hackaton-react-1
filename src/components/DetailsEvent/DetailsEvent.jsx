import React, { useContext, useEffect, useState } from "react";
import { eventContext } from "../../contexts/eventContext";
import { useParams } from "react-router-dom";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { Box, Button, Container } from "@mui/material";
import { cartContext } from "../../contexts/cartContext";
import { useCart } from "react-use-cart";

export default function DetailsEvent() {
  const { addItem } = useCart();
  const { getOneEvent, oneEvent } = useContext(eventContext);
  // const { addEventToCart, checkEventInCart } = useContext(cartContext);
  // const [checkEvent, setCheckEvent] = useState(checkEventInCart(oneEvent));
  console.log(oneEvent);
  const { id } = useParams();
  useEffect(() => {
    getOneEvent(id);
  }, []);
  console.log(oneEvent);

  return oneEvent ? (
    <Container>
      <Box>
        <Typography
          style={{ textAlign: "center", margin: "15px" }}
          variant="h4"
        >
          {oneEvent.title}{" "}
        </Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LocationOnIcon />
        <Typography variant="body2" color="text.secondary">
          {oneEvent.place}
        </Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CurrencyRubleIcon />
        <Typography variant="body2" color="text.secondary">
          {oneEvent.price}
        </Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <Button
          variant="contained"
          color="success"
          onClick={() => {
            addEventToCart(oneEvent);
            setCheckEvent(checkEventInCart(oneEvent));
          }}
        >
          <AddShoppingCartIcon color={checkEvent ? "secondary" : "primary"} />
        </Button> */}
        <Button
          variant="contained"
          color="success"
          onClick={() => addItem(oneEvent)}
        >
          <AddShoppingCartIcon />
        </Button>
      </Box>
      <Card sx={{ maxWidth: 345 }}>
        {/* <CardHeader title= subheader={oneEvent.date} /> */}

        <CardMedia
          component="img"
          height="80%"
          image={oneEvent.photo}
          alt="Paella dish"
        />

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Container>
  ) : (
    <h1>Loading</h1>
  );
}
