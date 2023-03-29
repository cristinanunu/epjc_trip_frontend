import { Text, Box, Divider, Grid, GridItem, Heading } from "@chakra-ui/react";

const About = () => {
  return (
    <main>
      <Heading
        fontSize="4xl"
        m={{ base: "2rem 1rem", lg: "2rem 5rem", xl: "2rem 12rem" }}
      >
        About us
      </Heading>
      <Divider
        orientation="horizontal"
        borderWidth={"1px"}
        color="epjc.peach"
        mb={"1rem"}
      />
      <Grid
        templateColumns={"repeat(4,1fr)"}
        p="4px"
        gridGap={3}
        m={{ base: "1rem", lg: "1rem 5rem", xl: "2rem 12rem" }}
      >
        <GridItem colSpan={{ base: 4, md: 1 }}>
          <Box borderColor="black" height={{ base: "10vh", md: "30vh" }}>
            <Heading
              fontSize={{ base: "2xl", md: "3xl" }}
              backgroundColor={"transparent"}
            >
              Who we are
            </Heading>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 4, md: 3 }}>
          <Box>
            <Text fontSize={{ base: "xl", md: "2xl" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              repellat officia sunt sed delectus soluta ipsam qui rem provident
              molestiae. Sint laborum eaque optio quas reiciendis, sed earum
              numquam nemo?
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 4, md: 1 }}>
          <Box borderColor="black" height={{ base: "10vh", md: "30vh" }}>
            <Heading
              fontSize={{ base: "2xl", md: "3xl" }}
              backgroundColor={"transparent"}
            >
              Why EPjC travel
            </Heading>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 4, md: 3 }}>
          <Box>
            <Text fontSize={{ base: "xl", md: "2xl" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              repellat officia sunt sed delectus soluta ipsam qui rem provident
              molestiae. Sint laborum eaque optio quas reiciendis, sed earum
              numquam nemo?
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 4, md: 1 }}>
          <Box borderColor="black" height={{ base: "10vh", md: "30vh" }}>
            <Heading
              fontSize={{ base: "2xl", md: "3xl" }}
              backgroundColor={"transparent"}
            >
              Contact us
            </Heading>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 4, md: 3 }}>
          <Box>
            <Text fontSize={{ base: "xl", md: "2xl" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              repellat officia sunt sed delectus soluta ipsam qui rem provident
              molestiae. Sint laborum eaque optio quas reiciendis, sed earum
              numquam nemo?
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </main>
  );
};

export default About;
