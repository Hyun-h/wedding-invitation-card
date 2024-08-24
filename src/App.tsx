import Container from "@/layout/Container";
import Wrapper from "@/layout/Wrapper";
import Main from "@/layout/Main";
import Invitation from "@/layout/Invitation";
import Gallery from "@/layout/Gallery";
import Account from "@/layout/Account";
import Location from "@/layout/Location";
// import { MetaTag } from "@/style/components";

function App() {
  return (
    <Container>
      {/* <MetaTag /> */}
      <Wrapper>
        <Main />
        <Invitation />
        <Gallery />
        <Account />
        <Location />
      </Wrapper>
    </Container>
  );
}

export default App;
