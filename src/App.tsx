import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { TripContext } from './context/Context';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import Plan from './pages/Plan';

export interface NewPlan {
  name: string;
  departure: string;
  destination: string;
  startDate: string;
  endDate: string;
  participants: number;
  cost: number;
}

function App() {
  const [location, setLocation] = useState({});
  const [recommendedActivities, setRecommendedActivities] = useState([]);
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('email') !== null);
  
  // const deletePlan = (id: number) => {
  //   deletePlanById(id);
  //   const filterPlans = plans.filter(plan => plan.id !== id);
  //   setPlans(filterPlans);
  // }

  // async function deletePlanById(id: number) {
  //   try {
  //     await client.delete(`/Plans/${id}`);
  //   } catch (error) {
  //     throw new Error('The request was not successful. Please try again.')
  //     //console.log(error);
  //   }
  // }

  return (
    <TripContext.Provider
      value={{
        location,
        setLocation,
        // deletePlan,
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
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </TripContext.Provider>
  );
}

export default App;
