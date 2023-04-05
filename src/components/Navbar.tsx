import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Drawer,
  Text,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  useDisclosure,
  Button,
  Heading,
} from '@chakra-ui/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SiYourtraveldottv } from 'react-icons/si';
import { useContext } from 'react';
import { TripContext } from '../context/Context';
const Navbar = () => {
  const location = useLocation().pathname;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loggedIn, setLoggedIn }: any = useContext(TripContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    setLoggedIn(false);
    navigate('/');
  };

  return (
    <header>
      <Flex p={4} alignItems="center" shadow={'md'} justifyContent={'space-between'} w={'100%'} >
        <Link to={'/'}>
          <Flex alignItems={'center'}>
            <Heading fontSize='3xl' mr={4} color={'gray.700'}>
              EPjC TRIP
            </Heading>
            <SiYourtraveldottv className="logo" />
          </Flex>
        </Link>

        <Flex display={{ base: 'none', md: 'flex' }} justifyContent="center" alignItems="center" color="white" fontSize={'2xl'} fontWeight={'bold'}>
          <Link className={location === '/' ? 'active' : 'nav-link'} to="/">
            <Text fontSize={'xl'}>Home</Text>
          </Link>
          {loggedIn && (
            <Link className={location === '/travelplanner' ? 'active' : 'nav-link'} to="/travelplanner">
              <Text fontSize={'xl'}>Travel Planner</Text>
              
            </Link>
          )}

          {loggedIn && (
            <Link className={location === '/co2calculator' ? 'active' : 'nav-link'} to="/co2calculator">
             <Text fontSize={'xl'}>CO2 Calculator</Text>
              
            </Link>
          )}
          <Link className={location === '/about' ? 'active' : 'nav-link'} to="/about">
          <Text fontSize={'xl'}>About</Text>
              
          </Link>

          {loggedIn ? (
            <Text fontSize={'xl'} fontWeight={'normal'} color={'black'}>
              Logged in as {localStorage.getItem('name')}
            </Text>
          ) : (
            <Link className="nav-link" to="/login">
                 <Text fontSize={'xl'}>Login/Sign up</Text>
              
            </Link>
          )}

          {loggedIn && (
            <Button colorScheme="blue" onClick={logout} ml={5}>
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
            <Link to="/">
              <Flex alignItems={'center'}>
                <Heading mr={4} color={'gray.700'}>
                  Epjc Trip
                </Heading>
                <SiYourtraveldottv className="logo" />
              </Flex>
            </Link>

            <IconButton onClick={onClose} icon={<CloseIcon />} aria-label={'Close button'} />
          </DrawerHeader>
          <DrawerBody background={'#fafafa'} display="flex" flexDirection="column" pt={20}>
            <Link className={location === '/' ? 'active' : 'nav-link'} to="/" onClick={onClose}>
              Home
            </Link>
            {loggedIn && (
              <Link className={location === '/travelplanner' ? 'active' : 'nav-link'} to="/travelplanner" onClick={onClose}>
                Travel Planner
              </Link>
            )}
            {loggedIn && (
              <Link className={location === '/co2calculator' ? 'active' : 'nav-link'} to="/co2calculator" onClick={onClose}>
                CO2 Calculator
              </Link>
            )}
            <Link className={location === '/about' ? 'active' : 'nav-link'} to="/about" onClick={onClose}>
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
              <Button my={4} w={32} colorScheme="blue" onClick={logout}>
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
