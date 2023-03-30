import { Text, Box, Divider, Grid, GridItem, Heading } from "@chakra-ui/react";
import Developers from "../components/Developers";

const About = () => {
  return (
    <main>
      <Heading
        fontSize="4xl"
        m={{ base: "2rem 1rem", lg: "2rem 5rem", xl: "2rem 12rem" }}
        textAlign={'center'}
      >
        About us
      </Heading>
      <Developers />
      <Divider
        orientation="horizontal"
        borderWidth={"1px"}
        m={"1rem auto"}
        w='50%'

      />
      <Grid
        templateColumns={"repeat(4,1fr)"}
        p="4px"
        gridGap={2}
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
              We are a team of junior developers freshly graduated from the 
              &lt; /salt &gt; School of Applied Technology of Amsterdam. This 3 months intensive
          program &#40; together with some previous experience in coding &#41; gave use the skills to produce this webpage application, that you can use anytime, anywhere.
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
              EPjC is the acronym of our initials &#40; Enrico, Joakim, and Cristina...the P is another amazing former colleague, who is doing something else at the moment &#41;. <br /> Travelling is always needed, and it's a good break from the everyday routine. However, it always harder and harder to keep track of all the possible actitivies that you may choose to do, especially in a short amount of time. And that's when you can make your travel experience EPjC by using our web app!
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
              If you want to know more about us you can contact us anytime. Follow us on our GitHub pages and in our LinkedIn profiles.
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </main>
  );
};

export default About;
