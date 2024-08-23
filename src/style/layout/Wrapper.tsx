import { Stack, useTheme, useMediaQuery } from "@mui/material";
import { ReactChildren } from "@/types/atom";

function Wrapper({ children }: ReactChildren) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      // bgcolor="#F0F2F0"
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={4}
      padding={4}
      minWidth={isSmallScreen ? "100vw" : 600}
      overflow="hidden"
    >
      {children}
    </Stack>
  );
}

export default Wrapper;
