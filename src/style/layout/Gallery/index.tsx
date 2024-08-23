import { Image, ItemSection } from "@/style/components";
import { Box, Typography, Stack } from "@mui/material";
import { gallery } from "@/assets/images";
import { useState } from "react";
import { ImageItem } from "@/types/atom";
import ImageZoomModal from "./ImageZoomModal";

const Gallery = () => {
  const [value, setValue] = useState<ImageItem>({ alt: "", source: "" });
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <ItemSection>
      <Typography variant="h2">사진첩</Typography>
      <Stack
        gap={2}
        direction="row"
        width={300}
        sx={{
          overflowX: "auto",
        }}
      >
        {gallery.map((item, index) => (
          <Box
            key={index}
            minWidth={280}
            onClick={() => {
              setIsDialogOpen(true);
              setValue(item);
            }}
          >
            <Image image={item} maxWidth={280} />
          </Box>
        ))}
      </Stack>

      <ImageZoomModal
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        item={value}
      />
    </ItemSection>
  );
};

export default Gallery;
