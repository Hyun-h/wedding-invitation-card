import { Suspense } from "react";

import Container from "@/layout/Container";
import Wrapper from "@/layout/Wrapper";
import Main from "@/layout/Main";
import Invitation from "@/layout/Invitation";
import Gallery from "@/layout/Gallery";
import Account from "@/layout/Account";
import Location from "@/layout/Location";
import { Loading } from "@/components/index";

function App() {
  return (
    <Suspense fallback={<Loading />}>
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
    </Suspense>
  );
}

export default App;
