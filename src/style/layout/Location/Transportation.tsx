import { Typography, Stack, Button } from "@mui/material";
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
        <Stack key={index} alignItems="center">
          <Typography color="text.secondary" fontWeight={600}>
            {item.title}
          </Typography>
          <Typography>{item.desc}</Typography>
          {item.title === "그 외" ? (
            <Button
              variant="outlined"
              size="small"
              onClick={() => window.open("https://forms.gle/oByKDasWouMKr11b7")}
              sx={{ width: 95 }}
            >
              신청하러 가기
            </Button>
          ) : null}
        </Stack>
      ))}
    </Stack>
  );
};

export default Transportation;
