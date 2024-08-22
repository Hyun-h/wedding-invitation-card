import { ItemSection } from "@/style/components";
import { Typography, Box } from "@mui/material";
import { greeting } from "data.json";

const Invitation = () => {
  const { message, quotation, host } = greeting;

  return (
    <ItemSection gap={2}>
      <Typography variant="h2">모시는 글</Typography>
      <Box>
        <Typography>{quotation.message}</Typography>
        <Typography fontSize="0.875rem">{quotation.title}</Typography>
      </Box>
      <Typography lineHeight={2} my={1}>
        {message}
      </Typography>
      <Box>
        {host.map((host, index) => (
          <Typography
            variant="h3"
            letterSpacing={2}
            fontWeight={500}
            key={index}
          >
            {host.parents.father} · {host.parents.mather}의 {host.relation}{" "}
            {host.name}
          </Typography>
        ))}
      </Box>
    </ItemSection>
  );
};

export default Invitation;
