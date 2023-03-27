import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, IconButton, useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <header>
      <Flex justifyContent={'space-between'} p={'5'}>
        <Heading>LOGO</Heading>
        <Flex display={{ sm: 'none', md: 'flex' }}>
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/myplan">
            My Plan
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </Flex>

        <IconButton display={{ md: 'none' }} onClick={onOpen} icon={<HamburgerIcon />} aria-label={'Menu button'} />
      </Flex>

      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay display={{ sm: 'flex', md: 'none' }} />
        <DrawerContent display={{ sm: 'flex', md: 'none' }}>
          <DrawerHeader display="flex" justifyContent="space-between" borderBottomWidth="1px">
            <Heading>LOGO</Heading>
            <IconButton onClick={onClose} icon={<CloseIcon />} aria-label={'Close button'} />
          </DrawerHeader>
          <DrawerBody display="flex" flexDirection="column">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/myplan">
              My Plan
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </header>
  );
};

export default Navbar;
