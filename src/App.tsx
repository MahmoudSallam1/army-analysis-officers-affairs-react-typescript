import React from "react";

import { useState } from "react";

import { Container } from "@chakra-ui/react";

import { Text } from "@chakra-ui/react";

import { Box } from "@chakra-ui/react";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";

import { WEAPONS } from "./constants/weapons";

import { Button } from "@chakra-ui/react";

import { Grid, GridItem } from "@chakra-ui/react";

import Table from "./components/Table";

import Navbar from "./components/Navbar";

import Sidebar from "./components/Sidebar";
import Card from "./components/Card";

import { Barchart } from "./charts/Barchart";
import { Divider } from '@chakra-ui/react'


function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (

    <>
    <Navbar/>
    <Divider orientation='horizontal' />
    <Box bg="white">
      <Container mt={4} p={6} bg="gray.100" maxW="900px">
        <Center h="80px">
          <Text as="b" fontSize="2xl">
            {" "}
            بيان عددى بمطالب الجيش بنشرة تنقلات الضباط يناير 2023م
          </Text>
        </Center>
        <Center h="80px">
          <Button w="30%" colorScheme="teal" size="lg">
            اضافة نشرة
          </Button>
        </Center>

        {/* card grid */}

        <Grid
          p={6}
          templateColumns="repeat( auto-fit, minmax(250px, 1fr) );"
          gap={4}
        >
          <GridItem>
            <Card />
          </GridItem>
          <GridItem>
            <Card />
          </GridItem>
          <GridItem>
            <Card />
          </GridItem>
          <GridItem>
            <Card />
          </GridItem>
          <GridItem>
            <Card />
          </GridItem>
          <GridItem>
            <Card />
          </GridItem>
        </Grid>

        <Box m={4} padding="6" boxShadow="lg" bg="white">
          <Tabs variant="soft-rounded" colorScheme="teal">
            <TabList>
              <Tab>النشرة القيادية</Tab>
              <Tab>النشرة الفرعية</Tab>
              <Tab>نشرة الشرفيين</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Table />
              </TabPanel>
              <TabPanel>
                <Barchart />
              </TabPanel>
              <TabPanel>
                <Text color="gray">
                  وريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي
                  الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان
                  لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر
                  عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي
                  أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه
                  الأحرف
                </Text>{" "}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </Box>
    </>
  );
}

export default App;
