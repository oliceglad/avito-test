import React from "react";
import { Field } from "formik";
import { TextField } from "@mui/material";

const StepTwo = ({ values, touched, errors }) => {
  return (
    <div>
      {values.type === "Недвижимость" && (
        <>
          <Field
            as={TextField}
            name="propertyType"
            label="Тип недвижимости"
            fullWidth
            variant="outlined"
            margin="normal"
            error={touched.propertyType && !!errors.propertyType}
            helperText={touched.propertyType && errors.propertyType}
          />
          <Field
            as={TextField}
            name="area"
            label="Площадь (кв. м)"
            fullWidth
            type="number"
            variant="outlined"
            margin="normal"
            error={touched.area && !!errors.area}
            helperText={touched.area && errors.area}
          />
          <Field
            as={TextField}
            name="rooms"
            label="Количество комнат"
            type="number"
            fullWidth
            variant="outlined"
            margin="normal"
            error={touched.rooms && !!errors.rooms}
            helperText={touched.rooms && errors.rooms}
          />
          <Field
            as={TextField}
            name="price"
            label="Цена"
            type="number"
            fullWidth
            variant="outlined"
            margin="normal"
            error={touched.price && !!errors.price}
            helperText={touched.price && errors.price}
          />
        </>
      )}

      {values.type === "Авто" && (
        <>
          <Field
            as={TextField}
            name="brand"
            label="Марка"
            fullWidth
            variant="outlined"
            margin="normal"
            error={touched.brand && !!errors.brand}
            helperText={touched.brand && errors.brand}
          />
          <Field
            as={TextField}
            name="model"
            label="Модель"
            fullWidth
            variant="outlined"
            margin="normal"
            error={touched.model && !!errors.model}
            helperText={touched.model && errors.model}
          />
          <Field
            as={TextField}
            name="year"
            label="Год выпуска"
            type="number"
            fullWidth
            variant="outlined"
            margin="normal"
            error={touched.year && !!errors.year}
            helperText={touched.year && errors.year}
          />
          <Field
            as={TextField}
            name="mileage"
            label="Пробег (км)"
            type="number"
            fullWidth
            variant="outlined"
            margin="normal"
            error={touched.mileage && !!errors.mileage}
            helperText={touched.mileage && errors.mileage}
          />
        </>
      )}

      {values.type === "Услуги" && (
        <>
          <Field
            as={TextField}
            name="serviceType"
            label="Тип услуги"
            fullWidth
            variant="outlined"
            margin="normal"
            error={touched.serviceType && !!errors.serviceType}
            helperText={touched.serviceType && errors.serviceType}
          />
          <Field
            as={TextField}
            name="experience"
            label="Опыт работы (лет)"
            type="number"
            fullWidth
            variant="outlined"
            margin="normal"
            error={touched.experience && !!errors.experience}
            helperText={touched.experience && errors.experience}
          />
          <Field
            as={TextField}
            name="cost"
            label="Стоимость"
            type="number"
            fullWidth
            variant="outlined"
            margin="normal"
            error={touched.cost && !!errors.cost}
            helperText={touched.cost && errors.cost}
          />
           <Field
            as={TextField}
            name="workSchedule"
            label="График работы"
            fullWidth
            variant="outlined"
            margin="normal"
            error={touched.workSchedule && !!errors.workSchedule}
            helperText={touched.workSchedule && errors.workSchedule}
          />
        </>
      )}
    </div>
  );
};

export default StepTwo;
