import React, { useContext, useEffect, useReducer, useState } from "react";
import { eventContext } from "../../contexts/eventContext";
import { useParams } from "react-router-dom";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { cartContext } from "../../contexts/cartContext";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";

import { Box, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function DetailsEvent() {
  const { getOneEvent, oneEvent } = useContext(eventContext);
  console.log(oneEvent);
  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    getOneEvent(id);
  }, []);


  function addTicketToCart(ticket) {
    // const cart = useContext(cartContext)
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let newTicket = {
      item: oneEvent.title,
      subPrice: oneEvent.price,
    };
    // localStorage.setItem("newTicket")
    let isTicketInCart = cart.products.some(
      item => item.item.id === ticket.id
    );
    if (isTicketInCart) {
      cart.tickets = cart.tickets.filter(item => item.item.id !== ticket.id);
    } else {
      cart.products.push(newTicket);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }



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
        <Button onClick={addTicketToCart} variant="contained" color="success">
          Добавить в корзину
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
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
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
};

