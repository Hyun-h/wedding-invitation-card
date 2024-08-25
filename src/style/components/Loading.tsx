import { Stack, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Stack
      width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress size={100} />
    </Stack>
  );
};

export default Loading;
