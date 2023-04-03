import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { planUrl } from '../constants/api';
import axios from 'axios';
import { Button, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import AddedActivitiyCard from '../components/AddedActivitiyCard';

const PlanDetails = () => {
  let { id } = useParams();
  const [plan, setPlan]: any = useState({});

  useEffect(() => {
    getPlan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPlan = async () => {
    try {
      const response = await axios.get(planUrl + '/' + id);
      setPlan(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex direction={'column'} w={'3xl'} pt={40} mx={'auto'} justifyContent={'center'}>
      <Flex mb={6} w={'full'} justifyContent={'space-between'}>
        <Heading>{plan.name}</Heading>
        <Button colorScheme="blue">Edit plan</Button>
      </Flex>
      <Divider mb={6} />
      <Heading mb={6}>Activities</Heading>
      <Flex>
        {plan.activities ? (
          <Flex direction={'column'}>
            {plan.activities.map((activity: any) => (
              <AddedActivitiyCard activity={activity} />
            ))}
          </Flex>
        ) : (
          <Text>No activities added yet</Text>
        )}
      </Flex>
    </Flex>
  );
};

export default PlanDetails;
