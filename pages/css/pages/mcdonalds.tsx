import Hero from "@/pages/components/mcdonalds/Hero";
import Hungry from "@/pages/components/mcdonalds/Hungry";
import { Flex, Text } from "@chakra-ui/react";

// Based off of https://mcdonalds.com.au/

const McDonalds = () => (
  <Flex flexDir="column">
    <Hero />
    <Hungry />
  </Flex>
);

export default McDonalds;
