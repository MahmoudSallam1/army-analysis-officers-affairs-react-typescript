import React from "react";
import {
  Skeleton as CharkaSkeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

function Skeleton(props: any) {
  return (
    <Stack mt={4}>
      <CharkaSkeleton height="20px" />
      <CharkaSkeleton height="20px" />
      <CharkaSkeleton height="20px" />
    </Stack>
  );
}

export default Skeleton;
