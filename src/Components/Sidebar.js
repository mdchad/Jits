import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Box,
  Link,
  useColorModeValue,
  Flex,
  Text,
  CloseButton,
  Icon,
} from '@chakra-ui/react';
import {
  FiList,
  FiHome,
  FiSettings,
  FiUsers,
  FiTrendingUp,
} from 'react-icons/fi';

const LinkItems = [
  { name: 'Dashboard', icon: FiHome, path: '/home' },
  { name: 'Jobs', icon: FiList, path: '/jobs' },
  { name: 'Customers', icon: FiUsers, path: '/customers' },
  { name: 'Settings', icon: FiSettings, path: '/settings' },
];

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('gray.900', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          color={'white'}
        >
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map(link => (
        <NavItem key={link.name} icon={link.icon} path={link.path}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, path, children, ...rest }) => {
  const { pathname } = useLocation();

  let isActive = false;
  if (pathname.includes(path)) {
    isActive = true;
  }

  return (
    <Link as={RouterLink} to={path} style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          color: path !== pathname && 'cyan.400',
        }}
        bg={isActive && 'cyan.400'}
        color={'white'}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: path !== pathname && 'cyan.400',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

export default SidebarContent;
