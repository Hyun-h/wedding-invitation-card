import { List, ListItem, Typography, Stack } from "@mui/material";
import { locationNotice } from "data.json";

const Notice = () => {
  return (
    <Stack mt={6}>
      <Typography variant="caption">기타 안내</Typography>
      <List>
        {locationNotice.map((notice, index) => (
          <ListItem key={index} disableGutters disablePadding>
            <Typography variant="caption" textAlign="left">
              · {notice}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default Notice;
