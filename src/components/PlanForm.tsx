import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, Input, NumberInput, NumberInputField, useDisclosure } from '@chakra-ui/react'
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

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setMyPlan({ ...myPlan });
    savePlan(myPlan);
  }

  return (
    <>
      <Button onClick={onOpen}>Create plan</Button>
      <Drawer isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            Your plan
          </DrawerHeader>
          <DrawerBody>
            <form onSubmit={handleFormSubmit} id='my-form'>
              <Box>
                <FormLabel>Plan name</FormLabel>
                <Input value={name} onChange={e => setMyPlan({ ...myPlan, name: e.target.value })} placeholder='Plan name' />
              </Box>
              <Box>
                <FormLabel>Departure</FormLabel>
                <Input value={departure} onChange={e => setMyPlan({ ...myPlan, departure: e.target.value })} placeholder='city of departure' />
              </Box>
              <Box>
                <FormLabel>Destination</FormLabel>
                <Input value={destination} onChange={e => setMyPlan({ ...myPlan, destination: e.target.value })} placeholder='destination' />
              </Box>
              <Box>
                <FormLabel>Start Date</FormLabel>
                <Input value={startDate} onChange={e => setMyPlan({ ...myPlan, startDate: e.target.value })} type='date' />
              </Box>
              <Box>
                <FormLabel>End Date</FormLabel>
                <Input value={endDate} onChange={e => setMyPlan({ ...myPlan, endDate: e.target.value })} type='date' />
              </Box>
              <Box>
                <FormLabel>Number of participants</FormLabel>
                <NumberInput min={1}>
                  <NumberInputField value={participants} onChange={e => setMyPlan({ ...myPlan, participants: +e.target.value })} />
                </NumberInput>
              </Box>
              <Box>
                <FormLabel>Planed budget</FormLabel>
                <Input value={cost} onChange={e => setMyPlan({ ...myPlan, cost: +e.target.value })} placeholder='€ ' />
              </Box>
            </form>
          </DrawerBody>
          <DrawerFooter borderTopWidth='1px'>
            <Button onClick={onClose} mr={3}>Cancel</Button>
            <Button onClick={onClose} type='submit' form='my-form'>Save plan</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default PlanForm