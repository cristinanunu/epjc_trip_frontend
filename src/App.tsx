import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { TripContext } from './context/Context';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import Plan from './pages/Plan';

function App() {
  const [activities, setActivities] = useState([]);
  const [plans, setPlans] = useState([]);
  const [location, setLocation] = useState({});
  const [recommendedActivities, setRecommendedActivities] = useState([]);

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
  useEffect(() => {
    getPlan();
    getActivities();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <TripContext.Provider value={{ activities, setActivities, plans, location, setLocation, recommendedActivities, setRecommendedActivities }}>
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
