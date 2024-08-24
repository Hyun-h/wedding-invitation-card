import {
  List,
  ListItem,
  IconButton,
  ListItemText,
  Typography,
  Stack,
  Snackbar,
  Alert,
  SnackbarCloseReason,
} from "@mui/material";
import { CopyAllOutlined } from "@mui/icons-material";
import { IAccountInfo } from "@/types/data";
import copyToClipboard from "utils";
import { useState } from "react";

type Props = {
  account: IAccountInfo;
};

const AccountList = ({ account }: Props) => {
  const [open, setOpen] = useState(false);

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <List disablePadding>
      {account.map((item, index) => (
        <ListItem
          key={index}
          disableGutters
          secondaryAction={
            <IconButton
              onClick={() => {
                copyToClipboard(item.account);
                setOpen(true);
              }}
              sx={{ marginRight: "-0.4rem" }}
            >
              <CopyAllOutlined />
            </IconButton>
          }
        >
          <Stack>
            <Typography
              variant="caption"
              color="text.secondary"
              textAlign="left"
            >
              {item.relation} {item.name}
            </Typography>
            <ListItemText
              disableTypography
              primary={`${item.bank} ${item.account}`}
            />
          </Stack>
        </ListItem>
      ))}
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          계좌번호가 복사되었어요! 😉
        </Alert>
      </Snackbar>
    </List>
  );
};

export default AccountList;
