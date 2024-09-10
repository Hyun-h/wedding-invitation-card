import { ItemSection } from "@/style/components";
import { Typography } from "@mui/material";
import ImageSwiper from "./ImageSwiper";

const Gallery = () => {
  return (
    <ItemSection>
      <Typography variant="h2">사진첩</Typography>
      <Typography mb={2}>
        신부와 신부 가족의 추억이 가득한 경남 사천과 진주에서 촬영하였습니다.
        {`\n`}
        <Typography variant="caption">
          사족을 덧붙이자면 결혼식장인 성당은 신랑이 결혼 전까지 가족들과 시간을
          쌓아온 장소랍니다!
        </Typography>
      </Typography>
      <ImageSwiper />
    </ItemSection>
  );
};

export default Gallery;
