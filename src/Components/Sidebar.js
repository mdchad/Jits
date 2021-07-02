import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
  Link,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faHome, faTasks } from '@fortawesome/free-solid-svg-icons';

const SidebarContent = ({ onClick }) => {
  const { pathname } = useLocation();
  return (
    <VStack spacing={6} alignItems="flex-start">
      <Link
        as={RouterLink}
        to="/home"
        _hover={{ textDecoration: 'none' }}
        color={pathname !== '/home' && 'gray.400'}
        mt={8}
        fontWeight={600}
      >
        <FontAwesomeIcon icon={faHome} /> Home
      </Link>
      <Link
        as={RouterLink}
        to="/jobs"
        _hover={{ textDecoration: 'none' }}
        color={pathname !== '/jobs' && 'gray.400'}
        fontWeight={600}
      >
        <FontAwesomeIcon icon={faTasks} /> Jobs
      </Link>
      <Link
        as={RouterLink}
        to="/settings"
        _hover={{ textDecoration: 'none' }}
        color={pathname !== '/settings' && 'gray.400'}
        fontWeight={600}
      >
        <FontAwesomeIcon icon={faCog} /> Settings
      </Link>
    </VStack>
  );
};

const Sidebar = ({ isOpen, variant, onClose }) => {
  return variant === 'sidebar' ? (
    <Box
      position="fixed"
      left={0}
      pt={12}
      px={8}
      w="200px"
      top={0}
      h="100%"
      bg="#020202"
      color="#FFF"
    >
      <SidebarContent onClick={onClose} />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Chakra-UI</DrawerHeader>
          <DrawerBody>
            <SidebarContent onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;
