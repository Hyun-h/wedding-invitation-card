import { useTheme, useMediaQuery, Dialog, Stack, Button } from "@mui/material";
import { ImageItem } from "@/types/atom";
import { Image } from "@/style/components";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  item: ImageItem;
};

const ImageZoomModal = ({ isOpen, item, onClose }: Props) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog open={isOpen} onClose={onClose} fullScreen={fullScreen}>
      <Stack padding={0.5} height="100vh" justifyContent="center">
        <Image image={item} maxWidth="100vw" />
        <Button variant="outlined" size="large" onClick={onClose}>
          닫기
        </Button>
      </Stack>
    </Dialog>
  );
};

export default ImageZoomModal;
