import React, { useState } from 'react';
import {
  Box,
  Text,
  Flex,
  VStack,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  FormErrorMessage,
  FormHelperText,
  InputGroup,
  InputLeftAddon,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
  Spacer,
} from '@chakra-ui/react';
import suite from '../validate';

function Home() {
  const [formState, setFormState] = useState({});

  const result = suite.get();
  function runValidate(name, value) {
    suite(
      {
        ...formState,
        ...{ [name]: value },
      },
      name
    );
  }

  function handleChange(name, value) {
    setFormState({ ...formState, [name]: value });
    runValidate(name, value);
  }

  return (
    <Flex
      bg="gray.200"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box borderRadius="5" bg="white" p={5} width="500px">
        <VStack spacing={3}>
          <FormControl
            name="address"
            id="address"
            isRequired
            isInvalid={result.getErrors('address').length}
          >
            <Flex>
              <FormLabel htmlFor="address">Address</FormLabel>
              <Spacer />
              <FormErrorMessage mt={0} mb={2}>
                {result.getErrors('address')[0]}
              </FormErrorMessage>
            </Flex>
            <Input
              name="address"
              placeholder="address"
              size="md"
              onChange={e => handleChange(e.target.name, e.target.value)}
              value={formState.address}
            />
          </FormControl>
          <FormControl id="time" isRequired>
            <FormLabel htmlFor="time">Time</FormLabel>
            <Input placeholder="time" size="md" />
          </FormControl>
          <FormControl id="weight" isRequired>
            <FormLabel htmlFor="weight">Weight</FormLabel>
            <NumberInput defaultValue={15} precision={2} step={0.2}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>{' '}
          </FormControl>
          <FormControl id="remarks" isRequired>
            <FormLabel htmlFor="remarks">Remarks</FormLabel>
            <Textarea placeholder="Remarks for the delivery" />
          </FormControl>
          <Text fontSize="2xl">Recipient Details</Text>
          <FormControl id="job" isRequired>
            <FormLabel htmlFor="job">Name</FormLabel>
            <Input placeholder="Name" size="md" />
          </FormControl>
          <FormControl id="job" isRequired>
            <FormLabel htmlFor="job">Contact Number</FormLabel>
            <InputGroup>
              <InputLeftAddon children="+65" />
              <Input type="tel" placeholder="phone number" />
            </InputGroup>
          </FormControl>
          <Button colorScheme="teal" size="md">
            Save
          </Button>
          {/*<FormControl id="job" isRequired>*/}
          {/*  <FormLabel htmlFor="job">Job Name</FormLabel>*/}
          {/*  <Input placeholder="job" size="md" />*/}
          {/*</FormControl>*/}
          {/*<FormControl id="job" isRequired>*/}
          {/*  <FormLabel htmlFor="job">Job Name</FormLabel>*/}
          {/*  <Input placeholder="job" size="md" />*/}
          {/*</FormControl>*/}
          {/*<FormControl id="job" isRequired>*/}
          {/*  <FormLabel htmlFor="job">Job Name</FormLabel>*/}
          {/*  <Input placeholder="job" size="md" />*/}
          {/*</FormControl>*/}
          {/*<FormControl id="job" isRequired>*/}
          {/*  <FormLabel htmlFor="job">Remarks</FormLabel>*/}
          {/*  <Input placeholder="job" size="md" />*/}
          {/*</FormControl>*/}
        </VStack>
      </Box>
    </Flex>
  );
}

export default Home;
