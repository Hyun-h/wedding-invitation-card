import {
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountList from "./AccountList";
import { hostInfo } from "data.json";
import { Fragment } from "react";

const AccountInfo = () => {
  return (
    <Stack mt={2} maxWidth={450} width="100%">
      {hostInfo.map((item, index) => (
        <Fragment key={index}>
          <Accordion disableGutters elevation={4}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              {item.host}
            </AccordionSummary>
            <AccordionDetails>
              <AccountList account={item.accountInfo} />
            </AccordionDetails>
          </Accordion>
        </Fragment>
      ))}
    </Stack>
  );
};

export default AccountInfo;
