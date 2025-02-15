import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditIcon from "@mui/icons-material/Edit";
import s from "./Items.module.scss";
import { Button } from "@mui/material";

export const Item = ({ item, handlerNavigate }) => {
  return (
    <div className={s.Item}>
      <div className={s.Item_main}>
        <img
          className={s.Item_main_image}
          src={
            item.image ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7HM7XdAi4PZPX2qpQqbeiZxGKbqw_dMGXFg&s"
          }
          alt={item.name}
        />

        <Button
          variant="contained"
          onClick={() => handlerNavigate("/form")}
          sx={{ display: "block", justifyContent: "center", lineHeight: 0 }}
        >
          <EditIcon />
        </Button>
      </div>

      <div className={s.Item_info}>
        <div>
          <h2 className={s.Item_info_title}>{item.name}</h2>
          <p className={s.Item_info_desc}>{item.description}</p>
          <div>
            <LocationOnIcon />
            {item.location}
          </div>
        </div>
        {item.type === "Недвижимость" && (
          <div className={s.Item_info_added}>
            <div>{item.propertyType}</div>
            <div>
              <strong>Площадь:</strong> {`${item.area} м²`}
            </div>
            <div>
              <strong>Количество комнат:</strong> {item.rooms}
            </div>
          </div>
        )}
        {item.type === "Авто" && (
          <div className={s.Item_info_added}>
            <div>{item.brand}</div>
            <div>
              <strong>Модель:</strong> {item.model}
            </div>
            <div>
              <strong>Год выпуска:</strong> {item.year}
            </div>
            <div>
              <strong>Пробег:</strong> {`${item.mileage} км`}
            </div>
          </div>
        )}
        {item.type === "Услуги" && (
          <div className={s.Item_info_added}>
            <div>{item.serviceType}</div>
            <div>
              <strong>Опыт работы:</strong>{" "}
              {`${item.experience} лет`}
            </div>
            <div>
              <strong>График работы:</strong> {item.workSchedule}
            </div>
          </div>
        )}
      </div>
      <div className={s.Item_price}>
        {(item.price || item.cost || 0).toLocaleString()} руб.
      </div>
    </div>
  );
};
