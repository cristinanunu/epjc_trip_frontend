import { Flex, Heading, Input, Button } from "@chakra-ui/react";

const SignupForm = () => {
  return (
    <form>
      <Flex direction={'column'} maxW="md" m={{ sm: 5, md: 'auto' }}>
        <Heading mb={5} fontSize="lg">
          Sign up
        </Heading>
        <Input variant="flushed" type="text" placeholder="Username..." />
        <Input my={5} variant="flushed" type="password" placeholder="Password..." />
        <Input mb={5} variant="flushed" type="password" placeholder="Repeat password..." />
        <Button>Log in</Button>
      </Flex>
    </form>
  );
};

export default SignupForm;
