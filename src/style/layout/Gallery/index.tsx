import { ItemSection } from "@/style/components";
import { Typography } from "@mui/material";
import ImageSwiper from "./ImageSwiper";

const Gallery = () => {
  return (
    <ItemSection>
      <Typography variant="h2">사진첩</Typography>
      <Typography mb={2} fontWeight={300}>
        신부 가족의 추억이 가득한 경남 사천과 진주에서 촬영하였어요. 참고로
        식장은 신랑이 가족들과 추억이 가득한 장소에요.
      </Typography>
      <ImageSwiper />
    </ItemSection>
  );
};

export default Gallery;
