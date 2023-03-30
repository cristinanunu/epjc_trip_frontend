import { Flex, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import ActivityGallery from "../components/ActivityGallery";
import Carousel from "../components/carousel/Carousel";
import FilterActivities from "../components/filterActivities/FilterActivities";
import { TripContext } from "../context/Context";


const Home = () => {
  const { isInputSearched, searchInputValue, recommendedActivities }: any =
    useContext(TripContext);
  
  const displayConsole =()=> {
    console.log(recommendedActivities);
    console.log(searchInputValue);
    console.log(isInputSearched);
    console.log(searchInputValue==recommendedActivities[0].city);
  }

  return (
    <Flex display="column" alignContent="space-between" alignItems="center">
      <Carousel />
      <FilterActivities/>

      {/* {!isInputSearched ? null : (searchInputValue ===
        recommendedActivities[0].city ? (
        <>
          <Heading> Results for {searchInputValue} </Heading>
          <ActivityGallery />
        </>
      ) : (
        <Heading> No results found for {searchInputValue}</Heading>
      ))}
      <button onClick={displayConsole}>Displayconsole</button> */}
      <ActivityGallery />
    </Flex>
  );
};
export default Home;
