import React from "react";
import { Container, Image } from "@chakra-ui/react";

import { Text } from "@chakra-ui/react";

import { Flex, Spacer } from "@chakra-ui/react";

import { Box } from "@chakra-ui/react";

import Logo from "../assets/logoRGB.jpg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <Container maxW="950px">
      <Flex alignItems="center" py={4} >
        {" "}
        <Box>
          <Text as="b">قيادة الجيش الثانى الميدانى</Text>
          <Text color="gray"> ادارة شئون الضباط </Text>{" "}
        </Box>
        <Spacer />{" "}
        <Link to="/">
          {" "}
          <Image boxSize="100px" objectFit="cover" src={Logo} alt="Logo" />
        </Link>
      </Flex>
    </Container>
  );
}

export default Navbar;
