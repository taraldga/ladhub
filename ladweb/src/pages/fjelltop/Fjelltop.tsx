import useStore from '../../hooks/useStore';
import React from 'react';
import {useQuery} from "react-query";
import { Heading, VStack } from '@chakra-ui/react';
import useAscents from '../../queries/useascents';



const Fjelltop = () => {
  const { tokens } = useStore();
  const {isLoading, error, data} = useAscents();

  return (
    <VStack>
      <Heading>Fjelltop</Heading>
      {data && data.map((item: any) => item.top.name)}
    </VStack>
  );
}


export default Fjelltop;