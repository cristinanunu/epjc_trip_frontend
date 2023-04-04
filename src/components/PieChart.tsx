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
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        // 'rgba(255, 206, 86, 0.2)',
        // 'rgba(75, 192, 192, 0.2)',
        // 'rgba(153, 102, 255, 0.2)',
        // 'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        // 'rgba(255, 99, 132, 1)',
        'rgba(214, 64, 69, 1)',
        'rgba(198, 224, 255, 1)',
        // 'rgba(54, 162, 235, 1)',
        // 'rgba(255, 206, 86, 1)',
        // 'rgba(75, 192, 192, 1)',
        // 'rgba(153, 102, 255, 1)',
        // 'rgba(255, 159, 64, 1)',
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
      <Pie data={getChartData(co2ForTrip)} />;
    </>

  )
}