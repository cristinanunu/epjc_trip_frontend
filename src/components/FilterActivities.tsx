import { SearchIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, IconButton, Input } from '@chakra-ui/react';
import axios from 'axios';
import { useContext, useState } from 'react';
import { epjcAttractions } from '../constants/api';
import { TripContext } from '../context/Context';
import travel from '../assets/travel.jpg';

const FilterActivities = () => {
  const [inputValue, setInputValue] = useState('');
  const { setIsInputSearched, setSearchInputValue, setRecommendedActivities }: any = useContext(TripContext);

  const getRecommendedActivities = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${epjcAttractions}${inputValue}`);
      setRecommendedActivities(response.data);
      setIsInputSearched(true);
      setSearchInputValue(inputValue);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      borderRadius={5}
      p={10}
      maxW={{ base: 'xl', md: '3xl' }}
      h="xxs"
      m={{ base: '1rem auto', md: 'auto' }}
      bgImage={travel}
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Heading
        textAlign="center"
        mb={20}
        fontSize={'3xl'}
        backgroundColor="epjc.darkgreen"
        color={'white'}
        p={1}
        fontWeight={'normal'}
        borderRadius={5}
      >
        Where are we going?
      </Heading>

      <form onSubmit={getRecommendedActivities}>
        <Flex borderRadius={'15px'}>
          <Input
            value={inputValue}
            onChange={(e: any) => setInputValue(e.target.value)}
            placeholder="Type your destination (e.g. Paris)"
            backgroundColor={'white'}
            borderRadius={'5px 0 0 5px'}
          />
          <IconButton
            borderRadius={'0 5px 5px 0'}
            bg={'white'}
            type="submit"
            icon={<SearchIcon />}
            aria-label={'search activites by location'}
            color={'epjc.darkgreen'}
            variant="customIconButton"
          />
        </Flex>
      </form>
    </Box>
  );
};
export default FilterActivities;
