import s from "./Items.module.scss";
import { ItemCard } from "./ItemCard";

export const ItemCardList = ({ items, filteredItems, isLoading, isError }) => {
  return (
    <ul class>
      {items ? (
        filteredItems.length > 0 ? (
          filteredItems.map((elem, key) => <ItemCard key={key} elem={elem} />)
        ) : (
          <div>Ничего не найдено</div>
        )
      ) : isLoading ? (
        <div>Загрузка</div>
      ) : (
        isError ?? <div>Ошибка</div>
      )}
    </ul>
  );
};
