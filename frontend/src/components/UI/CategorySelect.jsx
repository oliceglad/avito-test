import React from "react";
import { Field } from "formik";
import { MenuItem, TextField } from "@mui/material";

const CategorySelect = ({ selectedCategory, setFieldValue, handleCategoryChange }) => (
  <Field
    as={TextField}
    select
    name="type"
    label="Категория объявления"
    fullWidth
    variant="outlined"
    margin="normal"
    value={selectedCategory}
    onChange={(e) => {
      const selectedCategory = e.target.value;
      handleCategoryChange(e);
      setFieldValue("type", selectedCategory);
    }}
  >
    <MenuItem value="Недвижимость">Недвижимость</MenuItem>
    <MenuItem value="Авто">Авто</MenuItem>
    <MenuItem value="Услуги">Услуги</MenuItem>
  </Field>
);

export default CategorySelect;
