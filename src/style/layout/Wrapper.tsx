import { Stack, useTheme, useMediaQuery } from "@mui/material";
import { ReactChildren } from "../../types/style";

function Wrapper({ children }: ReactChildren) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      bgcolor="#F0F2F0"
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={2}
      padding={2}
      minWidth={isSmallScreen ? "100vw" : 600}
      overflow="hidden"
    >
      {children}
    </Stack>
  );
}

export default Wrapper;
