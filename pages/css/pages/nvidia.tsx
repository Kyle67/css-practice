import { Center, chakra, Flex } from "@chakra-ui/react";
import PageContainer from "../../components/common/PageContainer";
import NavBar from "../../components/nvidia/NavBar";
import Hero from "../../components/nvidia/Hero";
import WhatsNext from "../../components/nvidia/WhatsNext";

// Practice based off https://www.nvidia.com/en-au/

const NVIDIA = () => (
  <PageContainer>
    <NavBar />
    <Hero />
    <WhatsNext />
  </PageContainer>
);
export default NVIDIA;
