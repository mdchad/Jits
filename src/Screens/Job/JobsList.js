import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';

function JobsList() {
  return (
    <Table variant="simple">
      <TableCaption>Imperial to metric conversion factors</TableCaption>
      <Thead>
        <Tr>
          <Th>Id</Th>
          <Th>Date</Th>
          <Th>Destination</Th>
          <Th>Customer</Th>
          <Th>Driver</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>inches</Td>
          <Td>millimetres (mm)</Td>
          <Td>25.4</Td>
          <Td>25.4</Td>
          <Td>25.4</Td>
        </Tr>
        <Tr>
          <Td>feet</Td>
          <Td>centimetres (cm)</Td>
          <Td>30.48</Td>
          <Td>30.48</Td>
          <Td>30.48</Td>
        </Tr>
        <Tr>
          <Td>yards</Td>
          <Td>metres (m)</Td>
          <Td>0.91444</Td>
          <Td>0.91444</Td>
          <Td>0.91444</Td>
        </Tr>
      </Tbody>
      {/*<Tfoot>*/}
      {/*  <Tr>*/}
      {/*    <Th>To convert</Th>*/}
      {/*    <Th>into</Th>*/}
      {/*    <Th >multiply by</Th>*/}
      {/*  </Tr>*/}
      {/*</Tfoot>*/}
    </Table>
  );
}

export default JobsList;
