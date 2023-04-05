import { useState, FormEvent } from "react";
import { FormLabel, Input, Select, Button, Container, NumberInput, NumberInputField, Flex, Box, Heading, Divider } from "@chakra-ui/react";
import axios from "axios";
import { PieChart } from "./PieChart";

interface TripStep {
  discovery: boolean;
  location: {
    placename: string;
  };
  transport?: {
    type: string;
    ways: number;
    people: number;
    vehicle?: {
      type: string;
      fuel?: {
        type: string;
      };
    };
  };
  accommodation?: {
    type: string;
    nights: number;
    people: number;
  };
};

interface CO2CalculatorFormData {
  from: string;
  transportType: string;
  ways: number;
  people: number;
  vehicleType: string;
  fuelType: string;
  to: string;
  accomodationType: string;
  accomodationNights: number;
  accommodationPeople: number;
}

export interface MyTripCO2 {
  totalco2e: number;
  transportType: string;
  transportco2e: number;
  accomodationType: string;
  accomodationco2e: number
}

const getData = (co2: any): MyTripCO2 => {
  return {
    totalco2e: co2.trips[0].co2e,
    transportType: co2.trips[0].steps[0].transport.title,
    transportco2e: co2.trips[0].steps[0].transport.co2e,
    accomodationType: co2.trips[0].steps[1].accommodation.title,
    accomodationco2e: co2.trips[0].steps[1].accommodation.co2e,
  }
}

const getTripSteps = (formData: CO2CalculatorFormData): TripStep[] => {
  return [
    {
      discovery: true,
      location: {
        placename: formData.from
      },
      transport: {
        ways: formData.ways,
        people: formData.people,
        type: formData.transportType,
        vehicle: formData.transportType !== 'flying' ? {
          type: formData.vehicleType,
          fuel: formData.fuelType ? {
            type: formData.fuelType
          } : undefined
        } : undefined
      }
    },
    {
      discovery: true,
      location: {
        placename: formData.to
      },
      accommodation: {
        type: formData.accomodationType,
        nights: formData.accomodationNights,
        people: formData.accommodationPeople
      }
    }
  ];
}

const TravelForm = () => {
  const [co2ForTrip, setco2ForTrip] = useState<MyTripCO2 | undefined>(undefined)
  const [formData, setFormData] = useState<CO2CalculatorFormData>({
    from: '',
    transportType: 'flying',
    ways: 1,
    people: 1,
    vehicleType: 'flight-regular-economy',
    fuelType: '',
    to: '',
    accomodationType: 'hotel',
    accomodationNights: 1,
    accommodationPeople: 1,
  })

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const sendData = {
      trips: [
        {
          steps: getTripSteps(formData)
        }
      ],
      save: false,
      language: 'en'
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/trips`, sendData, {
        headers: {
          "Content-Type": "application/json",
          'X-RapidAPI-Key': `${process.env.REACT_APP_ACCESS_KEY}`,
        },
      });

      const myTripData = getData(response.data)
      setco2ForTrip(myTripData);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    // <Flex pt={40} direction={'column'} maxW={'3xl'} mx={{ sm: 5, md: 'auto' }}>
    <Container pt={40}>
      <Heading color={'gray.700'} py={4}>Calculate carbon footprint</Heading>
      <Divider/>

      <form onSubmit={handleSubmit}>

        <FormLabel mt={5}>From</FormLabel>
        <Input
          type="text"
          name="from"
          value={formData.from}
          onChange={event => setFormData({ ...formData, from: event.target.value })}
        />
        <FormLabel mt={5}>Transport type</FormLabel>
        <Select
          name="transportType"
          value={formData.transportType}
          onChange={event => setFormData({ ...formData, transportType: event.target.value })}
        >
          <option value="driving">Driving</option>
          <option value="public-transport">Public transport</option>
          <option value="bicycling">Bicycle</option>
          <option value="flying">Flight</option>
        </Select>
        <Flex justifyContent={'space-between'}>
          <Box>
            <FormLabel mt={5}>Ways</FormLabel>
            <Select
              name="ways"
              value={formData.ways}
              onChange={event => setFormData({ ...formData, ways: +event.target.value })}
            >
              <option value="1">One way</option>
              <option value="2">Return</option>
            </Select>
          </Box>
          <Box>
            <FormLabel mt={5}>Number of people</FormLabel>
            <NumberInput min={1}>
              <NumberInputField name="people"
                value={formData.people}
                onChange={event => setFormData({ ...formData, people: +event.target.value })} />
            </NumberInput>
          </Box>
        </Flex>
        <FormLabel mt={5}>What type of vehicle?</FormLabel>
        <Select
          name="vehicleType"
          value={formData.vehicleType}
          onChange={event => setFormData({ ...formData, vehicleType: event.target.value })}
        >
          <option value="car-small">Small car</option>
          <option value="car-large">Large car</option>
          <option value="bicycle">Bicycle</option>
          <option value="bus">Bus</option>
          <option value="train">Train</option>
          <option value="flight-regular-economy">Flight</option>
        </Select>
        {formData.transportType !== 'flying'
          &&
          <>
            <FormLabel mt={5}>Fuel type of the vehicle</FormLabel>
            <Select
              name="fuelType"
              value={formData.fuelType}
              onChange={event => setFormData({ ...formData, fuelType: event.target.value })}
            >
              <option value="">Select option...</option>
              <option value="gasoline">Gasoline</option>
              <option value="diesel">Diesel</option>
              <option value="electricity">Electricity</option>
            </Select>
          </>
        }
        <FormLabel mt={5}>To</FormLabel>
        <Input
          type="text"
          name="to"
          value={formData.to}
          onChange={event => setFormData({ ...formData, to: event.target.value })}
        />
        <FormLabel mt={5}>Type of accomodation</FormLabel>
        <Select
          name="accomodationType"
          value={formData.accomodationType}
          onChange={event => setFormData({ ...formData, accomodationType: event.target.value })}
        >
          <option value="hotel">Hotel</option>
          <option value="hostel">Hostel</option>
          <option value="apartment">Apartment</option>
          <option value="room">Room</option>
          <option value="tent">Tent</option>
        </Select>
        <Flex justifyContent={'space-between'}>
          <Box>
            <FormLabel mt={5}>Number of nights</FormLabel>
            <NumberInput min={1}>
              <NumberInputField name="accomodationNights"
                value={formData.accomodationNights}
                onChange={event => setFormData({ ...formData, accomodationNights: +event.target.value })} />
            </NumberInput>
          </Box>
          <Box>
            <FormLabel mt={5}>Number of people</FormLabel>
            <NumberInput min={1}>
              <NumberInputField name="accommodationPeople"
                value={formData.accommodationPeople}
                onChange={event => setFormData({ ...formData, accommodationPeople: +event.target.value })} />
            </NumberInput>
          </Box>
        </Flex>
        <Button
          colorScheme={'blue'}
          mt={4}
          mb={4}
          type="submit">Calculate CO2 Footprint</Button>
      </form>
      {co2ForTrip && <PieChart co2ForTrip={co2ForTrip} />}
    </Container>
  );
};

export default TravelForm