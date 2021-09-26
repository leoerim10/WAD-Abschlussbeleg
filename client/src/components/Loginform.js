import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Heading,
    Text,
    useColorModeValue, Alert, AlertIcon
  } from '@chakra-ui/react';
  import MyButton from './Button';
  import { useHistory } from 'react-router';
  import React, {useState, useEffect} from 'react';
  import Axios from 'axios'



  const LoginForm2 = (props) => {
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const[authenticated, setAuthenticated] = useState(false)

    const [userList, setUserList] = useState([])
   
    useEffect (() =>{
      Axios.get("http://localhost:3001/users").then((Response) => {
        setUserList(Response.data)
        console.log(Response.data[0].username)
      })
    }, [])
    

    

    const  history = useHistory()
    function doSth(){


      if(username === userList[0].username && password === userList[0].password)
      {
        const location = {
          pathname: '/Admina_Page',
          state: { logged_in: true }
        }
      setAuthenticated(true)
      history.push(location)
      }
      else if(username === userList[1].username && password === userList[1].password)
      {
        const location = {
          pathname: '/Normalo_Page',
          state: { logged_in: true }
        }
        setAuthenticated(true)
        history.push(location)
      }
      else{
        alert("Error: Username or Password does not match.")
      }
  
    }
  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="username" isRequired>
                <FormLabel>User name</FormLabel>
                <Input type="text" onChange={(event) => {setUsername(event.target.value)}} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" onChange={(event) => {setPassword(event.target.value)}}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  {props.checkbox}
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <MyButton doClickAction={doSth} name={props.prompt} />
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }



  export default LoginForm2