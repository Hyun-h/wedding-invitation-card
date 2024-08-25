import { ItemSection } from "@/style/components";
import { Typography } from "@mui/material";
import AccountSummary from "./AccountSummary";

const Account = () => {
  return (
    <ItemSection>
      <Typography variant="h2">마음 전하실 곳</Typography>
      <Typography>
        참석이 어려우신 분들을 위해 계좌번호를 기재하였습니다.{"\n"}너그러운
        마음으로 양해 부탁드립니다.{"\n"}축의금을 보내주신 분들께 감사의 뜻을
        전하고 싶습니다.{"\n"}연락주시면 감사하겠습니다.
      </Typography>
      <AccountSummary />
    </ItemSection>
  );
};

export default Account;
