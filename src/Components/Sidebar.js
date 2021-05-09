import { Box, VStack, Link } from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from "react-router-dom"

function Sidebar() {
  return (
    <Box h={'100%'}
         w={'250px'}
         backgroundColor={'#020202'}
         color={"white"}>
      <VStack>
        <Link as={RouterLink} to="/home">
          Home
        </Link>
        <Link as={RouterLink} to="/settings">
          Settings
        </Link>
      </VStack>
    </Box>
  )
}

export default Sidebar