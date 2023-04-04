import { Box, Flex, Image, Link, Popover, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger } from '@chakra-ui/react';
import Joakim from '../assets/Joakim.jpg';
import Cristina from '../assets/Cristina.jpg';
import Enrico from '../assets/Enrico.jpg';
import norway from '../assets/norway.png';
import moldova from '../assets/moldova.png';
import italy from '../assets/italy.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

const Developers = () => (
  <Flex p={4} alignItems="center" gap={3} justifyContent={'space-around'} w={'100%'}>
    <Popover>
      <PopoverTrigger>
        <Box
          w={200}
          borderRadius={5}
          _hover={{
            border: 'solid 5px',
            borderColor: 'epjc.darkgreen',
            cursor: 'pointer',
            opacity: '0.8',
          }}
        >
          <Image src={Joakim} alt={'Joakim'} borderRadius={5} />
        </Box>
      </PopoverTrigger>

      <PopoverContent bg="white" color={'gray.700'}>
        <PopoverHeader fontWeight="semibold" border="0" display="flex" alignItems="left" justifyContent="left" p={2}>
          <Image src={norway} mr={2} />
          Joakim Myhre Wibe
        </PopoverHeader>
        <PopoverCloseButton color={'gray.700'} />
        <PopoverHeader fontWeight="semibold" border="0" display="flex" alignItems="left" justifyContent="left" p={2}>
          <Image src={linkedin} mr={2} />

          <Link href={'https://www.linkedin.com/in/joakim-myhre-wibe-a732ba237/'} isExternal>
            My LinkedIn profile
          </Link>
        </PopoverHeader>

        <PopoverFooter fontWeight="semibold" border="0" display="flex" alignItems="left" justifyContent="left" p={2}>
          <Image src={github} mr={2} />

          <Link href={'https://github.com/JoakimWibe'} isExternal>
            My GitHub repository
          </Link>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
    <Popover>
      <PopoverTrigger>
        <Box
          w={200}
          borderRadius={5}
          _hover={{
            border: 'solid 5px',
            borderColor: 'epjc.darkgreen',
            cursor: 'pointer',
            opacity: '0.8',
          }}
        >
          <Image src={Cristina} alt={'Cristina'} borderRadius={5} />
        </Box>
      </PopoverTrigger>

      <PopoverContent bg="white" color="black">
        <PopoverHeader fontWeight="semibold" border="0" display="flex" alignItems="left" justifyContent="left" p={2}>
          <Image src={moldova} mr={2} />
          Cristina Nunu
        </PopoverHeader>
        <PopoverCloseButton bg="epjc.darkgreen" color={'white'} />
        <PopoverHeader fontWeight="semibold" border="0" display="flex" alignItems="left" justifyContent="left" p={2}>
          <Image src={linkedin} mr={2} />

          <Link href={'https://www.linkedin.com/in/cristina-nunu-/'} isExternal>
            My LinkedIn profile
          </Link>
        </PopoverHeader>

        <PopoverFooter fontWeight="semibold" border="0" display="flex" alignItems="left" justifyContent="left" p={2}>
          <Image src={github} mr={2} />

          <Link href={'https://github.com/cristinanunu'} isExternal>
            My GitHub repository
          </Link>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
    <Popover>
      <PopoverTrigger>
        <Box
          w={200}
          borderRadius={5}
          _hover={{
            border: 'solid 5px',
            borderColor: 'epjc.darkgreen',
            cursor: 'pointer',
            opacity: '0.8',
          }}
        >
          <Image src={Enrico} alt={'Enrico'} borderRadius={5} />
        </Box>
      </PopoverTrigger>

      <PopoverContent bg="white" color="black">
        <PopoverHeader fontWeight="semibold" border="0" display="flex" alignItems="left" justifyContent="left" p={2}>
          <Image src={italy} mr={2} />
          Enrico Garozzo
        </PopoverHeader>
        <PopoverCloseButton bg="epjc.darkgreen" color={'white'} />
        <PopoverHeader fontWeight="semibold" border="0" display="flex" alignItems="left" justifyContent="left" p={2}>
          <Image src={linkedin} mr={2} />

          <Link href={'https://www.linkedin.com/in/enrico-garozzo1988/'} isExternal>
            My LinkedIn profile
          </Link>
        </PopoverHeader>

        <PopoverFooter fontWeight="semibold" border="0" display="flex" alignItems="left" justifyContent="left" p={2}>
          <Image src={github} mr={2} />

          <Link href={'https://github.com/enricogarozzo'} isExternal>
            My GitHub repository
          </Link>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  </Flex>
);

export default Developers;
