import { Grid } from '@chakra-ui/react';
import { useContext } from 'react';
import { TripContext } from '../context/Context';
import ActivityCard from './ActivityCard';

export interface RecommendedActivity {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  rating: number;
  price: number;
  street: string;
  activityLink: string;
  city: string;
}

const ActivityGallery = () => {
  const { recommendedActivities } = useContext<any>(TripContext);

  return (
    <Grid gridTemplateColumns={{ sm: '1fr', md: '1fr 1fr' }} gap={6} maxW={"3xl"} my={6} mx={"auto"}>
      {recommendedActivities.map((activity: RecommendedActivity) => (
        <ActivityCard activity={activity} />
      ))}
    </Grid>
  );
};

export default ActivityGallery;
