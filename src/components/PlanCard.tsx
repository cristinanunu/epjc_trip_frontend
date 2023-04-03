import { Button, Card, CardBody, Flex, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { planUrl } from '../constants/api';
import { useContext } from 'react';
import { TripContext } from '../context/Context';

const PlanCard = ({ plan }: any) => {
  const { setPlans, plans }: any = useContext(TripContext);

  const deletePlan = async (id: number) => {
    try {
      await axios.delete(planUrl + '/' + id);
      setPlans(plans.filter((plan: any) => plan.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card w={'full'} p={5}>
      <CardBody>
        <Heading mb={4}>{plan.name}</Heading>
        <Text mb={4}>Destination: {plan.destination}</Text>
        <Flex alignItems={'center'}>
          <Button
            onClick={() => {
              deletePlan(plan.id);
              return;
            }}
            colorScheme="red"
            mr={6}
          >
            Delete plan
          </Button>
          <Link to={`/travelplanner/${plan.id}`}>Go to plan</Link>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default PlanCard;
