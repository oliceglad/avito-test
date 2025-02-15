export const validateStep = (values, step) => {
    let errors = {};
  
    if (step === 0) {
      if (!values.name) errors.name = "Введите название";
      if (!values.description) errors.description = "Введите описание";
      if (!values.location) errors.location = "Введите локацию";
      if (!values.type) errors.type = "Выберите категорию";
    }
  
    if (step === 1) {
      if (values.type === "Недвижимость") {
        if (!values.propertyType) errors.propertyType = "Выберите тип недвижимости";
        if (!values.area) errors.area = "Введите площадь";
        if (!values.rooms) errors.rooms = "Введите количество комнат";
        if (!values.price) errors.price = "Введите цену";
      }
  
      if (values.type === "Авто") {
        if (!values.brand) errors.brand = "Введите марку";
        if (!values.model) errors.model = "Введите модель";
        if (!values.year) errors.year = "Введите год выпуска";
        if (!values.mileage) errors.mileage = "Введите пробег";
      }
  
      if (values.type === "Услуги") {
        if (!values.serviceType) errors.serviceType = "Введите тип услуги";
        if (!values.experience) errors.experience = "Введите опыт работы";
        if (!values.cost) errors.cost = "Введите стоимость";
        if (!values.workSchedule) errors.workSchedule = "Введите график работы";
      }
    }
  
    return errors;
  };
  