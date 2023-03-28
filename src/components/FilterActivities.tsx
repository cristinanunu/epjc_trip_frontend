import { SearchIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, IconButton, Input } from '@chakra-ui/react';
import axios from 'axios';

const FilterActivities = () => {
  const getLocation = async () => {
    try {
      const response = await axios.get(
        'https://api.content.tripadvisor.com/api/v1/location/search?key=7C23E6E7D20B4DCF96588CBA6859738D&searchQuery=london&language=en'
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box maxW="md" m={{ sm: 5, md: "auto" }}>
      <Heading textAlign="center" mb={5}>
        Choose a location
      </Heading>

      <Flex>
        <Input placeholder="location..." />
        <IconButton
          onClick={getLocation}
          icon={<SearchIcon />}
          aria-label={"search activites by location"}
        />
      </Flex>
    </Box>
  );
};

export default FilterActivities;
