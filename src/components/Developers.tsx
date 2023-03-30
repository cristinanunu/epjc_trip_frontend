import { Box, Flex, Image } from "@chakra-ui/react";
import Joakim from "../assets/Joakim.jpg";
import Cristina from "../assets/Cristina.jpg";
import Enrico from "../assets/Enrico.jpg";

const Developers = () => {
  return (
    <Flex
      justifyContent={"space-around"}
      m={'1rem'}
      p={"1rem"}
      alignItems={"center"}
      gap={{ base: "1rem", md: "1rem",lg: '1rem'}}
    >
      <Box width={'25%'} _hover={{ border: "solid 5px", borderColor:'epjc.darkgreen', cursor:'pointer', opacity:'0.8' }}>
        <Image src={Joakim} alt={"Joakim"}  />
      </Box>
      <Box width={'25%'}_hover={{ border: "solid 5px", borderColor:'epjc.darkgreen', cursor:'pointer', opacity:'0.8' }}>
        <Image src={Cristina} alt={"Cristina"} />
      </Box>
      <Box width={'25%'}_hover={{ border: "solid 5px", borderColor:'epjc.darkgreen', cursor:'pointer', opacity:'0.8' }}>
        <Image src={Enrico} alt={"Enrico"} />
      </Box>
    </Flex>
    
  );
};

export default Developers;
