import { Skeleton } from "@mui/material";
import { ItemSection } from "@/components/index";

const Loader = () => {
  return (
    <ItemSection isCenter isFullScreen>
      <Skeleton variant="rounded" width={450} height="100%" />
      <Skeleton variant="rounded" width={250} height={76} />
    </ItemSection>
  );
};

export default Loader;
