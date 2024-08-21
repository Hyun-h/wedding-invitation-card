import { Stack } from "@mui/material";
import { ReactChildren } from "../../types/style";

function Container({ children }: ReactChildren) {
  return (
    <Stack justifyContent="center" alignItems="center" bgcolor="#D0D9D4">
      {children}
    </Stack>
  );
}

export default Container;
