import { styled } from "@mui/material";

const StyledSwiper = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",

  ".swiper-slide": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ".swiper-pagination-bullet": {
    backgroundColor: theme.palette.text.primary,
  },
  ".swiper-pagination-bullet-active": {
    backgroundColor: theme.palette.background.default,
  },
  ".swiper-button-prev, .swiper-button-next": {
    color: theme.palette.background.default,
  },
}));

export default StyledSwiper;
