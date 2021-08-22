import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Alert,
  AlertIcon,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useUser } from '../utils/useUser';

export default function Login() {
  const background = useColorModeValue('white', 'gray.700');
  const background2 = useColorModeValue('gray.50', 'gray.800');
  const { signIn, setUser } = useUser();
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState({ type: '', content: '' });
  const history = useHistory();

  const { state } = useLocation();

  async function onLogin() {
    try {
      const { data, error } = await signIn(formData);
      if (error) {
        throw error;
      }
      setUser(data.user);
      window.localStorage.setItem('refresh_token', data.tokens.refresh.token);
      history.push(state?.from || '/home');
    } catch (e) {
      setErrorMessage({ type: 'error', content: e.message });
      console.log(e);
    }
  }

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={background2}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box rounded={'lg'} bg={background} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                onChange={e =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={e =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              {errorMessage.type && (
                <Alert status={errorMessage.type} borderRadius={3}>
                  <AlertIcon />
                  {errorMessage.content}
                </Alert>
              )}
              <Button
                onClick={onLogin}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
