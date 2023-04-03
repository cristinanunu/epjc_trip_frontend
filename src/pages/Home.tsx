import { Flex, Heading } from '@chakra-ui/react';
import { useContext } from 'react';
import ActivityGallery from '../components/ActivityGallery';
import Banner from '../components/Banner';
import FilterActivities from '../components/FilterActivities';
import { TripContext } from '../context/Context';

const Home = () => {
  const { isInputSearched, searchInputValue, recommendedActivities }: any = useContext(TripContext);

  return (
    <Flex display="column" alignContent="space-between" alignItems="center">
      <Banner>
        <FilterActivities />
      </Banner>

      {!isInputSearched ? null : recommendedActivities.length < 1 ? (
        <Heading mt={10} color={'gray.700'} py={4} textAlign="center">
          No results for {searchInputValue}
        </Heading>
      ) : (
        <>
          <Heading mt={10} color={'gray.700'} py={4} textAlign="center">
            Showing results for: {searchInputValue}
          </Heading>
          <ActivityGallery />
        </>
      )}
    </Flex>
  );
};
export default Home;
