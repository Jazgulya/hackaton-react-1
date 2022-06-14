import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import "react-calendar/dist/Calendar.css";

const HomePage = () => {
  const navigate = useNavigate();
  const itemData = [
    {
      img: "https://i.pinimg.com/originals/10/56/4b/10564b6e188c2e7464c65c161b75e438.gif",
      title: "Концерты",
    },
    {
      img: "https://i.pinimg.com/originals/43/3d/83/433d83f7e481f35245f8c6bb7c7591d8.gif",
      title: "Кино",
    },
    {
      img: "https://i.pinimg.com/originals/10/e0/93/10e0938774f51bc442180a6854454ac5.gif",
      title: "Детям",
    },
    {
      img: "https://c.tenor.com/Il41GOimvMsAAAAd/travel.gif",
      title: "Туризм",
    },
    {
      img: "https://static.wixstatic.com/media/7090dd_05e118671744498a9838ef8ae2b886cf~mv2.gif",
      title: "Выставки",
    },
    {
      img: "https://media3.giphy.com/media/3oz8xwpSPQ5LvJTaP6/giphy.gif",
      title: "Спорт",
    },
  ];
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
      <Typography
        style={{ margin: "20px", fontSize: "40px", fontWeight: "800px" }}>
        Покупай билеты на интересные мероприятия онлайн!
      </Typography>
      <Container>
        <CardMedia
          component="img"
          width="100%"
          height="70%"
          image="https://24wallpapers.com/app-gateway/wallpaper-uploads/wallpapers/legacyUploads/wi8082301e7c6-320f-43a1-ac94-8de2390a892a1.jpg"
          alt="green iguana"
        />
      </Container>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Концерт симфонического оркестра. Начало в 18.00.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Меcто проведения: Кыргызская государственная филармония им. Т.
          Сатылганова
        </Typography>
        <CardActions>
          <Button size="small" variant="contained" color="success">
            Купить билет
          </Button>
          <Button size="small" variant="contained" color="success">
            Подробнее
          </Button>
        </CardActions>
      </CardContent>
      <Typography variant="h5">Ближайшие мероприятия</Typography>
      <Box display={"flex"} justifyContent="space-between">
        <ImageList sx={{ width: 700, height: 250 }}>
          {itemData.map(item => (
            <ImageListItem key={item.img}>
              <img
                cursor="pointer"
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                onClick={() => navigate("/events")}
              />
              <ImageListItemBar title={item.title} position="below" />
            </ImageListItem>
          ))}
        </ImageList>
        <Calendar className="react-calendar" />
      </Box>
    </Container>
  );
};

export default HomePage;
