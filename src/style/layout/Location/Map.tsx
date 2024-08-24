import { useTheme, useMediaQuery } from "@mui/material";
import { mapInfo } from "data.json";

import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps";

const Map = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { lat, lon } = mapInfo;

  const navermaps = useNavermaps();

  return (
    <MapDiv
      style={{
        width: isSmallScreen ? "calc(100vw - 4rem)" : "450px",
        height: isSmallScreen ? "350px" : "450px",
      }}
    >
      <NaverMap defaultCenter={new navermaps.LatLng(lat, lon)} defaultZoom={15}>
        <Marker defaultPosition={new navermaps.LatLng(lat, lon)} />
      </NaverMap>
    </MapDiv>
  );
};

export default Map;
