import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PlanForm from './components/PlanForm';
import { TripContext } from './context/Context';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import Plan, { SavedPlan } from './pages/Plan';

export interface NewPlan {
  name: string;
  departure: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  participants: number;
  cost: number;
}

function App() {
  const [activities, setActivities] = useState([]);
  const [plans, setPlans] = useState<SavedPlan[]>([]);
  const [location, setLocation] = useState({});
  const [recommendedActivities, setRecommendedActivities] = useState([]);
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('email') !== null);

  const client = axios.create({
    baseURL: 'https://epjctripapi.azurewebsites.net/api',
  });

  async function getPlan() {
    try {
      const response = await client.get('/Plans');
      setPlans(response.data);
    } catch (error) {
      throw new Error('The request was not successful. Please try again.');
      //console.log(error);
    }
  }

  async function getActivities() {
    try {
      const response = await client.get('/Activities');
      setActivities(response.data);
    } catch (error) {
      throw new Error('The request was not successful. Please try again.');
      //console.log(error);
    }
  }

  const savePlan = async (plan: NewPlan) => {
    await postPlan(plan);
  };

  async function postPlan(plan: NewPlan) {
    try {
      const response = await client.post('/Plans', plan);
      const planData = response.data;
      setPlans([...plans, planData]);
    } catch (error) {
      throw new Error('The request to add a new plan was not successful. Try again.');
    }
  }
  const deletePlan = (id: number) => {
    deletePlanById(id);
    const filterPlans = plans.filter(plan => plan.id !== id);
    setPlans(filterPlans);
  }

  async function deletePlanById(id: number) {
    try {
      await client.delete(`/Plans/${id}`);
    } catch (error) {
      throw new Error('The request was not successful. Please try again.')
      //console.log(error);
    }
  }

  const saveUpdatedPlan = async (id: number, plan: NewPlan) => {
    await updatePlan(id, plan);
  }

  async function updatePlan(id: number, plan: NewPlan) {
    try {
      const response = await client.put(`/Plans/${id}`, plan);
      console.log('updated plan', response)
      const planData = response.data;
      setPlans([...plans, planData]);
    } catch (error) {
      throw new Error('The request was not successful. Please try again.')
    }
  }
  useEffect(() => {
    getPlan();
    getActivities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TripContext.Provider
      value={{
        activities,
        setActivities,
        plans,
        location,
        setLocation,
        savePlan,
        saveUpdatedPlan,
        deletePlan,
        recommendedActivities,
        setRecommendedActivities,
        loggedIn,
        setLoggedIn,
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myplan" element={<Plan />} />
        <Route path='/updateplan' element={<PlanForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </TripContext.Provider>
  );
}

export default App;
