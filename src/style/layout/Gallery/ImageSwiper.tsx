import { useState } from "react";

import { useTheme } from "@mui/material";

import { Image } from "@/style/components";
import { gallery } from "@/assets/images";
import StyledSwiper from "./StyledSwiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper/types";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ImageSwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  const theme = useTheme();

  return (
    <StyledSwiper theme={theme}>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {gallery.map((item, index) => (
          <SwiperSlide key={index}>
            <Image image={item} maxWidth="100%" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
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
