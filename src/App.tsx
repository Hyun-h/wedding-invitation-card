import { Box } from "@mui/material";
import Container from "./style/layout/Container";
import Wrapper from "./style/layout/Wrapper";

function App() {
  return (
    <Container>
      <Wrapper>
        <Box height={1000}></Box>
        <Box height={1000}></Box>
        <Box height={1000}></Box>
      </Wrapper>
    </Container>
  );
}

export default App;
