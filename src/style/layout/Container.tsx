import { Stack } from "@mui/material";
import { ReactChildren } from "@/types/atom";

function Container({ children }: ReactChildren) {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      bgcolor="secondary.light"
    >
      {children}
    </Stack>
  );
}

export default Container;
