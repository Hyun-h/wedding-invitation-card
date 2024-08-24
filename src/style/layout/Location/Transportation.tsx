import { Typography, Stack } from "@mui/material";
import { mapInfo, locationInfo } from "data.json";

const Transportation = () => {
  return (
    <Stack width="100%" gap={2} pt={2}>
      <Stack>
        <Typography color="text.secondary" fontWeight={600}>
          주소
        </Typography>
        <Typography>{mapInfo.address1}</Typography>
        <Typography>{mapInfo.address2}</Typography>
      </Stack>
      {locationInfo.map((item, index) => (
        <div key={index}>
          <Typography color="text.secondary" fontWeight={600}>
            {item.title}
          </Typography>
          <Typography>{item.desc}</Typography>
        </div>
      ))}
    </Stack>
  );
};

export default Transportation;
