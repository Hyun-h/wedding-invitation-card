import { Typography } from "@mui/material";

import { Suspense } from "react";

import { ItemSection, Image } from "@/components/index";
import Loader from "./Loader";

import { poster } from "@/assets/images";
import { greeting } from "data.json";

const Main = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ItemSection isCenter isFullScreen>
        <Image isSemicircle maxWidth={450} image={poster} />
        <Typography variant="h1" my={2}>
          {greeting.title}
        </Typography>
      </ItemSection>
    </Suspense>
  );
};

export default Main;
