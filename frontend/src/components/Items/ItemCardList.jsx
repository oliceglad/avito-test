import s from "./Items.module.scss";
import { ItemCard } from "./ItemCard";
import { Loader } from "../UI/Loader";

export const ItemCardList = ({ items, isLoading, isError }) => {
  if (isLoading) return <div className={s.ItemCardContainer}><Loader width="70px" height="70px" /></div>;
  if (isError) return <div className={s.ItemCardContainer}>Ошибка загрузки</div>;
  if (!items || items.length === 0) return <div className={s.ItemCardContainer}>Ничего не найдено</div>;

  return (
    <ul className={s.ItemCardContainer}>
      {items.map((elem) => (
        <ItemCard key={elem.id} elem={elem} />
      ))}
    </ul>
  );
};
