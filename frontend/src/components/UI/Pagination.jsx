import { Button } from "@mui/material";

export const Pagination = ({ page, totalPages, onPageChange }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
        gap: 10
      }}
    >
      <Button
        variant="contained"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
      >
        Назад
      </Button>
      <span>
        Страница {page} из {totalPages}
      </span>
      <Button
        variant="contained"
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
      >
        Вперед
      </Button>
    </div>
  );
};
