import { chakra, Flex } from "@chakra-ui/react";

export const PageContainer = chakra(Flex, {
  baseStyle: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "gray.700",
    color: "white",
    flexDirection: "column",
  },
});

export default PageContainer;
