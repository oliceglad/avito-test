import { Box, Button } from "@mui/material";
import { CATEGORIES } from "../../utils/variables";

export const CategoryTabs = ({ value, onChange }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        my: 2,
      }}
    >
      {CATEGORIES.map((category) => (
        <Button
          key={category}
          variant={value === category ? "contained" : "outlined"}
          onClick={() => onChange(category)}
          sx={{ textTransform: "none" }}
        >
          {category}
        </Button>
      ))}
    </Box>
  );
};
