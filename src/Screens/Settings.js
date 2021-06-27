import React from 'react';
import {
  Box, Flex,
} from '@chakra-ui/react';

function Settings() {
  return (
    <Flex bg="gray.200"
          height="100vh"
          justifyContent="center"
          alignItems="center"
          flexDirection="column">
      <h1>Settings where the heart is</h1>
    </Flex>
  );
}

export default Settings;
