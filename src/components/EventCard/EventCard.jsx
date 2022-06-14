import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

const ExpandMore = styled(props => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function EventCard({ item }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      style={{ margin: "20px" }}
      sx={{ maxWidth: 300 }}
      display="flex"
      flexWrap="wrap">
      <CardHeader style={{ textAlign: "center" }} title={item.title} />
      <CardMedia
        style={{ objectFit: "fill" }}
        component="img"
        height="200"
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
        <Button variant="contained" color="success">
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
        <IconButton>
          <DeleteIcon />
        </IconButton>
        <IconButton>
          <EditIcon />
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph style={{ color: "darkblue", fontSize: "12px" }}>
            Описание:
          </Typography>
          <Typography paragraph style={{ color: "darkblue", fontSize: "12px" }}>
            Т.Абдумомунов атындагы Кыргыз улуттук академиялык драма театрында
            кечки саат 18-00дө өзбек жазуучусу жана драматургу Саид Ахмаддын
            калемине таандык «Күйөө бала» спектакли коюлат.{" "}
          </Typography>
          <Typography paragraph style={{ color: "darkblue", fontSize: "12px" }}>
            Жанры — Комедия.
          </Typography>
          <Typography paragraph style={{ color: "darkblue", fontSize: "12px" }}>
            Койгон режиссёру — Эльвира Ибрагимова{" "}
          </Typography>
          <Typography paragraph style={{ color: "darkblue", fontSize: "12px" }}>
            Сүрөтчүсү — Ю.Нурматов, КР маданиятына эмгек сиңирген ишмер
          </Typography>
          <Typography paragraph style={{ color: "darkblue", fontSize: "12px" }}>
            Музыкалаштырган — Абды Осмонов
          </Typography>
          <Typography paragraph style={{ color: "darkblue", fontSize: "12px" }}>
            Театрдын көркөм жетекчиси — Марат Козукеев, КР эмгек сиңирген
            артисти Театрдын директору — Назым Мендебаиров, КР жаштар сыйлыгынын
            ээси
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
