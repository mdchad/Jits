import {
  Box,
  IconButton,
  Text,
  Flex,
  useColorModeValue,
  HStack,
  Menu,
  MenuButton,
  Avatar,
  VStack,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';
import { FiBell, FiChevronDown, FiMenu } from 'react-icons/fi';
import React from 'react';
import { useUser } from '../utils/useUser';
import { useHistory } from 'react-router-dom';

const MobileNav = ({ onOpen, user, ...rest }) => {
  const bg = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const { signOut } = useUser();
  const history = useHistory();

  async function onLogout() {
    let token = localStorage.getItem('refresh_token');
    try {
      if (token) {
        const { error } = await signOut(token);
        if (error) {
          throw error;
        }
        localStorage.removeItem('refresh_token');
        history.push('/login');
      }
    } catch (e) {
      localStorage.removeItem('refresh_token');
      history.push('/login');
      console.log(e);
    }
  }

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton py={2} _focus={{ boxShadow: 'none' }}>
                  <HStack>
                    <Avatar
                      size={'sm'}
                      src={
                        'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                      }
                    />
                    <VStack
                      display={{ base: 'none', md: 'flex' }}
                      alignItems="flex-start"
                      spacing="1px"
                      ml="2"
                    >
                      <Text fontSize="sm">{user?.name || 'Justina Clark'}</Text>
                      <Text fontSize="xs" color="gray.600">
                        Admin
                      </Text>
                    </VStack>
                    <Box display={{ base: 'none', md: 'flex' }}>
                      <FiChevronDown />
                    </Box>
                  </HStack>
                </MenuButton>
                {isOpen && (
                  <MenuList bg={bg} borderColor={borderColor}>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>Settings</MenuItem>
                    <MenuItem>Billing</MenuItem>
                    <MenuDivider />
                    <MenuItem onClick={onLogout}>Sign out</MenuItem>
                  </MenuList>
                )}
              </>
            )}
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default MobileNav;
