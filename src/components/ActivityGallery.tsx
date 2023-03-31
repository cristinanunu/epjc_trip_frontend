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
  reviewsNumber: number;
  city: string;
}

const ActivityGallery = () => {
  const { recommendedActivities, loading } = useContext<any>(TripContext);

  return (
    <>
      {loading ? (
        <div className="col-sm-2">
          <div className="sp sp-3balls"></div>
        </div>
      ) : (
        <Grid gridTemplateColumns={{ sm: '1fr', md: '1fr 1fr' }} gap={6} maxW={'3xl'} my={6} mx={'auto'}>
          {recommendedActivities.map((activity: RecommendedActivity) => (
            <ActivityCard activity={activity} />
          ))}
        </Grid>
      )}
    </>
  );
};

export default ActivityGallery;
