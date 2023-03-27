import { Grid } from '@chakra-ui/react';

const ActivityGallery = () => {
  return <Grid gridTemplateColumns={{sm: "1fr", md: "1fr 1fr"}} maxW="xl" m={{ sm: 5, md: 'auto' }}></Grid>;
};

export default ActivityGallery;
