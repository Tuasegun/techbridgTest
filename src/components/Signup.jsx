import React from "react";
import Sidebar from "./Sidebar";
import { Box, Text, Image, Container, Button, Heading } from "@chakra-ui/react";
// import Doodles from "../assets/OpenDoodles.svg";
// import Frame410 from "../assets/Frame410.svg";
import Navbar from "./Navbar";
import Landscape from "../assets/Landscape 1.svg";
import { SignUpForm } from "./SignupForm";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <Box bg="#E5E5E5" overflow="none" h="100%" d="flex" w="100%" h="100%" flexDirection="row">
        <Sidebar/>
        <Box bg="#E5E5E5" d="flex" flexDirection="column">
          <header>
            <Navbar bg="#FDFDFD" />
          </header>

          <Container  bg="#E5E5E5" mt="136px">
            <Box
              bg="#E5E5E5"
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
                <Heading w="600px" as="h4" fontSize={{base:"26px", md:"30px",lg:"46px"}} mt="20">
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
