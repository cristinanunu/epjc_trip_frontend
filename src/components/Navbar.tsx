import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Drawer,
  Text,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
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
      <Flex
        justifyContent={ "space-between" }
        p={"5"}
        position={"relative"}
        m={'3'}
        alignItems={'center'}
        padding={'1rem'}
      >
        <Heading top={'1'}
        >
          <Image
            src={logo}
            alt="logo"
            boxSize="4rem"
            ml={1.5}
          />
        </Heading>
        <Flex alignItems={'baseline'} display={{ base: 'none', md: 'flex' }} padding={'0.5rem'}>
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

        <IconButton display={{ md: 'none' }} onClick={onOpen} icon={<HamburgerIcon />} aria-label={'Menu button'} />
      </Flex>

      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay display={{ sm: "flex", md: "none" }} />
        <DrawerContent display={{ sm: "flex", md: "none" }}>
          <DrawerHeader
            display="flex"
            justifyContent="space-between"
            borderBottomWidth="1px"
          >
            <Heading><Image
            src={logo}
            alt="logo"
            boxSize="4rem"
          /></Heading>
            <IconButton
              onClick={onClose}
              icon={<CloseIcon />}
              aria-label={"Close button"}
            />
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </header>
  );
};

export default Navbar;
