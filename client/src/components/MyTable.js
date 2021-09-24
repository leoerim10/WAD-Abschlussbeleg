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

    const [contactList, setContactList] = useState([])

    useEffect(() => console.log('value changed to ' + props.type), [props.type]);
   
  useEffect (() =>{


    Axios.get("http://localhost:3001/read").then((Response) => {
      var res = (Response.data)
     // var privacy = (Response.data.data).privacy
     const adminaPublicContacts = (res.filter((obj => obj.owner === "admina" && obj.privacy === "public")))
     const adminaPrivateContacts =(res.filter((obj => obj.owner === "admina" && obj.privacy === "private")))
     const normaloPublicContacts =(res.filter((obj => obj.owner === "normalo" && obj.privacy === "public")))
     const normaloPrivateContacts =(res.filter((obj => obj.owner === "normalo" && obj.privacy === "private"))) 
     console.log(Response.data)
      setContactList(Response.data)
      
    })
  }, [])


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

    {contactList.map((val, index) =>{
            return <div id="thisTable">
                    <Td>Prop Type = {props.type}</Td>
                    <Td id={"firstname"+index}>{val.firstname + " " + val.lastname}</Td>
                    <Td id= {"street"+index}>{val.street}</Td>
                    <Td>{<UpdateContact title="Edit" id={val._id}/>}</Td>
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