import { Typography } from "@mui/material";

import { Suspense } from "react";

import { ItemSection, Image } from "@/components/index";
import Loader from "./Loader";

import { poster } from "@/assets/images";
import { greeting } from "data.json";

const Main = () => {
  const { title, eventDetail } = greeting;

  return (
    <Suspense fallback={<Loader />}>
      <ItemSection isCenter isFullScreen>
        <Image isSemicircle maxWidth={450} image={poster} />
        <Typography variant="h1" my={2}>
          {title}
        </Typography>
      </ItemSection>
      <Typography variant="h3" mt="-2rem">
        {eventDetail}
      </Typography>
    </Suspense>
  );
};

export default Main;
