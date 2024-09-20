import { Typography, Stack, Button, Box } from "@mui/material";
import { ItemSection } from "@/style/components";
import { charterInfo } from "data.json";
import Schedule from "./Schedule";

const Charter = () => {
  return (
    <ItemSection>
      <Typography variant="h2">진주 출발 버스 안내</Typography>
      <Stack alignItems="center" gap={1}>
        <Typography>
          대절버스가 필요하신 분은 아래의 신청서를 꼭 작성해주세요.
        </Typography>
        <Button
          variant="outlined"
          onClick={() => window.open(charterInfo.url)}
          sx={{ width: 150 }}
        >
          탑승 신청하러 가기
        </Button>
        <Schedule />
      </Stack>
    </ItemSection>
  );
};

export default Charter;
