import { useParams } from "react-router-dom";

export const ItemPage = () => {
  const { id } = useParams();

  return (
    <div>
        ItemPage {id}
    </div>
  );
};