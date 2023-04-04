import { Card, CardBody, Text, Box, Stack, Heading, CardFooter, ButtonGroup, Link, Flex } from '@chakra-ui/react';
import { RatingStarContainer, RatingStar } from 'rating-star';

const AddedActivitiyCard = ({ activity }: any) => {
  console.log(activity);
  return (
    <Card color={'gray.700'} borderRadius={10} mb={6} shadow={'md'}>
      <CardBody>
        <Stack>
          <Box
            borderRadius={10}
            h={'300px'}
            mb={5}
            backgroundImage={activity.imageUrl}
            backgroundPosition={'bottom'}
            backgroundSize={'cover'}
            backgroundRepeat={'no-repeat'}
          ></Box>
          <Heading size="md">{activity.name}</Heading>
          <Text>{activity.description}</Text>
          <Flex alignItems={'center'}>
            <Text mt={'3px'}>Rating: {activity.rating}</Text>
            <RatingStarContainer>
              <RatingStar noBorder id={activity.location_id} rating={activity.rating} />
            </RatingStarContainer>
          </Flex>
          <Text fontWeight={'bold'}>{activity.ranking}</Text>
          <Text>Number of reviews: {activity.reviewsNumber}</Text>
          <Text>Address: {activity.street}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup display="flex" alignItems="center" spacing="5">
          <Link href={activity.link} isExternal>
            View on tripadvisor
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default AddedActivitiyCard;
