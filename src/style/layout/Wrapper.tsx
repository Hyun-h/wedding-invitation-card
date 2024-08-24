import { Stack, useTheme, useMediaQuery } from "@mui/material";
import { ReactChildren } from "@/types/atom";

function Wrapper({ children }: ReactChildren) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={4}
      padding={4}
      maxWidth={isSmallScreen ? "100vw" : 600}
      overflow="hidden"
    >
      {children}
    </Stack>
  );
}

export default Wrapper;
