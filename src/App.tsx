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

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import Sidebar from "./components/Sidebar";

import { Barchart } from "./charts/Barchart";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Grid
        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"250px 1fr"}
        h="200px"
        color="blackAlpha.700"
      >
        <GridItem pl="2" bg="blue.300" area={"header"}>
          شئون ضباط الجيش الثانى الميدانى
        </GridItem>
        <GridItem boxShadow="lg" bg="white" pl="2" area={"nav"}>
          Nav
        </GridItem>
        <GridItem pl="2" bg="blue.200" area={"main"}>
          <Container maxW="900px">
            <Center h="150px">
              <Text as="b" fontSize="2xl">
                {" "}
                بيان عددى بمطالب الجيش بنشرة تنقلات الضباط يناير 2023م
              </Text>
            </Center>
            {/* <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} /> */}

            <Box m={4} padding="6" boxShadow="lg" bg="white">
              <Tabs variant="soft-rounded" colorScheme="blue">
                <TabList>
                  <Tab>النشرة القيادية</Tab>
                  <Tab>النشرة الفرعية</Tab>
                  <Tab>نشرة الشرفيين</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <TableContainer>
                      <Table variant="striped">
                        <TableCaption>النشرة القيادية 2023م</TableCaption>
                        <Thead>
                          <Tr>
                            <Th> البيان</Th>
                            <Th isNumeric>مطالب الجيش</Th>
                            <Th isNumeric>تم التنفيذ</Th>
                            <Th isNumeric> النسبة </Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>المشاه</Td>
                            <Td isNumeric>12</Td>
                            <Td isNumeric>11</Td>
                            <Td isNumeric>92%</Td>
                          </Tr>
                          <Tr>
                            <Td>المدرعات</Td>
                            <Td isNumeric>12</Td>
                            <Td isNumeric>11</Td>
                            <Td isNumeric>92%</Td>
                          </Tr>
                          <Tr>
                            <Td>المدفعيه</Td>
                            <Td isNumeric>12</Td>
                            <Td isNumeric>11</Td>
                            <Td isNumeric>92%</Td>
                          </Tr>
                          <Tr>
                            <Td>الدفاع الجوى"</Td>
                            <Td isNumeric>12</Td>
                            <Td isNumeric>11</Td>
                            <Td isNumeric>92%</Td>
                          </Tr>
                          <Tr>
                            <Td>الهيئة الهندسية</Td>
                            <Td isNumeric>12</Td>
                            <Td isNumeric>11</Td>
                            <Td isNumeric>92%</Td>
                          </Tr>
                          <Tr>
                            <Td>هيئة الامداد والتموين</Td>
                            <Td isNumeric>12</Td>
                            <Td isNumeric>11</Td>
                            <Td isNumeric>92%</Td>
                          </Tr>
                          <Tr>
                            <Td>الاشارة</Td>
                            <Td isNumeric>12</Td>
                            <Td isNumeric>11</Td>
                            <Td isNumeric>92%</Td>
                          </Tr>
                          <Tr>
                            <Td>مخ وسطع</Td>
                            <Td isNumeric>12</Td>
                            <Td isNumeric>11</Td>
                            <Td isNumeric>92%</Td>
                          </Tr>
                          <Tr>
                            <Td>الاسلحة والذحيرة</Td>
                            <Td isNumeric>12</Td>
                            <Td isNumeric>11</Td>
                            <Td isNumeric>92%</Td>
                          </Tr>
                          <Tr>
                            <Td>مركبات</Td>
                            <Td isNumeric>12</Td>
                            <Td isNumeric>11</Td>
                            <Td isNumeric>92%</Td>
                          </Tr>
                          <Tr>
                            <Td>ح.كيما </Td>
                            <Td isNumeric>12</Td>
                            <Td isNumeric>11</Td>
                            <Td isNumeric>92%</Td>
                          </Tr>
                          <Tr>
                            <Td>ح.الك</Td>
                            <Td isNumeric>12</Td>
                            <Td isNumeric>11</Td>
                            <Td isNumeric>92%</Td>
                          </Tr>
                          <Tr>
                            <Td>ح.حدود</Td>
                            <Td isNumeric>12</Td>
                            <Td isNumeric>11</Td>
                            <Td isNumeric>92%</Td>
                          </Tr>
                          <Tr>
                            <Td>التربية الرياضية</Td>
                            <Td isNumeric>12</Td>
                            <Td isNumeric>11</Td>
                            <Td isNumeric>92%</Td>
                          </Tr>
                          <Tr>
                            <Td>نظم المعلومات</Td>
                            <Td isNumeric>12</Td>
                            <Td isNumeric>11</Td>
                            <Td isNumeric>92%</Td>
                          </Tr>
                          <Tr>
                            <Td>اجهزة القيادة</Td>
                            <Td isNumeric>12</Td>
                            <Td isNumeric>11</Td>
                            <Td isNumeric>92%</Td>
                          </Tr>
                        </Tbody>
                        {/* <Tfoot>
                    <Tr>
                      <Th>To convert</Th>
                      <Th>into</Th>
                      <Th isNumeric>multiply by</Th>
                    </Tr>
                  </Tfoot> */}
                      </Table>
                    </TableContainer>
                  </TabPanel>
                  <TabPanel>
                    <Barchart />
                  </TabPanel>
                  <TabPanel>
                    <Text color="gray">
                      وريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن
                      الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع
                      ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي
                      منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من
                      الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل
                      أو مرجع شكلي لهذه الأحرف
                    </Text>{" "}
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Container>
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
