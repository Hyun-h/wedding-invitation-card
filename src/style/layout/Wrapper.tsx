import {
  Stack,
  useTheme,
  useMediaQuery,
  IconButton,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ReactChildren } from "@/types/atom";

import { developer } from "data.json";

function Wrapper({ children }: ReactChildren) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={4}
      padding={isSmallScreen ? "32px 0 0 0" : 4}
      maxWidth={isSmallScreen ? "100vw" : 600}
      width="100%"
      overflow="hidden"
    >
      {children}
      <Stack width="100%" alignItems="flex-end" padding={isSmallScreen ? 4 : 0}>
        {developer.map((item, index) => (
          <Stack key={index} direction="row" alignItems="center">
            <Typography variant="caption" mt={0.3}>
              {item.role} : {item.name}
            </Typography>
            <IconButton size="small" onClick={() => window.open(item.url)}>
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default Wrapper;
