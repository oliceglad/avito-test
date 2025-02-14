import { useNavigate } from "react-router-dom";
import s from "./Header.module.scss";
import Button from "@mui/material/Button";

export const Header = ({}) => {
  const navigate = useNavigate();
  const clickHandler = () => navigate("/form");

  return (
    <header className={s.Header}>
      <h1 className={s.Header_title}>Объявик</h1>
      <Button
        variant="contained"
        className={s.Header_button}
        onClick={() => clickHandler()}
      >
        Разместить обьявление
      </Button>
    </header>
  );
};
