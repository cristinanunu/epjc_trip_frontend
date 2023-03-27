import { SearchIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, IconButton, Input } from "@chakra-ui/react";

const FilterActivities = () => {
  

  return (
    <Box maxW="md" m={{ sm: 5, md: "auto" }}>
      <Heading textAlign="center" mb={5}>
        Choose a location
      </Heading>

      <Flex>
        <Input placeholder="location..." />
        <IconButton
         
          icon={<SearchIcon />}
          aria-label={"search activites by location"}
        />
      </Flex>
    </Box>
  );
};

export default FilterActivities;
