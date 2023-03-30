import { SearchIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, IconButton, Input } from '@chakra-ui/react';
import axios from 'axios';
import { useContext, useState } from 'react';
import { epjcAttractions } from '../../constants/api';
import { TripContext } from '../../context/Context';
import travel from '../../assets/travel.jpg';
import Styles from './FilterActivities.module.css';

const FilterActivities = () => {
  const [inputValue, setInputValue] = useState('');
  const { setIsInputSearched, setSearchInputValue, setRecommendedActivities, recommendedActivities}: any = useContext(TripContext);
  const getRecommendedActivities = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${epjcAttractions}${inputValue}`);
      setRecommendedActivities(response.data);
      console.log(response.data)
      console.log(recommendedActivities);
      setIsInputSearched(true); //is the input searched? if yes, render the card, otherwise don't
      setSearchInputValue(inputValue);
      console.log(inputValue); //I need this to pass the props to the home page
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box p={10} maxW={{base:"xl",md:"2xl"}} h="xxs" m={{base:'1rem auto', md: 'auto'}} bgImage={travel} bgSize="cover" bgRepeat="no-repeat"  >
      <Heading
        textAlign="center"
        mb={5}
        fontSize={{ base: "1.5rem", md: "2.5rem" }}
        backgroundColor='epjc.darkgreen'
        color={'white'}
      >
        Where are we going?
      </Heading>
      <form onSubmit={getRecommendedActivities} className={Styles.locationForm}>
        <Flex >
          <Input value={inputValue} onChange={(e: any) => setInputValue(e.target.value)} placeholder="Type your destination (e.g. Paris, ecc.)" 
          fontSize={{ base: "0.8rem", md: "1.6rem" }}
          border={'solid 3px black'}  />
          <IconButton type="submit" icon={<SearchIcon />} aria-label={'search activites by location'} border={'solid 3px black'}  />
        </Flex>
      </form>
    </Box>
  );
};
export default FilterActivities;
