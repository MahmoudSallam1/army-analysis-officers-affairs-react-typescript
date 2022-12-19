import React from "react";
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

type TableProps = any;

function Table({ weapons }: TableProps) {
  return (
    <TableContainer>
      <CharkaTable variant="striped">
        <TableCaption> ادارة شئوون الضباط</TableCaption>
        <Thead>
          <Tr>
            <Th> البيان</Th>
            <Th isNumeric>مطالب الجيش</Th>
            <Th isNumeric>تم التنفيذ</Th>
            <Th isNumeric> النسبة </Th>
          </Tr>
        </Thead>
        <Tbody>
          {weapons.map((weapon: any) => (
            <Tr key={weapon.attributes?.name}>
              <Td>{weapon.attributes?.name}</Td>
              <Td isNumeric>{weapon.attributes?.requested}</Td>
              <Td isNumeric>{weapon.attributes?.achieved}</Td>
              <Td isNumeric>
                {(
                  (weapon.attributes.achieved / weapon.attributes.requested) *
                  100
                ).toFixed(1)}
              </Td>
            </Tr>
          ))}
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
  );
}

export default Table;
