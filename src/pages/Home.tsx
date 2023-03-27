import { Flex } from '@chakra-ui/react';
import ActivityGallery from '../components/ActivityGallery';
import FilterActivities from '../components/FilterActivities';

const Home = () => {
  return (
    <Flex display="column">
      <FilterActivities />
      <ActivityGallery />
    </Flex>
  );
};

export default Home;
