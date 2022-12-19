import React from "react";
import { Image } from "@chakra-ui/react";

import { Text } from "@chakra-ui/react";

import { Flex, Spacer } from "@chakra-ui/react";

import { Box } from "@chakra-ui/react";

import Logo from "../assets/logoRGB.jpg";
function Navbar() {
  return (
    <Flex p={2} minWidth="max-content" alignItems="center" gap="2">
      {" "}
      <Box>
        <Text as="b">قيادة الجيش الثانى الميدانى</Text>
        <Text color="gray"> ادارة شئون الضباط </Text>{" "}
      </Box>
      <Spacer />
      <a href="/">
        {" "}
        <Image boxSize="100px" objectFit="cover" src={Logo} alt="Logo" />
      </a>
    </Flex>
  );
}

export default Navbar;
