import { Helmet } from "react-helmet-async";
import image6 from "@/assets/images/6.jpg";

const MetaTag = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content={"10월 12일 오후 1시 동천성바오로성당"}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={"⛅️ 정운과 현아, 결혼합니다"} />
        <meta property="og:site_name" content="정운, 현아의 모바일 청첩장" />
        <meta
          property="og:description"
          content={"10월 12일 오후 1시 동천성바오로성당"}
        />
        <meta
          property="og:image"
          content={`https://hyun-h.github.io/${image6}`}
        />
        <meta
          property="og:url"
          content={"https://hyun-h.github.io/wedding-invitation-card/"}
        />
      </Helmet>
    </>
  );
};

export default MetaTag;
