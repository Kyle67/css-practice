import { Flex, Center, useBoolean, chakra } from "@chakra-ui/react";

const Switch = () => {
  const [isOn, setIsOn] = useBoolean(false);
  return (
    <Flex w="100%" h="100%" mt="100px" justifyContent="center">
      <Center transform="scale(2)">
        <SwitchContainer backgroundColor={isOn ? "#002832" : "#0072E0"}>
          <SwitchButton
            onClick={setIsOn.toggle}
            left={isOn ? "50px" : "0px"}
            backgroundColor={isOn ? "#CECECE" : "#EDC600"}
          >
            {isOn && (
              <Flex>
                <MoonCrater
                  boxSize="12px" // TODO: these show up as soon as you click it, rather than after it has moved
                  borderRadius="6px"
                  left="10px"
                  top="20px"
                />
                <MoonCrater
                  boxSize="9px"
                  borderRadius="4.5px"
                  left="5px"
                  top="7px"
                />
                <MoonCrater
                  boxSize="10px"
                  borderRadius="5px"
                  left="4px"
                  top="20px"
                />
              </Flex>
            )}
            <Flex
              boxSize="70px"
              borderRadius="35px"
              p="10px"
              backgroundColor="white"
              opacity="0.05"
              position="absolute"
              left="20px"
              top="20px"
              transform="translate(-50%, -50%)"
              borderWidth={1}
            />
            <Flex
              boxSize="90px"
              borderRadius="45px"
              p="10px"
              backgroundColor="white"
              opacity="0.05"
              position="absolute"
              left="20px"
              top="20px"
              transform="translate(-50%, -50%)"
              borderWidth={1}
            />
            <Flex
              boxSize="110px"
              borderRadius="55px"
              p="10px"
              backgroundColor="white"
              opacity="0.05"
              position="absolute"
              left="20px"
              top="20px"
              transform="translate(-50%, -50%)"
              borderWidth={1}
            />
          </SwitchButton>
        </SwitchContainer>
      </Center>
    </Flex>
  );
};

export default Switch;

const SwitchContainer = chakra(Flex, {
  baseStyle: {
    width: "100px",
    height: "50px",
    borderRadius: "25px",
    boxShadow: "inset 0px 0px 2px 3px #00000078",
    overflow: "hidden",
  },
});

const SwitchButton = chakra(Flex, {
  baseStyle: {
    backgroundColor: "green",
    boxSize: "40px",
    alignSelf: "center",
    borderRadius: "20px",
    mx: "5px",
    position: "relative",
    transition: "all 500ms",
    boxShadow: "0px 0px 2px 2px #00000050",
  },
});

const MoonCrater = chakra(Flex, {
  baseStyle: {
    bgColor: "#AFAFAF",
    position: "relative",
  },
});
