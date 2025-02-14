import { useParams } from "react-router-dom";

export const ItemPage = () => {
  const { itemId } = useParams();

  return (
    <div>
        ItemPage {itemId}
    </div>
  );
};