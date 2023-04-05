import {
  Flex
} from "@chakra-ui/react";
import DevCristinaCard from "./DevCristinaCard";
import DevEnricoCard from "./DevEnricoCard";
import DevJoakimCard from "./DevJoakimCard";


const Developers = () => {
  return (
    <Flex
      direction={'row'}
      p={4}
      alignItems="center"
      gap={3}
      justifyContent={"space-around"}
      w={"100%"}
    >
      <DevJoakimCard />
      <DevCristinaCard  />
      <DevEnricoCard />
    </Flex>
  );
};
export default Developers;
