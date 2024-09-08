import { styled } from "@mui/material";

const StyledSwiper = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",

  ".swiper-slide": {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  ".swiper": {
    width: "100%",
    height: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },

  ".mySwiper2": {
    height: "calc(100% - 30px)",
    width: "100%",
  },

  ".mySwiper": {
    height: "30px",
    boxSizing: "border-box",
    padding: "10px 0",
  },
  ".mySwiper .swiper-slide": {
    width: "25%",
    opacity: 0.4,
  },

  ".mySwiper .swiper-slide-thumb-active": {
    opacity: 1,
  },

  ".swiper-button-prev, .swiper-button-next": {
    color: theme.palette.primary.main,
  },
}));

export default StyledSwiper;
