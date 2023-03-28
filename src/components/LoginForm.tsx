import { Button, Flex, Heading, Input } from '@chakra-ui/react';

const LoginForm = () => {
  return (
    <form>
      <Flex direction={'column'} maxW="md" m={{ sm: 5, md: 'auto' }}>
        <Heading mb={5} fontSize="lg">
          Log in
        </Heading>
        <Input variant="flushed" type="text" placeholder="Username..." />
        <Input my={5} variant="flushed" type="password" placeholder="Password..." />
        <Button>Log in</Button>
      </Flex>
    </form>
  );
};

export default LoginForm;
