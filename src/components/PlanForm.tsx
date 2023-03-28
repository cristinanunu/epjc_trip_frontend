import { Button, Container, FormControl, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { TripContext } from '../context/Context'

const PlanForm = () => {
  const [myPlan, setMyPlan] = useState({
    name: '',
    departure: '',
    destination: '',
    startDate: '',
    endDate: '',
    participants: 0,
    cost: 0
  })
  const { name, departure, destination, startDate, endDate, participants, cost } = myPlan;
  const { savePlan }: any = useContext(TripContext);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMyPlan({...myPlan});
    savePlan(myPlan);
  }
  return (
    <Container>
      <form onSubmit={handleFormSubmit}>
        <FormControl >
          <FormLabel>Plan name</FormLabel>
          <Input value={name} onChange={e => setMyPlan({ ...myPlan, name: e.target.value })} placeholder='Plan name' required />
          <FormLabel>Departure</FormLabel>
          <Input value={departure} onChange={e => setMyPlan({ ...myPlan, departure: e.target.value })} placeholder='city of departure' />
          <FormLabel>Destination</FormLabel>
          <Input value={destination} onChange={e => setMyPlan({ ...myPlan, destination: e.target.value })} placeholder='destination' required />
          <FormLabel>Start Date</FormLabel>
          <Input value={startDate} onChange={e => setMyPlan({ ...myPlan, startDate: e.target.value })} type='date' required />
          <FormLabel>End Date</FormLabel>
          <Input value={endDate} onChange={e => setMyPlan({ ...myPlan, endDate: e.target.value })} type='date' required />
          <FormLabel>Number of participants</FormLabel>
          <NumberInput min={1}>
            <NumberInputField value={participants} onChange={e => setMyPlan({ ...myPlan, participants: +e.target.value })} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <FormLabel>Planed budget</FormLabel>
          <Input value={cost} onChange={e => setMyPlan({ ...myPlan, cost: +e.target.value })} placeholder='€ ' />
          <Button mt={4} type='submit'>Save plan</Button>
        </FormControl>
      </form>
    </Container>
  )
}

export default PlanForm