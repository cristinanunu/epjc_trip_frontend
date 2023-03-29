import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Drawer, Text, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, IconButton, useDisclosure, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Image } from '@chakra-ui/react';
import logo from '../assets/logo-green.png';
import { useContext } from 'react';
import { TripContext } from '../context/Context';
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loggedIn, setLoggedIn }: any = useContext(TripContext);
  const logout = () => {
    localStorage.clear();
    setLoggedIn(false);
  };
  return (
    <header>
      <Flex justifyContent={'space-between'} p={'8'} alignItems={'center'} bgColor="green.200">
        <Image src={logo} alt="logo" boxSize="4rem" ml={2} />

        <Flex display={{ base: 'none', md: 'flex' }} padding={'0.5rem'}>
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/myplan">
            My Plan
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>

          {loggedIn ? (
            <Text>Logged in as {localStorage.getItem('email')}</Text>
          ) : (
            <Link className="nav-link" to="/login">
              Login/Sign up
            </Link>
          )}

          {loggedIn && (
            <Button onClick={logout} ml={5}>
              Log out
            </Button>
          )}
        </Flex>

        <IconButton
          display={{ md: 'none' }}
          onClick={onOpen}
          icon={<HamburgerIcon fontSize={'2rem'} />}
          aria-label={'Menu button'}
          boxSize="3.5rem"
        />
      </Flex>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay display={{ sm: 'flex', md: 'none' }} />
        <DrawerContent display={{ sm: 'flex', md: 'none' }}>
          <DrawerHeader display="flex" justifyContent="space-between" borderBottomWidth="1px">
            <Image src={logo} alt="logo" boxSize="5rem" />
            <IconButton onClick={onClose} icon={<CloseIcon />} aria-label={'Close button'} />
          </DrawerHeader>
          <DrawerBody display="flex" flexDirection="column">
            <Link className="nav-link" to="/" onClick={onClose}>
              Home
            </Link>
            <Link className="nav-link" to="/myplan" onClick={onClose}>
              My Plan
            </Link>
            <Link className="nav-link" to="/about" onClick={onClose}>
              About
            </Link>
            <Link className="nav-link" to="/login" onClick={onClose}>
              Login/Sign up
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </header>
  );
};
export default Navbar;
