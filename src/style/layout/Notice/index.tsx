import { List, ListItem, Typography, Stack } from "@mui/material";
import { locationNotice } from "data.json";
import { ItemSection } from "@/components/index";

const Notice = () => {
  return (
    <ItemSection>
      <Stack mt={4}>
        <Typography variant="caption">기타 안내</Typography>
        <List>
          {locationNotice.map((notice, index) => (
            <ListItem key={index} disableGutters disablePadding>
              <Typography variant="caption" textAlign="left">
                ⎷ {notice}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Stack>
    </ItemSection>
  );
};

export default Notice;
