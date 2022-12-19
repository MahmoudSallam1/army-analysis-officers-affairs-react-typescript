import React, { useEffect, useState } from "react";

import { Container } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import Card from "./components/Card";

import axios from "axios";

function App() {
  const [nasharas, setNasharas] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:1337/api/nasharas?populate=*")
      .then(function (response) {
        const { data } = response;
        setNasharas(data?.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  console.log(nasharas);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <Divider orientation="horizontal" />
      <Box bg="white">
        <Container mt={4} p={6} bg="gray.100" maxW="900px">
          <Center h="80px">
            <Text as="b" fontSize="2xl">
              {" "}
              بيان عددى بمطالب الجيش بنشرة تنقلات الضباط
            </Text>
          </Center>
          <Center h="80px">
            <Button leftIcon={<AddIcon />} w="30%" colorScheme="teal" size="lg">
              اضافة نشرة
            </Button>
          </Center>

          {/* Nasharas Grid */}

          <Grid
            p={6}
            templateColumns="repeat( auto-fit, minmax(250px, 1fr) );"
            gap={4}
          >
            {nasharas &&
              nasharas.map((nashara) => (
                <GridItem key={nashara.id}>
                  <Card
                    nasharaID={nashara.id}
                    title={nashara.attributes.name}
                    description={nashara.attributes.description}
                    date={nashara.attributes.date}
                  />
                </GridItem>
              ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default App;
