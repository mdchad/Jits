import React from 'react';
import { Flex, Box, Heading, Text, Icon } from '@chakra-ui/react';
import { BsPlusCircle } from 'react-icons/all';

function Settings() {
  return (
    <Flex bg="white" height="100vh" px={8} flexDirection="column">
      <Heading mb={4}>Dashboard</Heading>
      {/*<Flex*/}
      {/*  px={8}*/}
      {/*  py={6}*/}
      {/*  bg={'cyan.500'}*/}
      {/*  width={300}*/}
      {/*  borderRadius={'3xl'}*/}
      {/*  mt={4}*/}
      {/*  flexDirection="column"*/}
      {/*  alignItems="center"*/}
      {/*>*/}
      {/*  <Text color={'white'} fontWeight={'bold'} fontSize={'2xl'} mb={'2'}>Add a new job</Text>*/}
      {/*  <Text color={'white'} textAlign={'center'} mb={'4'}>Create a new delivery here for the day</Text>*/}
      {/*  <Icon*/}
      {/*    mt="4"*/}
      {/*    fontSize="40"*/}
      {/*    color={'white'}*/}
      {/*    as={BsPlusCircle}*/}
      {/*  />*/}
      {/*</Flex>*/}
    </Flex>
  );
}

export default Settings;
