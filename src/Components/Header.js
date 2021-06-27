import { Box, Center, IconButton, Text, Flex } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Header = ({ showSidebarButton = true, onShowSidebar }) => {
  return (
    <Flex p={4} justifyContent="center">
      <Box flex="1">
        {showSidebarButton && (
          <IconButton
            icon={<ChevronRightIcon w={8} h={8} />}
            colorScheme="blackAlpha"
            variant="outline"
            onClick={onShowSidebar}
          />
        )}
      </Box>
      <Center flex="1" h="40px">
        <Text fontSize="xl">JITSU</Text>
      </Center>
      <Box flex="1" />
      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  )
}

export default Header
