import { Flex, chakra, Text, Center, Image, Box } from "@chakra-ui/react";

export const Playground = () => {
  return (
    <PageContainer gap="10px">
      <Center>
        <Text>Centered</Text>
      </Center>
      <Flex alignSelf={"center"} flexDir={"row"}>
        <Text display="inline-block" position="relative">
          Centered
          <Image
            h="20px"
            position={"absolute"}
            right="-20px"
            top="5px"
            src="https://www.freeiconspng.com/uploads/cute-rabbit-png-12.png"
            alt=""
          />
        </Text>
      </Flex>
      <Flex justifyContent={"center"} borderWidth={1} borderColor={"red"}>
        <Text display="inline-block" position="relative">
          Centered
          <Box
            bgColor="yellow"
            boxSize="10px"
            position="absolute"
            right="-20px"
            top="7px"
          />
        </Text>
      </Flex>
      <Flex alignSelf={"center"} borderWidth={1} borderColor={"lightblue"}>
        <Text display="inline-block" position="relative">
          Centered
          <Box
            bgColor="yellow"
            boxSize="10px"
            position="absolute"
            right="-20px"
            top="7px"
          />
        </Text>
      </Flex>
    </PageContainer>
  );
};

export default Playground;

const PageContainer = chakra(Flex, {
  baseStyle: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "gray.700",
    color: "white",
    flexDirection: "column",
  },
});
