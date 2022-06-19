import React, { useContext, useEffect } from "react";
import { eventContext } from "../../contexts/eventContext";
import { useParams } from "react-router-dom";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box, Button, Container } from "@mui/material";
import { useCart } from "react-use-cart";
import { FcLeave } from "react-icons/fc";
import Rating from "../Rating/Rating";

export default function DetailsEvent() {
  const { addItem } = useCart();
  const { getOneEvent, oneEvent } = useContext(eventContext);
  const { id } = useParams();

  useEffect(() => {
    getOneEvent(id);
  }, []);
  console.log(oneEvent);

  return oneEvent ? (
    <Container>
      <Box style={{ marginTop: "90px" }}>
        <Typography
          style={{ textAlign: "center", margin: "15px" }}
          variant="h4"
        >
          {oneEvent.title}{" "}
        </Typography>
      </Box>
      <Box>
        <FcLeave size={42} />
        {oneEvent.date}
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
        {/* </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      > */}
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
        <Button
          variant="contained"
          color="success"
          onClick={() => addItem(oneEvent)}
        >
          <AddShoppingCartIcon />
        </Button>
      </Box>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="100vh"
          image={oneEvent.photo}
          alt="Paella dish"
        />
        <Box
          style={{
            marginLeft: "30px",
          }}
        >
          <Rating />
        </Box>
      </Card>
    </Container>
  ) : (
    <h1>Loading</h1>
  );
}
