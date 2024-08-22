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
      borderRadius={isSemicircle ? "250px 250px 0 0" : "4px"}
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
