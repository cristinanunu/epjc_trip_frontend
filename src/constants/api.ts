import axios from 'axios';
import { NewPlan } from '../App';
import { SavedPlan } from '../pages/Plan';

export const travelAdvisorSearchUrl = 'https://travel-advisor.p.rapidapi.com/locations/search';
export const traveAdvisorAttractionsUrl = 'https://travel-advisor.p.rapidapi.com/attractions/list';
export const apiKey = '4887eda678mshdc0804b3f912ba8p11db58jsn1475c5f5dc16';
export const apiHost = 'travel-advisor.p.rapidapi.com';

export const loginUrl = 'https://epjctripapi.azurewebsites.net/login';
export const registerUrl = 'https://epjctripapi.azurewebsites.net/register';
export const userUrl = 'https://epjctripapi.azurewebsites.net/api/Users';

export const planUrl = 'https://epjctripapi.azurewebsites.net/api/Plans';

const client = axios.create({
  baseURL: 'https://epjctripapi.azurewebsites.net/api',
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
