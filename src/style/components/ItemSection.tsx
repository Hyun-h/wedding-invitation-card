import { Stack } from "@mui/material";
import { ReactChildren } from "@/types/atom";

type Props = ReactChildren & {
  isFullScreen?: boolean;
  isCenter?: boolean;
  gap?: number;
};

const ItemSection = ({
  children,
  isFullScreen = false,
  isCenter = false,
  gap = 0,
}: Props) => {
  return (
    <Stack
      component="section"
      padding={4}
      gap={gap}
      alignItems="center"
      flexDirection="column"
      height={isFullScreen ? "calc(100vh - 2rem)" : "100%"}
      justifyContent={isCenter ? "center" : "normal"}
    >
      {children}
    </Stack>
  );
};

export default ItemSection;
