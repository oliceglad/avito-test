import { Button } from "@mui/material";
import s from "./Items.module.scss";
import { useNavigate } from "react-router-dom";
import { IconCard } from "../UI/IconCard";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const ItemCard = ({ elem }) => {
  const navigate = useNavigate();
  const clickHandler = () => navigate(`/item/${elem.id}`);

  return (
    <div className={s.ItemCard}>
      <div className={s.ItemCard_info}>
        <IconCard type={elem.type} />
        <div className={s.ItemCard_info_text}>
          <h2 className={s.ItemCard_info_text_title}>{elem.name}</h2>
          <div className={s.ItemCard_info_text_added}>{elem.type}</div>
          <div className={s.ItemCard_info_text_added}>
            <LocationOnIcon />
            {elem.location}
          </div>
        </div>
      </div>
      <Button variant="contained" onClick={() => clickHandler()} sx={{height: 40}}>
        Открыть
      </Button>
    </div>
  );
};
