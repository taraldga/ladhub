import useStore from '../../hooks/useStore';
import { Heading, VStack } from '@chakra-ui/react';
import useAscents from '../../queries/useascents';



const Fjelltop = () => {
  const {isLoading, error, data} = useAscents();

  return (
    <VStack>
      <Heading>Fjelltop</Heading>
      {data && data.map((item: any) => item.top.name)}
    </VStack>
  );
}


export default Fjelltop;