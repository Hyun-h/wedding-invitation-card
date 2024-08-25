import { ItemSection } from "@/style/components";
import { Typography, Stack } from "@mui/material";

import MapButton from "./MapButton";
import Transportation from "./Transportation";
import Map from "./Map";

const Location = () => {
  return (
    <ItemSection>
      <Typography variant="h2">위치 안내</Typography>

      <Stack gap={1}>
        <Map />
        <MapButton />
      </Stack>

      <Transportation />
    </ItemSection>
  );
};

export default Location;
