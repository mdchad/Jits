import React from 'react';
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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/react';

function Home() {
  return (
    <Flex bg="gray.200"
          height="100vh"
          justifyContent="center"
          alignItems="center"
          flexDirection="column">
      <Box borderRadius="5" bg="white" p={5} width="500px">
        <VStack spacing={3}>
          <FormControl id="address" isRequired>
            <FormLabel htmlFor="address">Address</FormLabel>
            <Input placeholder="address" size="md" />
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
            </NumberInput>          </FormControl>
          <FormControl id="remarks" isRequired>
            <FormLabel htmlFor="remarks">Remarks</FormLabel>
            <Textarea placeholder="Remarks for the delivery" />
          </FormControl>
          <Text fontSize="2xl">Recipient Details</Text>
          <FormControl id="job" isRequired>
            <FormLabel htmlFor="job">Name</FormLabel>
            <Input placeholder="job" size="md" />
          </FormControl>
          <FormControl id="job" isRequired>
            <FormLabel htmlFor="job">Contact Number</FormLabel>
            <Input placeholder="job" size="md" />
          </FormControl>
          <Button colorScheme="teal" size="md">
            Button
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
