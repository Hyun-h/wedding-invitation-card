import { Suspense } from "react";

import Container from "@/layout/Container";
import Wrapper from "@/layout/Wrapper";
import Main from "@/layout/Main";
import Invitation from "@/layout/Invitation";
import Gallery from "@/layout/Gallery";
import Account from "@/layout/Account";
import Charter from "@/layout/Charter";
import Location from "@/layout/Location";
import Notice from "@/layout/Notice";
import { Loading } from "@/components/index";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Container>
        <Wrapper>
          <Main />
          <Invitation />
          <Gallery />
          <Account />
          <Charter />
          <Location />
          <Notice />
        </Wrapper>
      </Container>
    </Suspense>
  );
}

export default App;
