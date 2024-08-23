import { Stack, useTheme, useMediaQuery } from "@mui/material";
import { ReactChildren } from "@/types/atom";

type Props = ReactChildren & {
  isFullScreen?: boolean;
  isCenter?: boolean;
};

const ItemSection = ({
  children,
  isFullScreen = false,
  isCenter = false,
}: Props) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      component="section"
      padding={isSmallScreen ? "2rem 0" : "2rem"}
      gap={2}
      alignItems="center"
      flexDirection="column"
      height={isFullScreen ? "calc(100vh - 4rem)" : "100%"}
      justifyContent={isCenter ? "center" : "normal"}
    >
      {children}
    </Stack>
  );
};

export default ItemSection;
