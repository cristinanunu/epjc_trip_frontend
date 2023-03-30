import { Box, Flex, Image, Tooltip } from "@chakra-ui/react";
import Joakim from "../assets/Joakim.jpg";
import Cristina from "../assets/Cristina.jpg";
import Enrico from "../assets/Enrico.jpg";

const Developers = () => {
  return (
    <Flex
      p={4}
      alignItems="center"
      gap={3}
      justifyContent={"space-around"}
      w={"100%"}
    >
      <Tooltip label=" Joakim">
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
          <Image src={Joakim} alt={"Joakim"} borderRadius={5} />
        </Box>
      </Tooltip>
      <Tooltip label=" Cristina">
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
          <Image src={Cristina} alt={"Cristina"} borderRadius={5} />
        </Box>
      </Tooltip>
      <Tooltip label=" Enrico">
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
      </Tooltip>
    </Flex>
  );
};

export default Developers;
