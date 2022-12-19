import React from "react";
import {
  Card as CharkaCard,
  CardHeader,
  CardBody,
  CardFooter,
  Heading
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";

import { Stack } from "@chakra-ui/react";

function Card() {
  return (
    <CharkaCard bg="white" maxW="sm">
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">
            نشرة ضباط يناير 2023م
          </Heading>
          <Text color="gray">
            لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل
          </Text>
          <Text color="teal" >
            01/01/2023
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button w="100%" variant="solid" colorScheme="teal">
          النشرة
        </Button>
      </CardFooter>
    </CharkaCard>
  );
}

export default Card;
