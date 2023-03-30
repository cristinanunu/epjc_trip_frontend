import { Card, CardBody, Stack, Heading, Divider, CardFooter, Text, Image, Container, Button } from "@chakra-ui/react";
import moment from "moment";
import { useContext } from "react";
import PlanForm from "../components/PlanForm";
import { TripContext } from "../context/Context";

export interface SavedPlan {
  activities: []
  name: string;
  departure: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  id: number;
  participants: number;
  cost: number;
}

const Plan = () => {
  const { plans, deletePlan, activities }: any = useContext(TripContext);
  
  const handleDelete = (id: number) => {
    deletePlan(id);
  }

  return (
    <Container>
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
          
          <div>
            {activities.filter((activity: any) => activity.planId === plan.id).map(((planActivity: any) =>
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
                  {/* <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                      Buy now
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                      Add to cart
                    </Button>
                  </ButtonGroup> */}
                  <Text>Rating: {planActivity.rating}</Text>
                  <Text>Number of reviews: {planActivity.reviewsNumber}</Text>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      ))}
      <PlanForm />
    </Container>
  );
};

export default Plan;