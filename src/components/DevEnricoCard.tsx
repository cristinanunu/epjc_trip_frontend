import { Popover, PopoverTrigger, PopoverContent, Grid, GridItem, Box ,Image,Text, Link} from '@chakra-ui/react'

import italy from '../assets/italy.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import Enrico from '../assets/Enrico.jpg';

const DevEnricoCard = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Box
          w={200}
          borderRadius={5}
          _hover={{
            border: "solid 5px",
            borderColor: "epjc.darkgreen",
            cursor: "pointer",
            opacity: "0.8",
          }}
        >
          <Image src={Enrico} alt={"Enrico"} borderRadius={5} />
        </Box>
      </PopoverTrigger>

      <PopoverContent  bg="gray.100" color="black" w={"fit-content"}>
        <Grid templateColumns="repeat(4, 1fr)" gap={1}>
          <GridItem colSpan={1} h="10" p={2}>
            <Image src={italy} mr={2} sizes="sm" />
          </GridItem>
          <GridItem colSpan={3} h="10" p={2}>
            <Text fontWeight={"semibold"}>Enrico Garozzo</Text>
          </GridItem>
          <GridItem colSpan={1} h="10" p={2}>
            <Image src={linkedin} mr={2} sizes="sm" />
          </GridItem>
          <GridItem colSpan={3} h="10" p={2}>
            <Link 
              href='https://www.linkedin.com/in/enrico-garozzo1988/' 
              isExternal
            >
              My LinkedIn profile
            </Link>
          </GridItem>
          <GridItem colSpan={1} h="10" p={2}>
            <Image src={github} mr={2} sizes="sm" />
          </GridItem>
          <GridItem colSpan={3} h="10" p={2}>

            <Link href={'https://github.com/enricogarozzo'} isExternal>
              My GitHub repository
            </Link>
          </GridItem>
        </Grid>
      </PopoverContent>
    </Popover>
  )
}

export default DevEnricoCard

