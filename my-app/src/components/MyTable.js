import MyButton from "./Button"
import MyModal from "./Modal"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from "@chakra-ui/react"

  const MyTable = (props) => {
    return(
        <Table variant="striped" colorScheme="teal">
  <TableCaption>Imperial to metric conversion factors</TableCaption>
  <Thead>
    <Tr>
      <Th>To convert</Th>
      <Th>into</Th>
      <Th isNumeric>multiply by</Th>
      <Th>Edit</Th>
      <Th>Delete</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td>inches</Td>
      <Td>millimetres (mm)</Td>
      <Td isNumeric>25.4</Td>
      <Td>{<MyModal title="Edit"/>}</Td>
      <Td>{<MyButton name="Delete" />}</Td>
    </Tr>
    <Tr>
      <Td>feet</Td>
      <Td>centimetres (cm)</Td>
      <Td isNumeric>30.48</Td>
      <Td>{<MyModal title="Edit"/>}</Td>
      <Td>{<MyButton name="Delete" />}</Td>
    </Tr>
    <Tr>
      <Td>yards</Td>
      <Td>metres (m)</Td>
      <Td isNumeric>0.91444</Td>
      <Td>{<MyModal title="Edit"/>}</Td>
      <Td>{<MyButton name="Delete" />}</Td>
    </Tr>
  </Tbody>
  <Tfoot>
    <Tr>
      <Th>To convert</Th>
      <Th>into</Th>
      <Th isNumeric>multiply by</Th>
      <Td>{<MyModal title="Edit"/>}</Td>
      <Td>{<MyButton name="Delete" />}</Td>
    </Tr>
  </Tfoot>
</Table>

    )

  }

  export default MyTable