import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import UpdateContact from "./UpdateContact";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Button,
  } from "@chakra-ui/react"

  const MyTable = (props) => {

  const deleteContact = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`)
    window.location.reload(false)
  }

    return(
        <Table variant="striped" colorScheme="teal">
  <Thead>
    <Tr>
      <Th>Contact list:</Th>
      
    </Tr>
  </Thead>
  <Tbody>
    <Tr>

    {
    (props.data).map((val, index) =>{
            return <div >
                    <Td >{val.firstname + " " + val.lastname}</Td>
                    <Td>{val.street}</Td>
                    
                    <Td>{<UpdateContact user={val.owner} title="Edit" id={val._id} data = {val}/>}</Td>
                    
                    <Td>{ <Button colorScheme="red" mr={3}  onClick={(e)=> deleteContact(val._id)} >
                            Delete
                      </Button>}</Td> 
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