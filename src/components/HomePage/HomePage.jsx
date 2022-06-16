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
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HomePage = () => {
  const navigate = useNavigate();
  const itemData = [
    {
      img: "https://sxodim.com/uploads/images/2022/06/13/optimized/3b9fd5bb734c2750814e775780b190bb_800xauto-q-85.jpg",
      title: "Концерты",
    },
    {
      img: "https://sxodim.com/uploads/images/2022/06/06/optimized/31ad79b553ba963ce71707334cef9c9d_800xauto-q-85.jpg",
      title: "Кино",
    },
    {
      img: "https://sxodim.com/uploads/images/2022/02/28/optimized/192c26cadc9cd6313311af3b166e793a_800xauto-q-85.jpg",
      title: "Детям",
    },
    {
      img: "https://sxodim.com/uploads/images/2022/02/28/optimized/c027af2199d480d9aeb540c1c157dfae_800xauto-q-85.jpg",
      title: "Туризм",
    },
    {
      img: "https://sxodim.com/uploads/images/2022/06/13/optimized/eb639b8ddbe3a6a82d1a94954c6e6638_800xauto-q-85.jpg",
      title: "Выставки",
    },
    {
      img: "https://sxodim.com/uploads/images/2022/02/28/optimized/1e372064573f7e20991ff63a6859bbea_800xauto-q-85.jpg",
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
        style={{
          margin: "30px",
          fontSize: "35px",
          // fontWeight: "1800px",
          textAlign: "center",
          fontFamily: "Merriweather",
          dataAos: "zoom-in",
        }}>
        Покупай билеты на интересные мероприятия онлайн!
      </Typography>
      <Container>
        <Carousel>
          <CardMedia
            component="img"
            width="100%"
            height="100%"
            image="https://pre-party.com.ua/thumbnails/c4/c453d87c192b496b78153b64d7b87c26.jpg"
          />
          <CardMedia
            component="img"
            width="100%"
            height="100%"
            image="https://sxodim.com/uploads/posts/2022/06/06/optimized/e479bba20c8ccd507e1f52a127344979_1522x570-q-85.jpg"
          />
          <CardMedia
            component="img"
            width="100%"
            height="100%"
            image="https://sxodim.com/uploads/posts/2022/02/28/optimized/4229cb4ec93a2e549a62742ba144b1ac_1522x570-q-85.jpg"
          />
        </Carousel>
      </Container>
      <Typography variant="h5">Ближайшие мероприятия</Typography>
      <Box display={"flex"} margin={"20px"} justifyContent="space-between">
        <ImageList sx={{ width: 700, height: 350 }}>
          {itemData.map(item => (
            <ImageListItem key={item.img}>
              <img
                style={{ cursor: "pointer" }}
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
