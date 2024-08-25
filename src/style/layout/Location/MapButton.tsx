import { mapInfo } from "data.json";
import { Stack, Button } from "@mui/material";

const MapButton = () => {
  const { naverMap, kakaoMap } = mapInfo;

  return (
    <Stack direction="row" gap={2} width="100%" justifyContent="center">
      <Button
        variant="outlined"
        size="large"
        onClick={() => window.open(naverMap)}
      >
        네이버 지도
      </Button>
      <Button
        variant="outlined"
        size="large"
        onClick={() => window.open(kakaoMap)}
      >
        카카오 지도
      </Button>
    </Stack>
  );
};

export default MapButton;
