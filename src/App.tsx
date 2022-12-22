import React, { useEffect, useState } from "react";

import { Container } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import Skeleton from "./components/Skeleton";
import Alert from "./components/Alert";
import Card from "./components/Card";

import { BASE_URL } from "./constants/api";

import Navbar from "./components/Navbar";

import axios from "axios";

export type NasharaType = {
  id: number;
  attributes: {
    name: string;
    description: string;
    date: string;
    types?: {
      data?: [];
    };
  };
};

function App() {
  const [nasharas, setNasharas] = useState<NasharaType[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}nasharas?populate=*`)
      .then(function (response) {
        const { data } = response;
        setNasharas(data?.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
    <Navbar/>
      <Box py={6} bg="gray.100">
        <Container  maxW="950px">
          <Text  as="b" fontSize="2xl">
            {" "}
            بيان عددى بمطالب الجيش بنشرة تنقلات الضباط
          </Text>
          <Button mt={4} style={{display:"block"}} leftIcon={<AddIcon />} colorScheme="teal" size="lg">
            اضافة نشرة
          </Button>

          {/* Nasharas Grid */}
          {isLoading ? (
            <Skeleton />
          ) : nasharas && nasharas.length > 0 ? (
            <Grid
              templateColumns="repeat( auto-fit, minmax(250px, 1fr) );"
              justifyContent="center"
              gap={4}
              mt={10}
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
          ) : (
            <Alert  message={error} />
          )}
        </Container>
      </Box>
    </>
  );
}

export default App;
