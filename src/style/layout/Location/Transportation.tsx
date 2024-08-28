import { Typography, Stack, Button } from "@mui/material";
import { locationInfo } from "data.json";

const Transportation = () => {
  return (
    <Stack width="100%" gap={2} pt={2}>
      {locationInfo.map((item, index) => (
        <Stack key={index} alignItems="center" gap={1}>
          <Typography color="text.secondary" fontWeight={600}>
            {item.title}
          </Typography>
          <Typography>{item.desc}</Typography>
          {item.title === "그 외" ? (
            <Button
              variant="outlined"
              onClick={() => window.open("https://forms.gle/oByKDasWouMKr11b7")}
              sx={{ width: 150 }}
            >
              탑승 신청하러 가기
            </Button>
          ) : null}
        </Stack>
      ))}
    </Stack>
  );
};

export default Transportation;
