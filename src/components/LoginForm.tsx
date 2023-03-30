import { Button, Flex, Heading, Input } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { loginUrl } from '../constants/api';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { TripContext } from '../context/Context';

const LoginForm = () => {
  const { setLoggedIn }: any = useContext(TripContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const login = async (data: any, e: any) => {
    e.preventDefault();

    const loginRequest = {
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post(loginUrl, loginRequest);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('name', response.data.name);
      localStorage.setItem('email', response.data.email);
      localStorage.setItem('userId', response.data.id);
      setLoggedIn(true);
      navigate('/myplan');
      reset();
    } catch (error) {
      console.log(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit(login)}>
      <Flex direction={'column'} maxW="md" m={{ sm: 5, md: 'auto' }}>
        <Heading mb={5} fontSize="lg">
          Log in
        </Heading>

        <Input defaultValue="" {...register('email')} variant="flushed" type="email" placeholder="Email..." />
        <Input my={5} defaultValue="" {...register('password')} variant="flushed" type="password" placeholder="Password..." />
        <Button type="submit">Log in</Button>
      </Flex>
    </form>
  );
};

export default LoginForm;
