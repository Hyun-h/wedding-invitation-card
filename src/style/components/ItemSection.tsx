import { Stack } from "@mui/material";
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
  return (
    <Stack
      component="section"
      padding={4}
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
