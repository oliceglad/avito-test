// export const validate = (values) => {
//     const errors = {};
  
//     if (!values.type) {
//       errors.type = "Выберите категорию объявления";
//     }
  
//     if (!values.name) {
//       errors.name = "Введите название";
//     }
  
//     if (!values.description) {
//       errors.description = "Введите описание";
//     }
  
//     if (!values.location) {
//       errors.location = "Введите локацию";
//     }
  
//     // Валидация для различных категорий
//     if (values.type === "Недвижимость") {
//       if (!values.propertyType) {
//         errors.propertyType = "Введите тип недвижимости";
//       }
//       if (!values.area) {
//         errors.area = "Введите площадь";
//       } else if (isNaN(values.area)) {
//         errors.area = "Площадь должна быть числом";
//       }
//       if (!values.rooms) {
//         errors.rooms = "Введите количество комнат";
//       } else if (isNaN(values.rooms)) {
//         errors.rooms = "Количество комнат должно быть числом";
//       }
//       if (!values.price) {
//         errors.price = "Введите цену";
//       } else if (isNaN(values.price)) {
//         errors.price = "Цена должна быть числом";
//       }
//     }
  
//     if (values.type === "Авто") {
//       if (!values.brand) {
//         errors.brand = "Введите марку";
//       }
//       if (!values.model) {
//         errors.model = "Введите модель";
//       }
//       if (!values.year) {
//         errors.year = "Введите год выпуска";
//       } else if (isNaN(values.year)) {
//         errors.year = "Год выпуска должен быть числом";
//       }
//       if (!values.mileage) {
//         errors.mileage = "Введите пробег";
//       } else if (isNaN(values.mileage)) {
//         errors.mileage = "Пробег должен быть числом";
//       }
//     }
  
//     if (values.type === "Услуги") {
//       if (!values.serviceType) {
//         errors.serviceType = "Введите тип услуги";
//       }
//       if (!values.experience) {
//         errors.experience = "Введите опыт работы";
//       } else if (isNaN(values.experience)) {
//         errors.experience = "Опыт работы должен быть числом";
//       }
//       if (!values.cost) {
//         errors.cost = "Введите стоимость";
//       } else if (isNaN(values.cost)) {
//         errors.cost = "Стоимость должна быть числом";
//       }
//     }
  
//     return errors;
//   };
  