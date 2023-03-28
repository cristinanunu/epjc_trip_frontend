import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { TripContext } from './context/Context';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import Plan, { SavedPlan } from './pages/Plan';

export interface NewPlan {
  name: string;
  departure: string;
  destionation: string;
  startDate: string;
  endDate: string;
  participants: number;
  cost: number;
}

function App() {
  const [activities, setActivities] = useState([]);
  const [plans, setPlans] = useState<SavedPlan[]>([]);
  const [location, setLocation] = useState({});

  const client = axios.create({
    baseURL: 'https://epjctripapi.azurewebsites.net/api',
  })
  
  async function getPlan() {
    try {
      const response = await client.get('/Plans');
      setPlans(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  
  async function getActivities() {
    try {
      const response = await client.get('/Activities');
      setActivities(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const savePlan =async (plan: NewPlan) => {
    await postPlan(plan);
  }

  async function postPlan(plan: NewPlan) {
    try {
      const response = await client.post('/Plans', plan)
      const planData = response.data;
      console.log('response from post', response)
      console.log('this is plan data',planData);
      setPlans([...plans, planData])
    } catch (error) {
      throw new Error('The request to add a new developer was not successful. Try again.');
    }
  }
  useEffect(() => {
    getPlan();
    getActivities();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <TripContext.Provider value={{ activities, setActivities, plans, location, setLocation, savePlan }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myplan" element={<Plan />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </TripContext.Provider>
  );
}

export default App;
