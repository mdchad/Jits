import React from 'react';
import { Text, Flex, Heading, Icon, Box, Link } from '@chakra-ui/react';
import { BsPlusCircle } from 'react-icons/all';
import { Link as RouterLink } from 'react-router-dom';
import CustomersList from './CustomersList';

function CustomerScreen() {
  return (
    <Flex
      bg="white"
      height="100vh" //@TODO: change height
      px={12}
      flexDirection="column"
    >
      <Heading mb={4}>Jobs</Heading>
      <Link
        as={RouterLink}
        to={'/customers/create'}
        style={{ textDecoration: 'none' }}
      >
        <Flex
          px={8}
          py={6}
          bg={'cyan.500'}
          width={300}
          borderRadius={'3xl'}
          mt={4}
          flexDirection="column"
          alignItems="center"
        >
          <Text color={'white'} fontWeight={'bold'} fontSize={'2xl'} mb={'2'}>
            Add a new customer
          </Text>
          <Text color={'white'} textAlign={'center'} mb={'4'}>
            Create customer to send your parcel to
          </Text>
          <Icon mt="4" fontSize="40" color={'white'} as={BsPlusCircle} />
        </Flex>
      </Link>
      <Box mt={8}>
        <CustomersList />
      </Box>
    </Flex>
  );
}

export default CustomerScreen;
