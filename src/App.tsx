import { useState } from "react";
import { Box } from "@chakra-ui/react";

import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Vite + React</h1>
      <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      </Box>
    </div>
  );
}

export default App;
