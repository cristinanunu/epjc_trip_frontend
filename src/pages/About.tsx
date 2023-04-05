import { Text, Box, Divider, Grid, GridItem, Heading, Container } from '@chakra-ui/react';
import Developers from '../components/Developers';

const About = () => {
  return (
    <>
    <Container color={'gray.700'} pt={28} >
      <Heading  fontSize="4xl" m={{ base: 2, lg: 2, xl: 2 }} textAlign={'center'}>
        About us
      </Heading>
      <Divider  />
      <Developers />
      <Divider  />
    </Container>
      <Grid templateColumns={'repeat(4,1fr)'}  gridGap={2} m={'2rem auto'} w={'60%'}>
        <GridItem colSpan={{ base: 4, md: 1 }}>
          <Box borderColor="black" height={{ base: '5vh', md: 'fit-content' }}>
            <Heading fontSize={'2xl'} backgroundColor={'transparent'}>
              Who we are
            </Heading>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 4, md: 3 }} mb={{ base: 5, lg: 10 }}>
          <Box>
            <Text >
              We are a team of junior developers freshly graduated from the &lt;/salt&gt; School of Applied Technology of Amsterdam. This 3 months
              intensive program &#40;together with some previous experience in coding&#41; gave us the skills to produce this web application, that
              you can use anytime, anywhere.
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 4, md: 1 }}>
          <Box borderColor="black" height={{ base: '5vh', md: 'fit-content' }}>
            <Heading fontSize={'2xl'} backgroundColor={'transparent'}>
              Why EPjC Trip
            </Heading>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 4, md: 3 }} mb={{ base: 5, lg: 10 }}>
          <Box>
            <Text >
              EPjC is the acronym of our initials &#40;Enrico, Joakim, and Cristina...the P is another amazing former colleague, who is doing
              something else at the moment&#41;. <br /> Travelling is always needed, and it's a good break from the everyday routine. However, it
              always harder and harder to keep track of all the possible actitivies that you may choose to do, especially in a short amount of time.
              And that's when you can make your travel experience EPjC by using our web app!
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 4, md: 1 }}>
          <Box borderColor="black" height={{ base: '5vh', md: 'fit-content' }}>
            <Heading fontSize={'2xl'} backgroundColor={'transparent'}>
              Contact us
            </Heading>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 4, md: 3 }} h={'fit-content'}>
          <Box>
            <Text >
              If you want to know more about us you can contact us anytime. Take a look at our GitHub repositories and check our LinkedIn profiles.
            </Text>
          </Box>
        </GridItem>
      </Grid>
      </>
  );
};

export default About;
