import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { Stepper, Step, StepLabel, Button, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import {
  REAL_ESTATE_DATA,
  CAR_DATA,
  SERVICE_DATA,
  STEPS,
  DEFAULT_STATE,
} from "../utils/variables";
import StepOne from "../components/Form/StepOne";
import StepTwo from "../components/Form/StepTwo";
import { useAddItemMutation, useUpdateItemMutation } from "../api/items";
import { validateStep } from "../utils/validate";

export const FormPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [initialValues, setInitialValues] = useState(DEFAULT_STATE);
  const [activeStep, setActiveStep] = useState(0);
  const isEditing = location.state?.item;
  const [addItem, { isLoading, isError, error }] = useAddItemMutation();
  const [updateItem, { isLoading: loading, isError: errorUpdate, isSuccess }] =
    useUpdateItemMutation();

  useEffect(() => {
    if (isEditing) {
      setInitialValues(location.state.item);
    }
  }, []);

  const handleCategoryChange = (selectedCategory) => {
    if (selectedCategory === "Недвижимость") {
      setInitialValues(REAL_ESTATE_DATA);
    } else if (selectedCategory === "Авто") {
      setInitialValues(CAR_DATA);
    } else if (selectedCategory === "Услуги") {
      setInitialValues(SERVICE_DATA);
    }
  };

  const handleNext = (e, values) => {
    const errors = validateStep(values, activeStep);
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      setActiveStep(activeStep + 1);
    } else {
      alert("Заполните все поля!");
    }
  };

  const onSubmitHandler = async (values) => {
    const errors = validateStep(values, activeStep);

    if (Object.keys(errors).length > 0) {
      alert("Заполните все поля!");
      return;
    }

    try {
      if (isEditing) {
        await updateItem({ id: isEditing.id, updatedItem: values }).unwrap();
        navigate(`/item/${location.state.item.id}`);
        window.location.reload();
      } else {
        await addItem(values).unwrap();
        navigate("/list");
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container form_container">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmitHandler}
        enableReinitialize={isEditing}
      >
        {({ values, setFieldValue, errors, touched }) => (
          <Form>
            {isEditing && <Typography variant="h6">Редактирование</Typography>}
            <Stepper activeStep={activeStep} alternativeLabel>
              {STEPS.map((label, index) => (
                <Step key={index}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {activeStep === 0 && (
              <StepOne
                values={values}
                setFieldValue={setFieldValue}
                touched={touched}
                errors={errors}
                handleCategoryChange={handleCategoryChange}
                isEditing={isEditing}
              />
            )}

            {activeStep === 1 && (
              <StepTwo values={values} touched={touched} errors={errors} />
            )}

            <div>
              {activeStep > 0 && (
                <Button
                  variant="contained"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveStep(activeStep - 1);
                  }}
                  type="button"
                >
                  Назад
                </Button>
              )}
              {activeStep < STEPS.length - 1 ? (
                <Button
                  variant="contained"
                  type="button"
                  onClick={(e) => {
                    handleNext(e, values);
                  }}
                >
                  Далее
                </Button>
              ) : (
                <Button
                  variant="contained"
                  loading={isLoading}
                  type="submit"
                  sx={{ marginLeft: 3 }}
                >
                  Сохранить
                </Button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
