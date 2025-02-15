import { useParams, useNavigate } from "react-router-dom";
import { useGetItemByIdQuery } from "../api/items";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Item } from "../components/Items/Item";
import { Loader } from "../components/UI/Loader";

export const ItemPage = () => {
  const { id } = useParams();
  const { data: item, isLoading, isError } = useGetItemByIdQuery(id);
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="container">
        <Loader width="70px" height="70px" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container">Произошла ошибка при загрузке данных.</div>
    );
  }

  return (
    <>
      <Button
        variant="contained"
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/list")}
        sx={{ marginBottom: 2 }}
      >
        Назад
      </Button>
      <div className="container">
        <Item item={item} handlerNavigate = {navigate}/>
      </div>
    </>
  );
};
