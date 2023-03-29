import { SearchIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, Input } from '@chakra-ui/react';
import axios from 'axios';
import { useContext, useState } from 'react';
import { epjcAttractions } from '../../constants/api';
import { TripContext } from '../../context/Context';
import travel from '../../assets/travel.jpg';
import Styles from './FilterActivities.module.css';
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
    <Box p={10} maxW="2xl" h="xs" m={{base:'1rem', md: 'auto'}} bgImage={travel} bgSize="cover" bgRepeat="no-repeat" >
      {/* <Heading
        textAlign="center"
        mb={5}
        fontSize={{ base: "1.5em", md: "2.5em" }}
        backgroundColor='green'
        color={'white'}
      >
        Where are we going?
      </Heading> */}
      <form onSubmit={getRecommendedActivities} className={Styles.locationForm}>
        <Flex >
          <Input value={inputValue} onChange={(e: any) => setInputValue(e.target.value)} placeholder="Type your destination (e.g. Paris, ecc.)" borderRadius={'10px'} />
          <IconButton type="submit" icon={<SearchIcon />} aria-label={'search activites by location'} borderRadius={'10px'} />
        </Flex>
      </form>
    </Box>
  );
};
export default FilterActivities;
