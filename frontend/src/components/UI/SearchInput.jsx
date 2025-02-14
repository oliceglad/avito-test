import TextField from "@mui/material/TextField";

export const SearchInput = ({ value, onChange }) => {
  return (
    <TextField
      label="Поиск..."
      variant="standard"
      fullWidth
      value={value}
      onChange={onChange}
      sx={{ flex: 1, maxWidth: 250}}
    />
  );
};
