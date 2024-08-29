import { useTheme } from "@mui/material";

import { Image } from "@/style/components";
import { gallery } from "@/assets/images";
import StyledSwiper from "./StyledSwiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

const ImageSwiper = () => {
  const theme = useTheme();

  return (
    <StyledSwiper theme={theme}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {gallery.map((item, index) => (
          <SwiperSlide key={index}>
            <Image image={item} maxWidth="100%" />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSwiper>
  );
};

export default ImageSwiper;
