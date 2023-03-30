import { Card, Link, Text, Image, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react';
import { RecommendedActivity } from './ActivityGallery';

interface ActivityProp {
  activity: RecommendedActivity;
}

const ActivityCard = ({ activity }: ActivityProp) => {
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
          <Button variant="solid" border={'1px'} bg={'white'} color={'epjc.darkgreen'} borderColor={'epjc.darkgreen'}>
            Add to My plan
          </Button>

          <Link href={activity.activityLink} isExternal>
            Go to website
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ActivityCard;
