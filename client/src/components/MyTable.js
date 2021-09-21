import MyButton from "./Button"
import MyModal from "./MyModal"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
  } from "@chakra-ui/react"

  const MyTable = (props) => {
    return(
        <Table variant="striped" colorScheme="teal">
  <Thead>
    <Tr>
      <Th>Name</Th>
      <Th>Address</Th>
      <Th>Edit</Th>
      <Th>Delete</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td>first name</Td>
      <Td>Berliner Straße 5</Td>
      <Td>{<MyModal title="Edit" />}</Td>
      <Td>{<MyButton name="Delete" />}</Td>
    </Tr>
    <Tr>
      <Td>Andy Smith</Td>
      <Td>Warschauer Straße 5</Td>
      <Td>{<MyModal title="Edit"/>}</Td>
      <Td>{<MyButton name="Delete" />}</Td>
    </Tr>
    <Tr>
      <Td>Katja Peters</Td>
      <Td>Brandenburgische Straße 107</Td>
      <Td>{<MyModal title="Edit" />}</Td>
      <Td>{<MyButton name="Delete" />}</Td>
    </Tr>
    <Tr>
      <Td>Maximilina Wagner</Td>
      <Td>Leopoldstraße 50</Td>
      <Td>{<MyModal title="Edit" />}</Td>
      <Td>{<MyButton name="Delete" />}</Td>
    </Tr>
  </Tbody>

  <Tfoot>
  </Tfoot>
</Table>

    )

  }

  export default MyTable