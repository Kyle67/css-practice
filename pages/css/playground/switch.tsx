import { Flex, Center, useBoolean, chakra, Box } from "@chakra-ui/react";

// Based on switch shown here https://www.reddit.com/r/ProgrammerHumor/comments/12rpylc/design_vs_programming/

const Switch = () => {
  const [isOn, setIsOn] = useBoolean(false);
  return (
    <Flex w="100%" h="100%" mt="100px" justifyContent="center" flexDir="column">
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
            <Star
              left="-70%"
              top={isOn ? "0%" : "-100%"}
              transform="scale(0.3)"
            />
            <Star
              left="-80%"
              top={isOn ? "20%" : "-80%"}
              transform="scale(0.2)"
            />
            <Star
              left="-95%"
              top={isOn ? "40%" : "-60%"}
              transform="scale(0.25)"
            />
            <Star
              left="-135%"
              top={isOn ? "-5%" : "-105%"}
              transform="scale(0.35)"
            />
            <Star
              left="-120%"
              top={isOn ? "-25%" : "-125%"}
              transform="scale(0.20)"
            />
            <Star
              left="-150%"
              top={isOn ? "45%" : "-55%"}
              transform="scale(0.4)"
            />
            <Star
              left="-85%"
              top={isOn ? "-40%" : "-140%"}
              transform="scale(0.3)"
            />
            {/* CLOUDS */}
            <Clouds
              w="40px"
              h="40px"
              left="190%"
              top={isOn ? "80%" : "-20%"}
              bgColor="#91b7c7"
            />
            <Clouds
              w="20px"
              h="20px"
              left="170%"
              top={isOn ? "120%" : "20%"}
              bgColor="#91b7c7"
            />
            <Clouds
              w="40px"
              h="40px"
              left="120%"
              top={isOn ? "140%" : "40%"}
              bgColor="#91b7c7"
            />
            <Clouds
              w="40px"
              h="40px"
              left="80%"
              top={isOn ? "163%" : "63%"}
              bgColor="#91b7c7"
            />
            <Clouds
              w="40px"
              h="40px"
              left="40%"
              top={isOn ? "160%" : "60%"}
              bgColor="#91b7c7"
            />
            <Clouds
              w="40px"
              h="40px"
              left="0%"
              top={isOn ? "180%" : "80%"}
              bgColor="#91b7c7"
            />

            <Clouds
              w="40px"
              h="40px"
              left="200%"
              top={isOn ? "100%" : "0%"}
              bgColor="white"
            />
            <Clouds
              w="40px"
              h="40px"
              left="180%"
              top={isOn ? "130%" : "30%"}
              bgColor="white"
            />
            <Clouds
              w="40px"
              h="40px"
              left="140%"
              top={isOn ? "170%" : "70%"}
              bgColor="white"
            />
            <Clouds
              w="40px"
              h="40px"
              left="120%"
              top={isOn ? "180%" : "80%"}
              bgColor="white"
            />
            <Clouds
              w="40px"
              h="40px"
              left="80%"
              top={isOn ? "175%" : "75%"}
              bgColor="white"
            />
            <Clouds
              w="40px"
              h="40px"
              left="30%"
              top={isOn ? "190%" : "90%"}
              bgColor="white"
            />
            <Clouds
              w="40px"
              h="40px"
              left="-10%"
              top={isOn ? "200%" : "100%"}
              bgColor="white"
            />

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
    boxShadow: "inset 0px 0px 3px 5px #00000078",
    overflow: "hidden",
    zIndex: -2,
    borderWidth: "1px",
    borderColor: "00000078",
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

const starWidth = 30;
const starCornerSize = `${starWidth / 2}px`;
const starColour = "lightgrey";
const starSize = `${starWidth}px`;

const Star = chakra(Flex, {
  baseStyle: {
    bgColor: starColour,
    boxSize: starSize,
    background: `
    radial-gradient(circle ${starCornerSize} at top left ,#0000 98%, ${starColour}) top left, 
    radial-gradient(circle ${starCornerSize} at top right,#0000 98%,${starColour}) top right,
    radial-gradient(circle ${starCornerSize} at bottom left ,#0000 98%,${starColour}) bottom left, 
    radial-gradient(circle ${starCornerSize} at bottom right,#0000 98%,${starColour}) bottom right;`,
    backgroundSize: "51% 51%, 51% 51%",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    transition: "all 500ms",
  },
});

const Clouds = chakra(Flex, {
  baseStyle: {
    borderRadius: "50%",
    position: "absolute",
    zIndex: -1,
    transition: "all 500ms",
  },
});
