import { Heading, Divider, Text, Button, useDisclosure, Flex, Grid } from '@chakra-ui/react';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { NewPlan } from '../App';
import ActivityCard from '../components/ActivityCard';
import PlanForm from '../components/PlanForm';
import { deletePlanById, getPlan, postPlan, updatePlan } from '../constants/api';

export interface SavedPlan {
  id: number;
  name: string;
  departure: string;
  destination: string;
  startDate: string;
  endDate: string;
  participants: number;
  cost: number;
  activities: [];
}

const Plan = () => {
  const [plans, setPlans] = useState<SavedPlan[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<SavedPlan | undefined>(undefined);

  const getPlanFromApi = async () => {
    const plans = await getPlan();
    setPlans(plans || []);
  };

  const savePlan = async (plan: NewPlan) => {
    const saveAPlan = await postPlan(plan);
    if (saveAPlan) {
      setPlans([...plans, saveAPlan]);
    }
  };

  const saveUpdatedPlan = async (id: number, plan: NewPlan) => {
    const updateAPlan = await updatePlan(id, plan);
    const updatedPlans = plans.map(plan => {
      if (plan.id === id) {
        return updateAPlan;
      }
      return plan;
    });
    setPlans(updatedPlans);
  };

  const deletePlan = async (id: number) => {
    await deletePlanById(id);
    const filterPlans = plans.filter(plan => plan.id !== id);
    setPlans(filterPlans);
  };

  useEffect(() => {
    getPlanFromApi();
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDelete = (id: number) => {
    console.log(id);
    deletePlan(id);
  };

  const handleOnClick = (plan: SavedPlan) => {
    setSelectedPlan(plan);
    onOpen();
  };

  return (
    <Flex mt={10} direction={'column'} maxW={'3xl'} mx={{ sm: 5, md: 'auto' }}>
      <Flex alignItems={'center'} justifyContent={'space-between'}>
        <Heading py={4}>My Plan</Heading>
        <Button
          _hover={{ bg: 'white', color: 'epjc.darkgreen' }}
          background={'epjc.darkgreen'}
          border={'1px'}
          color={'white'}
          borderColor={'epjc.darkgreen'}
          onClick={onOpen}
        >
          Create plan
        </Button>
      </Flex>

      <Divider mb={4} />

      <Flex>
        {plans.map((plan: SavedPlan) => (
          <Flex direction={'column'} key={plan.id}>
            <Heading mb={4} fontSize={'3xl'}>
              {plan.name}
            </Heading>
            <Grid gap={4} mb={4} gridTemplateColumns={'1fr 1fr'}>
              <Text>Departure: {plan.departure}</Text>
              <Text>Destination: {plan.destination}</Text>
              <Text>Start Date: {moment(plan.startDate).format('YYYY-MM-DD')}</Text>
              <Text>End Date: {moment(plan.endDate).format('YYYY-MM-DD')}</Text>
              <Text>Participants: {plan.participants}</Text>
              <Text>Cost of the trip: € {plan.cost}</Text>
            </Grid>
            <Flex my={8}>
              <Button
                background={'epjc.darkgreen'}
                border={'1px'}
                color={'white'}
                borderColor={'epjc.darkgreen'}
                mr={6}
                onClick={() => handleOnClick(plan)}
                _hover={{ bg: 'white', color: 'epjc.darkgreen' }}
              >
                Update
              </Button>
              <Button background={'white'} border={'1px'} borderColor={'red.500'} color={'red.500'} onClick={() => handleDelete(plan.id)}>
                Delete
              </Button>
            </Flex>

            <Divider mb={4} />

            <Heading fontSize={'3xl'} mb={8}>
              Activities
            </Heading>
            <Grid mb={8} gap={6} gridTemplateColumns={{ sm: '1fr', md: '1fr 1fr' }}>
              {plan.activities
                ?.filter((activity: any) => activity.planId === plan.id)
                .map((planActivity: any) => (
                  <ActivityCard key={planActivity.id} activity={planActivity} />
                ))}
            </Grid>
          </Flex>
        ))} 
      </Flex>
      <PlanForm savePlan={savePlan} saveUpdatedPlan={saveUpdatedPlan} isOpen={isOpen} onClose={onClose} plan={selectedPlan} />
    </Flex>
  );
};

export default Plan;
