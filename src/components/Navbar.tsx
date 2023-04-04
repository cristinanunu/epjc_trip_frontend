import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Drawer, Text, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, IconButton, useDisclosure, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Image, Box } from '@chakra-ui/react';
import logo from '../assets/logo-green.png';
import logowhite from '../assets/logo-white.png';
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
      <Flex p={4} alignItems="center" justifyContent={'space-between'} bgColor="epjc.darkgreen" w={'100%'}>
        <Box borderRadius={'10px'}>
          <Image src={logowhite} alt="logo" boxSize="4rem" borderRadius={'10px'} />
        </Box>
        <Flex display={{ base: 'none', md: 'flex' }} justifyContent="center" alignItems="center" color="white" fontSize={'2xl'} fontWeight={'bold'}>
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/myplan">
            My Plan
          </Link>
          <Link className="nav-link" to="/co2calculator">
            CO2 Calculator
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>

          {loggedIn ? (
            <Text fontWeight={'normal'} backgroundColor={'epjc.darkgreen'}>
              Logged in as {localStorage.getItem('name')}
            </Text>
          ) : (
            <Link className="nav-link" to="/login">
              Login/Sign up
            </Link>
          )}

          {loggedIn && (
            <Button color={'epjc.darkgreen'} onClick={logout} ml={5}>
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
        <DrawerOverlay />
        <DrawerContent display={{ sm: 'flex', md: 'none' }}>
          <DrawerHeader display="flex" alignItems={'center'} justifyContent="space-between" borderBottomWidth="1px">
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
            <Link className="nav-link" to="/co2calculator">
              CO2 Calculator
            </Link>
            <Link className="nav-link" to="/about" onClick={onClose}>
              About
            </Link>

            {loggedIn ? (
              <Text>Logged in as {localStorage.getItem('name')}</Text>
            ) : (
              <Link className="nav-link" to="/login" onClick={onClose}>
                Login/Sign up
              </Link>
            )}

            {loggedIn && (
              <Button
                my={4}
                w={32}
                _hover={{ bg: 'white', color: 'epjc.darkgreen' }}
                background={'epjc.darkgreen'}
                border={'1px'}
                color={'white'}
                borderColor={'epjc.darkgreen'}
                onClick={logout}
              >
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
