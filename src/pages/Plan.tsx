import { Card, CardBody, Stack, Heading, Divider, CardFooter, Text, Image, Container, Button, useDisclosure } from "@chakra-ui/react";
import moment from "moment";
import { useEffect, useState } from "react";
import { NewPlan } from "../App";
import PlanForm from "../components/PlanForm";
import { deletePlanById, getPlan, postPlan, updatePlan } from "../constants/api";

export interface SavedPlan {
  id: number;
  name: string;
  departure: string;
  destination: string;
  startDate: string;
  endDate: string;
  participants: number;
  cost: number;
  activities: []
}

const Plan = () => {
  const [plans, setPlans] = useState<SavedPlan[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<SavedPlan | undefined>(undefined);

  const getPlanFromApi = async () => {
    const plans = await getPlan();
    setPlans(plans || []);
  }

  const savePlan = async (plan: NewPlan) => {
    const saveAPlan = await postPlan(plan);
    if (saveAPlan) {
      setPlans([...plans, saveAPlan]);
    }
  }

  const saveUpdatedPlan = async (id: number, plan: NewPlan) => {
    const updateAPlan = await updatePlan(id, plan);
    const updatedPlans = plans.map((plan) => {
      if (plan.id === id) {
        return updateAPlan;
      }
      return plan;
    })
    setPlans(updatedPlans);
  }

  const deletePlan = async (id: number) => {
    await deletePlanById(id);
    const filterPlans = plans.filter(plan => plan.id !== id);
    setPlans(filterPlans);
  }

  useEffect(() => {
    getPlanFromApi();
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDelete = (id: number) => {
    deletePlan(id);
  }

  const handleOnClick = (plan: SavedPlan) => {
    setSelectedPlan(plan);
    onOpen();
  }

  return (
    <Container>
      <Button onClick={onOpen}>Create plan</Button>
      {plans.map((plan: SavedPlan) => (
        <section key={plan.id}>
          <h2>{plan.name}</h2>
          <p>Departure: {plan.departure}</p>
          <p>Destination: {plan.destination}</p>
          <p>Start Date: {moment(plan.startDate).format('MMM Do YY')}</p>
          <p>End Date: {moment(plan.endDate).format('MMM Do YY')}</p>
          <p>Participants: {plan.participants}</p>
          <p>Cost of the trip: € {plan.cost}</p>
          <Button onClick={() => handleDelete(plan.id)}>Delete</Button>
          <Button onClick={() => handleOnClick(plan)}>Update</Button>
          <div>
            {plan.activities?.filter((activity: any) => activity.planId === plan.id).map(((planActivity: any) =>
              <Card maxW='sm' key={planActivity.id}>
                <CardBody>
                  <Image
                    src={planActivity.imageUrl}
                    alt='monument'
                    borderRadius='lg'
                  />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>{planActivity.name}</Heading>
                    <Text>{planActivity.description}</Text>
                    <Text>Address: {planActivity.street}</Text>
                    <Text>{planActivity.link}</Text>
                    <Text color='blue.600' fontSize='2xl'>Price: {planActivity.price}</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Text>Rating: {planActivity.rating}</Text>
                  <Text>Number of reviews: {planActivity.reviewsNumber}</Text>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      ))}
      <PlanForm savePlan={savePlan} saveUpdatedPlan={saveUpdatedPlan} isOpen={isOpen} onClose={onClose} plan={selectedPlan} />
    </Container>
  );
};

export default Plan;