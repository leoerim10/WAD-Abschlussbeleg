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

const MyModal = (props) => {

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [street, setStreet] = useState("")
  const [postalcode, setPostalcode] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")

  /* const [contactList, setContactList] = useState([])

  useEffect (() =>{
    Axios.get("http://localhost:3001/read").then((Response) => {
      setContactList(Response.data)
    })
  }, []) */

  const addContact = () => {
    Axios.post("http://localhost:3001/create", {
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

    <><Button onClick={onOpen}>{props.title}</Button><>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a new contact</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <FormControl isRequired>
                <FormLabel>First name</FormLabel>
                <Input placeholder="First name" onChange={(event) => {setFirstname(event.target.value)}} />
              </FormControl>
  
              <FormControl mt={4} isRequired>
                <FormLabel>Last name</FormLabel>
                <Input placeholder="Last name" onChange={(event) => {setLastname(event.target.value)}} />
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel>Street</FormLabel>
                <Input placeholder="Street" onChange={(event) => {setStreet(event.target.value)}} />
              </FormControl>
              
              <FormControl mt={4} isRequired>
                <FormLabel>Postal code</FormLabel>
                <Input placeholder="Postal code" onChange={(event) => {setPostalcode(event.target.value)}} />
              </FormControl>

              <FormControl mt={4} isRequired>
                <FormLabel>City</FormLabel>
                <Input placeholder="City" onChange={(event) => {setCity(event.target.value)}} />
              </FormControl>

              <FormControl mt={4} isRequired>
                <FormLabel>Country</FormLabel>
                <Input placeholder="Country" onChange={(event) => {setCountry(event.target.value)}} />
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
            <Button colorScheme="blue" mr={3} onClick={addContact}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </></>
  )
}
return InitialFocus();
}

  export default MyModal