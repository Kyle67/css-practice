import { Box, Flex, Heading, Text, chakra } from "@chakra-ui/react";
import { useState } from "react";

interface ContentProps {
  heading: string;
  body: string;
  textSide: "left" | "right";
  bgColor: string;
}

const content: ContentProps[] = [
  {
    heading: "Simulation",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    textSide: "left",
    bgColor: "lightblue",
  },
  {
    heading: "Simulation2",
    body: "text2",
    textSide: "left",
    bgColor: "lightblue2",
  },
];

const Hero = () => {
  const [slideNum, setSlideNum] = useState(0);
  return (
    <HeroContainer bgColor={content[slideNum].bgColor} p="50px">
      <Flex flexDir="row" flexBasis="95%" gap="30px">
        <Box boxSize="20px" bgColor="red" w="50%" />
        <Flex flexDir="column" w="50%">
          <Heading>{content[slideNum].heading}</Heading>
          <Text>{content[slideNum].body}</Text>
        </Flex>
      </Flex>
      <Flex flexDir="row" gap="20px">
        {content.map((slide, index) => (
          <Box
            key={slide.heading}
            bgColor={slideNum === index ? "green" : "grey"} // TODO: split based on time remaining on timer
            h="5px"
            w="100px"
          />
        ))}
      </Flex>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = chakra(Flex, {
  baseStyle: {
    width: "100%",
    height: "700px",
    bgColor: "white",
    flexDirection: "column",
    alignItems: "center",
  },
});
