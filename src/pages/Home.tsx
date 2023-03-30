import { Flex, Heading } from '@chakra-ui/react';
import { useContext } from 'react';
import ActivityGallery from '../components/ActivityGallery';
import Carousel from '../components/carousel/Carousel';
import FilterActivities from '../components/FilterActivities';
import { TripContext } from '../context/Context';

const Home = () => {
  const { isInputSearched, searchInputValue, recommendedActivities }: any = useContext(TripContext);

  return (
    <Flex display="column" alignContent="space-between" alignItems="center">
      <Carousel />
      <FilterActivities />

      {!isInputSearched ? null : recommendedActivities.length < 1 ? (
        <Heading> No Results for {searchInputValue} </Heading>
      ) : (
        <>
          <Heading> Results found for {searchInputValue}</Heading>
          <ActivityGallery />
        </>
      )}
    </Flex>
  );
};
export default Home;
