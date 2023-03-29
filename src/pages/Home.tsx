import { Flex } from '@chakra-ui/react';
import ActivityGallery from '../components/ActivityGallery';
import Carousel from '../components/carousel/Carousel';
import FilterActivities from '../components/filterActivities/FilterActivities';
const Home = () => {
  return (
    <Flex display="column" alignContent='space-between' alignItems="center">
      <Carousel />
      <FilterActivities />
      <ActivityGallery />
    </Flex>
  );
};
export default Home;