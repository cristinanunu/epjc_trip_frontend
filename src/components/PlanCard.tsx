import { Button, Card, CardBody, Flex, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const PlanCard = ({ plan }: any) => {
  return (
    <Card w={'full'} p={5}>
      <CardBody>
        <Heading mb={4}>{plan.name}</Heading>
        <Text mb={4}>Destination: {plan.destination}</Text>
        <Flex alignItems={'center'}>
          <Button colorScheme="red" mr={6}>
            Delete plan
          </Button>
          <Link to={`/travelplanner/${plan.id}`}>Go to plan</Link>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default PlanCard;
