
import { FormControl, FormLabel, Input, Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react"

const ContactForm = (props) => {

return(
<div>
            <FormControl>
                <FormLabel>First name</FormLabel>
                <Input placeholder="First name" />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input placeholder="Last name" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Street and house number</FormLabel>
                <Input placeholder="Street and house number" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Postal code</FormLabel>
                <Input placeholder="Postal code" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>City</FormLabel>
                <Input placeholder="City" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Country</FormLabel>
                <Input placeholder="Country" />
              </FormControl>

              <Stack spacing={20} direction="row">
              <Checkbox colorScheme="red" defaultIsChecked>
                Admina
              </Checkbox>
              <Checkbox colorScheme="green" defaultIsChecked>
                private
              </Checkbox>
              </Stack>

</div>)
}
              
export default ContactForm