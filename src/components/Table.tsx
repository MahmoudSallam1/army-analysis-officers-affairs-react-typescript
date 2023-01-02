import React, { useRef } from "react";

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
  Button,
} from "@chakra-ui/react";

import { DownloadIcon } from "@chakra-ui/icons";
import { useDownloadExcel } from "react-export-table-to-excel";

type TableProps = {
  weapons: [];
  sheetName: string;
};

function Table({ weapons, sheetName }: TableProps) {
  const tableRef = useRef(null);
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: sheetName,
    sheet: sheetName,
  });

  return (
    <TableContainer>
      <Button
        mt={4}
        colorScheme="teal"
        leftIcon={<DownloadIcon />}
        onClick={onDownload}
        disabled={!weapons.length}
      >
        {" "}
        تنزيل الاكسيل{" "}
      </Button>

      <CharkaTable mt={4} ref={tableRef} variant="striped">
        <TableCaption> ادارة شئون الضباط</TableCaption>
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
                {isNaN(weapon.attributes.achieved / weapon.attributes.requested)
                  ? 0
                  : (
                      (weapon.attributes.achieved /
                        weapon.attributes.requested) *
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
