import { Button } from "@chakra-ui/button"
const MyButton = ({name, doClickAction}) => {
    return (
        <Button onClick={doClickAction}
        bg={'blue.400'}
        color={'white'}
        _hover={{
          bg: 'blue.500',
        }}>
        {name}
      </Button>
    )
}



export default MyButton
