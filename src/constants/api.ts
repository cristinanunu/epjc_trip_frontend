import axios from 'axios';
import { NewPlan } from '../App';
import { SavedPlan } from '../pages/Plan';

export const epjcAttractions = 'https://epjcattractions.azurewebsites.net/api/Activities?location=';
export const travelAdvisorSearchUrl = 'https://travel-advisor.p.rapidapi.com/locations/search';
export const traveAdvisorAttractionsUrl = 'https://travel-advisor.p.rapidapi.com/attractions/list';
export const apiHost = 'travel-advisor.p.rapidapi.com';
export const loginUrl = 'https://epjc-trip.azurewebsites.net/login';
export const registerUrl = 'https://epjc-trip.azurewebsites.net/register';
export const userUrl = 'https://epjc-trip.azurewebsites.net/api/Users';
export const planUrl = 'https://epjc-trip.azurewebsites.net/api/Plans';
export const activityUrl = 'https://epjc-trip.azurewebsites.net/api/Activities';

const client = axios.create({
  baseURL: 'https://epjc-trip.azurewebsites.net/api',
});

export async function getPlan(): Promise<SavedPlan[]> {
  try {
    const response = await client.get('/Plans');
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('The request was not successful. Please try again.');
  }
}

export async function postPlan(plan: NewPlan): Promise<SavedPlan> {
  try {
    const response = await client.post('/Plans', plan);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('The request to add a new plan was not successful. Try again.');
  }
}

export async function updatePlan(id: number, plan: NewPlan): Promise<SavedPlan> {
  try {
    const response = await client.put(`/Plans/${id}`, plan);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('The request was not successful. Please try again.');
  }
}

export async function deletePlanById(id: number): Promise<void> {
  try {
    await client.delete(`/Plans/${id}`);
  } catch (error) {
    console.log(error);
    throw new Error('The request was not successful. Please try again.');
  }
}
