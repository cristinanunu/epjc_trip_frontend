import { SearchIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, IconButton, Input } from '@chakra-ui/react';
import axios from 'axios';
import { useContext, useState } from 'react';
import { epjcAttractions } from '../constants/api';
import { TripContext } from '../context/Context';

const FilterActivities = () => {
  const [inputValue, setInputValue] = useState('');
  const { setRecommendedActivities }: any = useContext(TripContext);

  const getRecommendedActivities = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.get(`${epjcAttractions}${inputValue}`);
      setRecommendedActivities(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box pb={10} maxW="md" m={{ sm: 5, md: 'auto' }}>
      <Heading textAlign="center" mb={5}>
        Choose a City
      </Heading>

      <form onSubmit={getRecommendedActivities}>
        <Flex>
          <Input value={inputValue} onChange={(e: any) => setInputValue(e.target.value)} placeholder="City..." />
          <IconButton type="submit" icon={<SearchIcon />} aria-label={'search activites by location'} />
        </Flex>
      </form>
    </Box>
  );
};

export default FilterActivities;
