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
  InputGroup,
  InputLeftAddon,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Spacer,
} from '@chakra-ui/react';
import suite from '../../validate';
import Autocomplete, { usePlacesWidget } from 'react-google-autocomplete';

function JobScreen() {
  const [formState, setFormState] = useState({});
  const { ref } = usePlacesWidget({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    onPlaceSelected: place => {
      handleChange('address', place.formatted_address);
    },
    options: {
      types: ['address'],
      fields: ['formatted_address', 'geometry', 'name'],
      componentRestrictions: { country: 'sg' },
    },
  });

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
              placeholder="e.g 1 Raffles Quay"
              size="md"
              name="address"
              ref={ref}
              onChange={e => handleChange(e.target.name, e.target.value)}
            />
          </FormControl>
          <FormControl id="time" isRequired>
            <FormLabel htmlFor="time">Time</FormLabel>
            <Input placeholder="Time" size="md" />
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
          <Text fontSize="1xl">Recipient Details</Text>
          <FormControl id="contactName" isRequired>
            <FormLabel htmlFor="contactName">Name</FormLabel>
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

export default JobScreen;
