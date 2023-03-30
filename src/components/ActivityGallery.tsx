import { Button, ButtonGroup, Text, Card, CardBody, CardFooter, Divider, Heading, Stack, Link, Flex, Image } from '@chakra-ui/react';
import { useContext } from 'react';
import { TripContext } from '../context/Context';

export interface RecommendedActivity {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  rating: number;
  price: number;
  street: string;
  activityLink: string;
  city:string
}

const ActivityGallery = () => {
  const { recommendedActivities } = useContext<any>(TripContext);

  return (
    <Flex flexDirection="column" maxW={{ sm: 'auto', md: '3xl' }} px={{ sm: 0, md: 5 }} m={{ sm: 5, md: 'auto' }}>
      {recommendedActivities.map((activity: RecommendedActivity) => (
        <Card key={activity.id} mb={5} w={'full'}>
          <CardBody>
            <Stack mt="6" spacing="3">
              <Heading size="md">{activity.name}</Heading>
              <Image src={activity.imageUrl} />
              <Text>{activity.description}</Text>
              <Text>Rating: {activity.rating}</Text>
              <Text color="blue.600" fontSize="2xl">
                €{activity.price}
              </Text>
              <Text>Address: {activity.street}</Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup display="flex" alignItems="center" spacing="5">
              <Button variant="solid" colorScheme="blue">
                Add to My plan
              </Button>
              <Link href={activity.activityLink} isExternal>
                Go to website
              </Link>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </Flex>
  );
};

export default ActivityGallery;
