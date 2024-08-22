import { Box } from "@mui/material";

type Props = {
  maxWidth: number | string;
  image: {
    alt: string;
    source: string;
  };
};

const Image = ({ maxWidth, image }: Props) => {
  const { alt, source } = image;

  return (
    <Box
      borderRadius="250px 250px 0 0"
      maxWidth={maxWidth}
      overflow="hidden"
      sx={{
        "& img": {
          maxWidth: "100%",
          height: "auto",
          objectFit: "fit",
        },
      }}
    >
      <img src={source} alt={alt} />
    </Box>
  );
};

export default Image;
