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

const AccountSummary = () => {
  return (
    <Stack mt={2} width="100%">
      {hostInfo.map((item, index) => (
        <Fragment key={index}>
          <Accordion elevation={4}>
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

export default AccountSummary;
