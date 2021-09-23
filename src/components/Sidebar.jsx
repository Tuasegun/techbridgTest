import React from 'react'
import { Box, Text, Image, Container, Button, Heading, VStack } from "@chakra-ui/react";
import Doodles from "../assets/OpenDoodles.svg";
import Frame410 from "../assets/Frame410.svg";

const Sidebar = () => {
    return (
        <>
          <Box
          display={{ base: "none", md: "none", lg: "block" }}
          pos="absolute"
          backgroundImage={Frame410}
          style={{ filter: "blur(10px)" }}
          backgroundColor="rgba(0, 9, 48, 0.9);"
          w="20%"
          h="100%"
        ></Box>
        <Box
          d={{ base: "none", md: "flex", lg: "flex" }}
          pos="absolute"
          w="20%"
          h="100%"
          backgroundColor="rgba(0, 9, 48, 0.9);"
          flexDirection="column"
        >
           <VStack
            spacing={400}
            align="stretch"
            > 
          <Box boxSize="350px" pos="relative" maxW={{base:"150px", md:"200px", lg:"401px"}} h="120px">
            <Text
             
              fontWeight="bold"
              fontSize={{base:"20px", md:"18px", lg:"36px"}}
              color="#ffffff"
              alignSelf="center"
              textAlign="left"
              mt="35%"
              ml="51px"
            >
              WELCOME TO TECHBRIDG, THE HOME OF TECH EVENTS
            </Text>
          </Box>
          <Box pos="relative"  mt="90%" ml="20px">
            <Image boxSize="350px" src={Doodles}  h="276px" alt="illustration" />
          </Box>
          </VStack>
          </Box>         
        </>
    )
}

export default Sidebar
