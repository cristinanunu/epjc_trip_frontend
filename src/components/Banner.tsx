import { Flex } from '@chakra-ui/react';
import { useContext } from 'react';
import Hero from '../assets/hero.jpg';
import { TripContext } from '../context/Context';

const Banner = ({ children }: any) => {
  const { recommendedActivities }: any = useContext(TripContext);

  return (
    <Flex
      className="banner"
      justifyContent={'center'}
      alignItems="center"
      backgroundImage={Hero}
      backgroundPosition={'bottom'}
      backgroundSize={'cover'}
      backgroundRepeat={'no-repeat'}
      direction={'column'}
      height={recommendedActivities.length < 1 ? '100vh' : 'auto'}
    >
      {children}
    </Flex>
  );
};

export default Banner;
