import { Flex, chakra, Text, Center, Image, Box } from "@chakra-ui/react";

export const Playground = () => {
  return (
    <PageContainer gap="40px">
      <Center>
        <Text>Testing</Text>
      </Center>
      <Flex textAlign={"center"} flexDir={"row"}>
        <Text display="inline-block" position="relative">
          Centered
          <Image
            h="20px"
            // position={"absolute"}
            src="https://www.freeiconspng.com/uploads/cute-rabbit-png-12.png"
            alt=""
          />
        </Text>
      </Flex>
      <Flex justifyContent={"center"} borderWidth={1} borderColor={"red"}>
        <Text display="inline-block" position="relative">
          Looks at this text
          <Box
            bgColor="yellow"
            boxSize="10px"
            position="absolute"
            right="-20px"
            top="7px"
          />
        </Text>
      </Flex>
      <Flex
        flexDir={"row"}
        alignSelf={"center"}
        borderWidth={1}
        borderColor={"lightblue"}
      >
        <Text>Looks at this text2</Text>
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
