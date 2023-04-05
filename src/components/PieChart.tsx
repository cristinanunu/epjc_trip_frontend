import { Container } from '@chakra-ui/react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { MyTripCO2 } from './TravelForm';

ChartJS.register(ArcElement, Tooltip, Legend);

const getChartData = (co2ForTrip: MyTripCO2) => ({
  labels: [`Transport: ${co2ForTrip.transportType}`, `Accomodation: ${co2ForTrip.accomodationType}`],
  datasets: [
    {
      label: 'kg of CO2',
      data: [co2ForTrip.transportco2e, co2ForTrip.accomodationco2e],
      backgroundColor: [
        'rgb(183, 79, 111)',
        'rgb(128, 164, 237)',
      ],
      borderColor: [
        'rgb(183, 79, 111))',
        'rgb(128, 164, 237)',
      ],
      borderWidth: 1,
    },
  ],
});

interface PieChartProps {
  co2ForTrip: MyTripCO2;
}

export function PieChart({ co2ForTrip }: PieChartProps) {
  return (
    <>
      <h2>Total carbon footprint for your trip: {co2ForTrip.totalco2e} kg</h2>
      <Container w={"400px"} h={"400px"}>
        <Pie data={getChartData(co2ForTrip)} />
      </Container>
    </>

  )
}