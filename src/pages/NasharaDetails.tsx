import React, { useState, useEffect } from "react";
import { Container } from "@chakra-ui/react";

import { Text } from "@chakra-ui/react";

import { Box } from "@chakra-ui/react";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";

import Table from "../components/Table";

import { Barchart } from "../charts/Barchart";
import { Divider } from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import axios from "axios";

function NasharaDetails() {
  const { id } = useParams();
  const [nashara, setNashara] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:1337/api/nasharas/${id}?populate=deep`)
      .then(function (response) {
        console.log(response);
        const { data } = response;
        setNashara(data?.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Divider orientation="horizontal" />
      <Box bg="white">
        <Container mt={4} p={6} bg="gray.100" maxW="900px">
          <Center h="80px">
            <Text as="b" fontSize="2xl">
              {" "}
              {nashara.attributes?.name}
            </Text>
          </Center>

          {nashara.attributes?.types?.data.map((type: any) => (
            <Box
              key={type.attributes?.name}
              m={4}
              padding="6"
              boxShadow="lg"
              bg="white"
            >
              <Tabs variant="soft-rounded" colorScheme="teal">
                <TabList>
                  <Tab>{type.attributes?.name} </Tab>
                  <Tab key={type.attributes?.name}>تحليل النشرة</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Table weapons={type.attributes?.weapons.data} />
                  </TabPanel>
                  <TabPanel>
                    <Barchart weapons={type.attributes?.weapons.data} />
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
