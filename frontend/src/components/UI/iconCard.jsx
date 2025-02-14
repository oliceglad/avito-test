import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HouseIcon from "@mui/icons-material/House";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";

export const IconCard = ({ type }) => {
  return type == "Авто" ? (
    <DirectionsCarIcon fontSize="large" />
  ) : type == "Услуги" ? (
    <MiscellaneousServicesIcon fontSize="large" />
  ) : (
    <HouseIcon fontSize="large" />
  );
};
