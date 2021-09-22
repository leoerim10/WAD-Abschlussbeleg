import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button, FormControl, FormLabel, Input, useDisclosure, Stack, Checkbox
  } from "@chakra-ui/react"
  import React, {useState, useEffect} from 'react';
  import Axios from 'axios'

  const UpdateContact = (props) =>{

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [street, setStreet] = useState("")
    const [postalcode, setPostalcode] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")


    const [contactList, setContactList] = useState([])
   
    useEffect (() =>{
      Axios.get("http://localhost:3001/read").then((Response) => {
        setContactList(Response.data)
        console.log(Response.data)
      })
    }, [])


    const updateContact = (id) => {
        Axios.put("http://localhost:3001/update", {
            id:id,
          firstname: firstname,
          lastname: lastname,
          street: street,
          postalcode: postalcode,
          city: city,
          country: country,
        } )
    
        window.location.reload(false);
      }
      

    function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef()
    const finalRef = React.useRef()
  
    return (
      <div id="test">
      <Button onClick={onOpen}>{props.title}</Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update your contact</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <FormControl>
                <FormLabel>First name</FormLabel>
                <Input placeholder="Type here to update your first name" onChange={(event) => {setFirstname(event.target.value)}} />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input placeholder="Type here to update your last name" onChange={(event) => {setLastname(event.target.value)}} />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Street</FormLabel>
                <Input placeholder="Type here to update your street" onChange={(event) => {setStreet(event.target.value)}} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Postal code</FormLabel>
                <Input placeholder="Type here to update your postal code" onChange={(event) => {setPostalcode(event.target.value)}} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>City</FormLabel>
                <Input placeholder="Type here to update your city" onChange={(event) => {setCity(event.target.value)}} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Country</FormLabel>
                <Input placeholder="Type here to update your country" onChange={(event) => {setCountry(event.target.value)}} />
              </FormControl>

              <Stack spacing={20} direction="row">
              <Checkbox colorScheme="red" defaultIsChecked>
                Admina
              </Checkbox>
              <Checkbox colorScheme="green" defaultIsChecked>
                private
              </Checkbox>
              </Stack>
            </ModalBody>
  
            <ModalFooter>
              <Button id="testtesttest" colorScheme="blue" mr={3}  onClick={(e)=> updateContact(props.id)} >
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    )
  }
  return InitialFocus();
}

export default UpdateContact