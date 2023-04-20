import { Flex, Heading, Text } from "@chakra-ui/react";

const WhatsNext = () => (
  <Flex h="120px" bgColor="grey" px="30px" gap="30px">
    <Flex
      flexDir="column"
      bgColor="green"
      boxSize="80px"
      alignItems="center"
      justifyContent="center"
    >
      <Text>NVIDIA</Text>
      <Text>GTC</Text>
    </Flex>
    <Flex
      w="55%"
      flexDir="column"
      alignItems="flex-start"
      justifyContent="center"
    >
      <Heading size="md">
        Explore What&apos;s Next in AI, Accelerated Computing, and Beyond with
        the Best of GTC
      </Heading>
      <Heading size="md" color="limegreen">
        Watch On-Demand &gt;
      </Heading>
    </Flex>
  </Flex>
);

export default WhatsNext;
