import { Flex } from '@chakra-ui/react';
import ActivityGallery from '../components/ActivityGallery';
import Carousel from '../components/carousel/Carousel';
import FilterActivities from '../components/FilterActivities';

const Home = () => {
  return (
    <Flex display="column">
      <Carousel />
      <FilterActivities />
      <ActivityGallery />
    </Flex>
  );
};

export default Home;
