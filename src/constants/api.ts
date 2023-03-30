// export const tripAdvisorLocation = 'https://api.content.tripadvisor.com/api/v1/location/search';
// export const tripAdvisorKey = '7C23E6E7D20B4DCF96588CBA6859738D';

import axios from 'axios';
import { NewPlan } from '../App';
import { SavedPlan } from '../pages/Plan';

export const epjcAttractions = 'https://epjcattractions.azurewebsites.net/api/Activities?location=';
export const loginUrl = 'https://epjctripapi.azurewebsites.net/login';
export const registerUrl = 'https://epjctripapi.azurewebsites.net/register';

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
    const stringPlanId = response.data.id;
    localStorage.setItem('planId', stringPlanId);
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
