import { SearchIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, IconButton, Input } from "@chakra-ui/react";

const FilterActivities = () => {
  // const getLocation = async () => {
  //   const options = { method: "GET", headers: { accept: "application/json" }};
  //   fetch(
  //     "https://api.content.tripadvisor.com/api/v1/location/search?key=7C23E6E7D20B4DCF96588CBA6859738D&searchQuery=siracusa&language=en",
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => console.log(response))
  //     .catch((err) => console.error(err));
  // };

  return (
    <Box maxW="md" m={{ sm: 5, md: "auto" }}>
      <Heading textAlign="center" mb={5}>
        Choose a location
      </Heading>

      <Flex>
        <Input placeholder="location..." />
        <IconButton
          // onClick={getLocation}
          icon={<SearchIcon />}
          aria-label={"search activites by location"}
        />
      </Flex>
    </Box>
  );
};

export default FilterActivities;
