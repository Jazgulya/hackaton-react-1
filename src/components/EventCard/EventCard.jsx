import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { eventContext } from "../../contexts/eventContext";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../contexts/cartContext";
// import { cartContext } from "../../contexts/cartContext";


export default function EventCard({ item }) {
  const { deleteEvent } = React.useContext(eventContext);
  const { addTicketToCart } = React.useContext(cartContext)
  const navigate = useNavigate();

  return (
    <Card style={{ margin: "20px" }} sx={{ maxWidth: 345 }}>
      <CardHeader style={{ textAlign: "center" }} title={item.title} />
      <CardMedia
        style={{ objectFit: "fill" }}
        component="img"
        height="194"
        image={item.photo}
        alt="Photo"
      />
      <CardContent>
        <Box style={{ display: "flex" }}>
          <CalendarMonthIcon />
          <Typography variant="body2" color="text.secondary">
            {item.date}
          </Typography>
        </Box>
        <Box style={{ display: "flex" }}>
          <LocationOnIcon />
          <Typography variant="body2" color="text.secondary">
            {item.place}
          </Typography>
        </Box>
        <Box style={{ display: "flex" }}>
          <CurrencyRubleIcon />
          <Typography variant="body2" color="text.secondary">
            {item.price}
          </Typography>
        </Box>
      </CardContent>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => navigate(`/events/${item.id}`)}
          variant="contained"
          color="success"
        >
          Купить билет
        </Button>
      </Box>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton onClick={() => deleteEvent(item.id)}>
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={() => navigate(`/edit/${item.id}`)}>
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
