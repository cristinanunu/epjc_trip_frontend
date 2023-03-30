import { createContext, Dispatch, SetStateAction } from 'react';
import { NewPlan } from '../App';
import { RecommendedActivity } from '../components/ActivityGallery';
// import { RecommendedActivity } from '../components/ActivityGallery';

// export type tripContextType ={
//     isInputSearched:boolean, //set to false bcs on render the user hasn't searched for anything
//     setIsInputSearched: Dispatch<SetStateAction<boolean>>,
//     searchInputValue: string,//the actual value that the user puts  
//     setSearchInputValue : Dispatch<SetStateAction<string>>,
//     activities: RecommendedActivity[]
//     setActivities: any
//     plans: any
//     location: {}
//     setLocation: Dispatch<SetStateAction<string>>,
//     savePlan: (plan:NewPlan)=> Promise<void>
//     saveUpdatedPlan: (id:number,plan:NewPlan)=> Promise<void>
//     deletePlan: (id:number)=> void
//     recommendedActivities: RecommendedActivity[],
//     setRecommendedActivities: Dispatch<SetStateAction<never[]>>
//     loggedIn: boolean
//     setLoggedIn : Dispatch<SetStateAction<boolean>>
// }

// export const TripContext = createContext<tripContextType | undefined>(undefined);

export const TripContext = createContext({});
