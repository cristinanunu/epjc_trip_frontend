import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Grid,
  GridItem,
  Box,
  Image,
  Text,
  Link
} from "@chakra-ui/react";
import cristina from "../assets/Cristina.jpg";
import moldova from "../assets/moldova.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

const DevCristinaCard = () => {
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
          <Image src={cristina} alt={"Cristina"} borderRadius={5} />
        </Box>
      </PopoverTrigger>

      <PopoverContent  bg="gray.100" color="black" w={"fit-content"}>
        <Grid templateColumns="repeat(4, 1fr)" gap={1}>
          <GridItem colSpan={1} h="10" p={2}>
            <Image src={moldova} mr={2} sizes="sm" />
          </GridItem>
          <GridItem colSpan={3} h="10" p={2}>
            <Text fontWeight={"semibold"}>Cristina Nunu</Text>
          </GridItem>
          <GridItem colSpan={1} h="10" p={2}>
            <Image src={linkedin} mr={2} sizes="sm" />
          </GridItem>
          <GridItem colSpan={3} h="10" p={2}>
            <Link
              href={"https://www.linkedin.com/in/cristina-nunu-/"}
              isExternal
            >
              My LinkedIn profile
            </Link>
          </GridItem>
          <GridItem colSpan={1} h="10" p={2}>
            <Image src={github} mr={2} sizes="sm" />
          </GridItem>
          <GridItem colSpan={3} h="10" p={2}>

            <Link href={"https://github.com/cristinanunu"} isExternal>
              My GitHub repository
            </Link>
          </GridItem>
        </Grid>
      </PopoverContent>
    </Popover>
  );
};

export default DevCristinaCard;
