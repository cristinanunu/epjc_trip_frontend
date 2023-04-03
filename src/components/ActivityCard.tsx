import { Card, Box, Link, Text, CardBody, Stack, Heading, CardFooter, ButtonGroup, Button, Alert, AlertIcon, Flex } from '@chakra-ui/react';
import axios from 'axios';
import { useContext, useState } from 'react';
import { TripContext } from '../context/Context';
import { RecommendedActivity } from './ActivityGallery';
import { RatingStar, RatingStarContainer } from 'rating-star';

interface ActivityProp {
  activity: RecommendedActivity;
}

const ActivityCard = ({ activity }: ActivityProp) => {
  const [success, setSuccess] = useState(false);
  const [planExists, setPlanExists] = useState(false);
  const { loggedIn }: any = useContext(TripContext);
  const [addClicked, setAddClicked] = useState(false);

  console.log(activity);

  const addToPlan = async () => {
    const planId = localStorage.getItem('planId');
    setAddClicked(true);

    const image = activity.photo.images.medium.url === undefined ? 'no image url available' : activity.photo.images.medium.url;

    setTimeout(() => {
      setAddClicked(false);
    }, 3000);

    if (planId !== null) {
      const parsedId = parseInt(planId);
      setPlanExists(true);

      const newActivity = {
        id: 0,
        name: activity.name,
        description: activity.description,
        link: activity.web_url,
        imageUrl: image,
        price: 0,
        rating: activity.rating,
        street: activity.address,
        reviewsNumber: activity.num_reviews,
        city: activity.address_obj.city,
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
    <Card borderRadius={10} shadow={'md'} key={activity.id} color={'gray.700'}>
      <CardBody>
        <Stack>
          <Box
            borderRadius={10}
            h={'300px'}
            mb={5}
            backgroundImage={activity.photo.images.medium.url}
            backgroundPosition={'bottom'}
            backgroundSize={'cover'}
            backgroundRepeat={'no-repeat'}
          ></Box>
          <Heading size="md">{activity.name}</Heading>
          <Text textOverflow={'ellipsis'} wordBreak={'break-word'} lineHeight={5} overflow={'hidden'} maxH={20}>
            {activity.description}
          </Text>
          <Flex alignItems={'center'}>
            <Text mt={'3px'}>Rating: {activity.rating}</Text>
            <RatingStarContainer>
              <RatingStar noBorder id={activity.location_id} rating={activity.rating} />
            </RatingStarContainer>
          </Flex>
          <Text fontWeight={'bold'}>{activity.ranking}</Text>
          <Text>Number of reviews: {activity.num_reviews}</Text>
          <Text>Address: {activity.address}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup display="flex" alignItems="center" spacing="5">
          <Button onClick={addToPlan} variant="solid" border={'1px'} bg={'white'} color={'blue.400'} borderColor={'epjc.darkgreen'}>
            Add to My plan
          </Button>

          <Link href={activity.web_url} isExternal>
            View on Tripadvisor
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
      {addClicked === true && loggedIn === true && !planExists && (
        <Alert status={'info'}>
          <AlertIcon />
          Please Create a plan on "my plan" page before adding activites
        </Alert>
      )}
    </Card>
  );
};

export default ActivityCard;
