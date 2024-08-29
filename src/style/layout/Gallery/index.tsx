import { ItemSection } from "@/style/components";
import { Typography } from "@mui/material";
import ImageSwiper from "./ImageSwiper";

const Gallery = () => {
  return (
    <ItemSection>
      <Typography variant="h2">사진첩</Typography>
      <ImageSwiper />
    </ItemSection>
  );
};

export default Gallery;
