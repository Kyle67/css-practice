import { Box, Flex } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";

const NavBar = () => (
  <Flex
    flexDir="row"
    h="50px"
    bgColor="white"
    alignItems="center"
    borderWidth={1}
    px="30px"
    justifyContent={"center"}
  >
    <Flex
      gap="20px"
      justifyContent={"flex-start"}
      marginRight={"auto"}
      flexBasis="200px"
    >
      <GiHamburgerMenu color="black" size={25} />
      <AiOutlineSearch color="black" size={30} />
    </Flex>
    <Box bgColor="lightblue" w="100px" h="35px" flexBasis="200px" />
    <Flex justifyContent={"flex-end"} marginLeft={"auto"} flexBasis="200px">
      <RxAvatar color="black" size={30} />
    </Flex>
  </Flex>
);
export default NavBar;
