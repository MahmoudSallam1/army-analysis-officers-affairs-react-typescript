import React from 'react'
import {
    Table as CharkaTable,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from "@chakra-ui/react";
function Table() {
  return (
    <TableContainer>
    <CharkaTable variant="striped">
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
    </CharkaTable>
  </TableContainer>
  )
}

export default Table