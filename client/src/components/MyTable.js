import MyButton from "./Button"
import MyModal from "./MyModal"
import React, {useState, useEffect} from 'react';
import Axios from 'axios'
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

    const [contactList, setContactList] = useState([])
   
  useEffect (() =>{
    Axios.get("http://localhost:3001/read").then((Response) => {
      setContactList(Response.data)
    })
  }, [])

    return(
        <Table variant="striped" colorScheme="teal">
  <Thead>
    <Tr>
      <Th>Contact list:</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>

    {contactList.map((val, key) =>{
            return <div key={key}>
                    <Td>{val.firstname + " " + val.lastname}</Td>
                    <Td>{val.street}</Td>
                    <Td>{<MyModal title="Edit" />}</Td>
                    <Td>{<MyButton name="Delete" />}</Td>
            </div>
          })}
      

    </Tr>
    
  </Tbody>

  <Tfoot>
  </Tfoot>
</Table>

    )

  }

  export default MyTable