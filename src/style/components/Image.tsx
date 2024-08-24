import { Box } from "@mui/material";

type Props = {
  isSemicircle?: boolean;
  maxWidth: number | string;
  image: {
    alt: string;
    source: string;
  };
};

const Image = ({ isSemicircle = false, maxWidth, image }: Props) => {
  const { alt, source } = image;

  return (
    <Box
      maxWidth={maxWidth}
      overflow="hidden"
      sx={{
        "& img": {
          maxWidth: "100%",
          height: "auto",
          objectFit: "fit",
          borderRadius: isSemicircle ? "250px 250px 0 0" : "4px",
        },
      }}
    >
      <img src={source} alt={alt} loading="lazy" />
    </Box>
  );
};

export default Image;
