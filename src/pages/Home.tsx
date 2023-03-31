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
        <Heading fontWeight={'normal'} py={4} textAlign="center">
          No results for {searchInputValue}
        </Heading>
      ) : (
        <>
          <Heading fontWeight={'normal'} py={4} textAlign="center">
            Results found for {searchInputValue}
          </Heading>
          <ActivityGallery />
        </>
      )}
    </Flex>
  );
};
export default Home;
