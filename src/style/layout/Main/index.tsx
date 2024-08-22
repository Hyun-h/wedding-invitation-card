import { ItemSection, Image } from "@/components/index";
import { greeting } from "data.json";
import { Typography } from "@mui/material";
import { poster } from "@/assets/images";

const Main = () => {
  const { title, eventDetail } = greeting;

  return (
    <ItemSection isCenter isFullScreen>
      <Image isSemicircle maxWidth={450} image={poster} />
      <Typography variant="h1" my={4}>
        {title}
      </Typography>
      <Typography variant="h2">{eventDetail}</Typography>
    </ItemSection>
  );
};

export default Main;
