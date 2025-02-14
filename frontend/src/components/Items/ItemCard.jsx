import s from "./Items.module.scss";

export const ItemCard = ({ elem }) => {
  return (
    <div className={s.ItemCard}>
      <div>{elem.name}</div>
    </div>
  );
};
