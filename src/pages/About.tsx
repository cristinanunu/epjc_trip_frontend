import { Text, Box } from "@chakra-ui/react";

const About = () => {
  return (
    <div>
      <Box m={"2em"}
        backgroundColor='green'
        width='300px'
        border='1px'
        borderColor='black'>
        <Text fontSize="4xl" mb={"1rem"}>
          About us
        </Text>
        {/* <Divider
          orientation="horizontal"
          borderWidth={"5px"}
          color={"black"}
          mb={"1rem"}
        /> */}
        <Box
          width='290px'
          border='10px'
          borderColor='red'
          mt='1rem'
          backgroundColor='red'
          mr='1rem'
        >
          <Text fontSize="2xl">Who we are</Text>
          <Text >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            repellat officia sunt sed delectus soluta ipsam qui rem provident
            molestiae. Sint laborum eaque optio quas reiciendis, sed earum
            numquam nemo?
          </Text>
        </Box>
        <Box border={"100%"} borderColor={"black"} mt={"2rem"} bg={"#f6f6f6"}>
          <Text fontSize="2xl">Our background</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            repellat officia sunt sed delectus soluta ipsam qui rem provident
            molestiae. Sint laborum eaque optio quas reiciendis, sed earum
            numquam nemo?
          </Text>
        </Box>
        <Box border={"100%"} borderColor={"black"} mt={"2rem"} bg={"#f6f6f6"}>
          <Text fontSize="2xl">Contact us</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            repellat officia sunt sed delectus soluta ipsam qui rem provident
            molestiae. Sint laborum eaque optio quas reiciendis, sed earum
            numquam nemo?
          </Text>
        </Box>
      </Box>

      {/* <Grid
  h='200px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
>
  <GridItem rowSpan={2} colSpan={1} bg='blue' />
  <GridItem colSpan={2} bg='blue' />
  <GridItem colSpan={2} bg='blue' />
  <GridItem colSpan={4} bg='blue' />
</Grid> */}
    </div>
  );
};

export default About;
