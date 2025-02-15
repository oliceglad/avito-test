import React from "react";
import { Field } from "formik";
import CategorySelect from "../UI/CategorySelect";
import { TextField } from "@mui/material";

const StepOne = ({
  values,
  setFieldValue,
  touched,
  errors,
  handleCategoryChange,
  isEditing,
}) => {
  return (
    <div>
      {!isEditing ? (
        <CategorySelect
          selectedCategory={values.type}
          setFieldValue={setFieldValue}
          handleCategoryChange={handleCategoryChange}
        />
      ) : null}
      <Field
        as={TextField}
        name="name"
        label="Название"
        fullWidth
        variant="outlined"
        margin="normal"
        error={touched.name && !!errors.name}
        helperText={touched.name && errors.name}
      />
      <Field
        as={TextField}
        name="description"
        label="Описание"
        fullWidth
        variant="outlined"
        margin="normal"
        error={touched.description && !!errors.description}
        helperText={touched.description && errors.description}
      />
      <Field
        as={TextField}
        name="location"
        label="Локация"
        fullWidth
        variant="outlined"
        margin="normal"
        error={touched.location && !!errors.location}
        helperText={touched.location && errors.location}
      />
    </div>
  );
};

export default StepOne;
