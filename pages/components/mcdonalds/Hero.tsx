import { Flex } from "@chakra-ui/react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { GrLocation } from "react-icons/gr";
import { RiMenu5Line } from "react-icons/ri";

const Hero = () => (
  <Flex
    bgColor="skyblue"
    h="700px"
    w="100%"
    p="40px"
    gap="40px"
    justifyContent="flex-end"
  >
    <Flex boxSize="50px" bgColor="red" mr="auto" />
    <HiMagnifyingGlass size={35} color="white" />
    <GrLocation size={35} color="white" />
    <RiMenu5Line size={35} color="white" />
  </Flex>
);

export default Hero;
