import s from "./Items.module.scss";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { ItemCard } from "./ItemCard";
import { Loader } from "../UI/loader";

export const ItemCardList = ({ items, filteredItems, isLoading, isError }) => {
  return (
    <ul>
      {items ? (
        filteredItems.length > 0 ? (
          filteredItems.map((elem, key) => <ItemCard key={key} elem={elem} />)
        ) : (
          <div>Ничего не найдено</div>
        )
      ) : isLoading ? (
        <Loader width="70px" height="70px" />
      ) : (
        isError ?? <div>Ошибка</div>
      )}
    </ul>
  );
};
