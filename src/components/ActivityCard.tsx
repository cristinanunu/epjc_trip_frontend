import { Card, Link, Text, Image, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Alert, AlertIcon } from '@chakra-ui/react';
import axios from 'axios';
import { useContext, useState } from 'react';
import { TripContext } from '../context/Context';
import { RecommendedActivity } from './ActivityGallery';

interface ActivityProp {
  activity: RecommendedActivity;
}

const ActivityCard = ({ activity }: ActivityProp) => {
  const [success, setSuccess] = useState(false);
  const { loggedIn }: any = useContext(TripContext);
  const [addClicked, setAddClicked] = useState(false);

  const addToPlan = async () => {
    const planId = localStorage.getItem('planId');
    setAddClicked(true);

    setTimeout(() => {
      setAddClicked(false);
    }, 3000);

    if (planId !== null) {
      const parsedId = parseInt(planId);

      const newActivity = {
        id: 0,
        name: activity.name,
        description: activity.description,
        link: activity.activityLink,
        imageUrl: activity.imageUrl,
        price: activity.price,
        rating: activity.rating,
        street: activity.street,
        reviewsNumber: activity.reviewsNumber,
        city: activity.city,
        planId: parsedId,
      };

      try {
        await axios.post('https://epjctripapi.azurewebsites.net/api/Activities', newActivity);
        setSuccess(true);
      } catch (error) {
        console.log(error);
      }

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
  };

  return (
    <Card shadow={'md'} key={activity.id}>
      <CardBody>
        <Stack mb={8} spacing="3">
          <Heading size="md">{activity.name}</Heading>
          <Image height={{ sm: 'auto', md: '200px' }} borderRadius={5} src={activity.imageUrl} />
        </Stack>
        <Stack>
          <Text>{activity.description}</Text>
          <Text>Rating: {activity.rating}</Text>
          <Text fontSize="2xl">€{activity.price}</Text>
          <Text>Address: {activity.street}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup display="flex" alignItems="center" spacing="5">
          <Button onClick={addToPlan} variant="solid" border={'1px'} bg={'white'} color={'epjc.darkgreen'} borderColor={'epjc.darkgreen'}>
            Add to My plan
          </Button>

          <Link href={activity.activityLink} isExternal>
            Go to website
          </Link>
        </ButtonGroup>
      </CardFooter>
      {success && (
        <Alert status={'success'}>
          <AlertIcon />
          Activity added to plan
        </Alert>
      )}
      {addClicked === true && !loggedIn && (
        <Alert status={'info'}>
          <AlertIcon />
          Please log in to add an activity
        </Alert>
      )}
    </Card>
  );
};

export default ActivityCard;
