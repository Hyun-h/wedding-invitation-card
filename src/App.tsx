import { Box } from "@mui/material";
import Container from "@/layout/Container";
import Wrapper from "@/layout/Wrapper";

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
