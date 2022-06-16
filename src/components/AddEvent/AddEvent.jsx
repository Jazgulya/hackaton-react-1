import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { eventContext } from "../../contexts/eventContext";
import { useNavigate } from "react-router-dom";

const AddEvent = () => {
  //photo, title, date, price, place
  const { addEvent } = useContext(eventContext);
  const [photo, setPhoto] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [place, setPlace] = useState("");
  const navigate = useNavigate();

  function handleValues() {
    let newEvent = {
      photo,
      title,
      date,
      price,
      place,
    };
    if (
      !photo.trim() ||
      !title.trim() ||
      !date.trim() ||
      !price ||
      !place.trim()
    ) {
      alert("Заполните все поля!");
      return;
    }
    addEvent(newEvent);
    console.log(newEvent);
    navigate("/events");
  }
  return (
    <Container
      style={{
        // width: "300px",
        height: "450px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "start",
      }}
    >
      <Typography variant="h4"> Add new event</Typography>
      <TextField
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
        label="Photo"
        color="secondary"
        focused
      />
      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        label="Title"
        color="secondary"
        focused
      />
      <TextField
        value={date}
        onChange={(e) => setDate(e.target.value)}
        label="Date"
        color="secondary"
        focused
      />
      <TextField
        value={price}
        onChange={(e) => setPrice(+e.target.value)}
        label="Price"
        color="secondary"
        focused
      />
      <TextField
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        label="Place"
        color="secondary"
        focused
      />
      <Button
        onClick={handleValues}
        color="secondary"
        variant="contained"
        endIcon={<SendIcon />}
      >
        Send
      </Button>
    </Container>
  );
};

export default AddEvent;
