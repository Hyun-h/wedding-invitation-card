import { ItemSection, Image } from "@/components/index";
import { greeting } from "data.json";
import { Typography } from "@mui/material";
import { poster } from "@/assets/images";

const Main = () => {
  const { title, eventDetail } = greeting;

  return (
    <>
      <ItemSection isCenter isFullScreen>
        <Image isSemicircle maxWidth={450} image={poster} />
        <Typography variant="h1" my={2}>
          {title}
        </Typography>
      </ItemSection>
      <Typography variant="h3" mt="-2rem">
        {eventDetail}
      </Typography>
    </>
  );
};

export default Main;
