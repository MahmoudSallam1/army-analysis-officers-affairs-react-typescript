import React from "react";
import {
  Card as CharkaCard,
  CardBody,
  CardFooter,
  Heading,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";

import { Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

type CardProps = {
  title: string;
  description: string;
  date: string;
  nasharaID: number;
};

function Card({ title, description, date, nasharaID }: CardProps) {
  const navigate = useNavigate();
  return (
    <CharkaCard bg="white" maxW="sm">
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text color="gray">{description} </Text>
          <Text color="teal">{date}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button
          style={{ display: "block" }}
          w="100%"
          variant="solid"
          colorScheme="teal"
          onClick={() => navigate(`/nashara/${nasharaID}`)}
        >
          النشرة
        </Button>
      </CardFooter>
    </CharkaCard>
  );
}

export default Card;
