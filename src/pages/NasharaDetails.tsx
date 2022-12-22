import React, { useState, useEffect } from "react";
import { Container } from "@chakra-ui/react";

import { Text } from "@chakra-ui/react";

import { Box } from "@chakra-ui/react";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";

import Table from "../components/Table";

import { Barchart } from "../charts/Barchart";

import { useParams } from "react-router-dom";
import { BASE_URL } from "../constants/api";
import axios from "axios";

import Navbar from "../components/Navbar";

import { NasharaType } from "../App";

function NasharaDetails() {
  const { id } = useParams();
  const [nashara, setNashara] = useState<NasharaType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}nasharas/${id}?populate=deep`)
      .then(function (response) {
        const { data } = response;
        setNashara(data?.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  console.log(nashara);

  return (
    <>
      <Navbar />
      <Box p={6} bg="gray.100">
        <Container maxW="950px">
          <Center h="80px">
            <Text as="b" fontSize="2xl">
              {" "}
              {nashara?.attributes.name}
            </Text>
          </Center>

          {nashara?.attributes.types?.data?.map((type: any) => (
            <Box
              key={type.attributes.name}
              m={4}
              padding="6"
              boxShadow="lg"
              bg="white"
            >
              <Tabs variant="soft-rounded" colorScheme="teal">
                <TabList>
                  <Tab>{type.attributes?.name} </Tab>
                  <Tab key={type.attributes.name}>تحليل النشرة</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Table weapons={type.attributes.weapons.data} />
                  </TabPanel>
                  <TabPanel>
                    <Barchart weapons={type.attributes.weapons.data} />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          ))}
        </Container>
      </Box>
    </>
  );
}

export default NasharaDetails;
