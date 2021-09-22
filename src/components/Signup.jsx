import React from "react";
import { Box, Text, Image, Container, Button, Heading } from "@chakra-ui/react";
import Doodles from "../assets/OpenDoodles.svg";
import Frame410 from "../assets/Frame410.svg";
import Navbar from "./Navbar";
import Landscape from "../assets/Landscape 1.svg";
import { SignUpForm } from "./SignupForm";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <Box bg="#E5E5E5" overflow="-moz-hidden-unscrollable" h="100%" d="flex" w="100%" h="100%" flexDirection="row">
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
          d={{ base: "none", md: "none", lg: "flex" }}
          pos="absolute"
          w="20%"
          h="100%"
          backgroundColor="rgba(0, 9, 48, 0.9);"
          flexDirection="column"
        >
          <Box pos="relative" h="120px" pos="">
            <Text
              w="401px"
              fontWeight="bold"
              fontSize="36px"
              color="#ffffff"
              alignSelf="center"
              textAlign="left"
              mt="35%"
              ml="51px"
            >
              WELCOME TO TECHBRIDG, THE HOME OF TECH EVENTS
            </Text>
          </Box>
          <Box pos="relative" boxSize="sm" mt="90%" ml="20px">
            <Image boxSize="350px" src={Doodles}  h="276px" alt="illustration" />
          </Box>
        </Box>

        <Box bg="#E5E5E5" d="flex" flexDirection="column">
          <header>
            <Navbar bg="#FDFDFD" />
          </header>

          <Container bg="#E5E5E5" mt="136px" maxW={"container.lg"}>
            <Box
              bg="#E5E5E5"
              maxHeight={"100%"}
              pos="relative"
              ml={{ md: "80%" }}
              mr={{ sm: "50%" }}
              w="80%"
              d="flex"
              flexDirection="column"
            >
              <Box pos="absolute">
                <Image src={Landscape} />
              </Box>
              <Box>
                <Heading w="600px" as="h4" fontSize="46px" mt="20">
                  Set up your Account
                </Heading>
                <Box>
                  <Text
                    fontSize="16px"
                    fontWeight="normal"
                    w="401px"
                    color="#000930"
                  >
                    We have alot installed for you, create an account to enjoy
                    personalised experience
                  </Text>
                </Box>
              </Box>
              <Box mt="6">
                <Text
                  fontSize="18px"
                  fontWeight="normal"
                  w="401px"
                  color="#000930"
                >
                  Already have an account?
                </Text>
                <Link to="/signin">
                  <Text fontWeight="700" color="#122888">
                    Login
                  </Text>
                </Link>
              </Box>
              <SignUpForm />
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
export default Signup;
