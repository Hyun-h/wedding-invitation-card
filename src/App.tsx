import { Box } from "@mui/material";
import Container from "@/layout/Container";
import Wrapper from "@/layout/Wrapper";
import Main from "@/layout/Main";

function App() {
  return (
    <Container>
      <Wrapper>
        <Main />
        <Box bgcolor="red" width="100%" height={1000}></Box>
        <Box bgcolor="blue" width="100%" height={1000}></Box>
        <Box height={1000}></Box>
      </Wrapper>
    </Container>
  );
}

export default App;
