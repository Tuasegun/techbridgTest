import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Text,
  Button,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import {
  minMaxLength,
  validEmail,
  userExists,
  passwordStrength,
} from "./validation";
import { BsCheckCircle } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import { FaAngleDoubleRight } from "react-icons/fa";

export const SignUpForm = () => {
  const [user, setUser] = useState({});
  const [formErrors, setFormErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    let currentFormErrors = { ...formErrors };

    switch (name) {
      case "fullName":
        if (minMaxLength(value, 3)) {
          currentFormErrors[
            name
          ] = `Full Name should have minimum 3 characters`;
        } else {
          delete currentFormErrors[name];
        }
        break;

      case "email":
        if (!value || validEmail(value)) {
          currentFormErrors[name] = `Email address is invalid`;
        } else {
          userExists(value).then((result) => {
            if (result) {
              currentFormErrors[name] =
                "The email is already registered. Please use a different email.";
            } else {
              delete currentFormErrors[name];
            }
          });
        }
        break;

      case "password":
        if (minMaxLength(value, 6)) {
          currentFormErrors[name] = "Password should have minimum 6 characters";
        } else if (passwordStrength(value)) {
          currentFormErrors[name] =
            "Password is not strong enough. Include an upper case letter, a number or a special character to make it strong";
        } else {
          delete currentFormErrors[name];
          setUser({
            ...user,
            password: value,
          });
        }
        break;
      default:
        break;
    }
    setFormErrors(currentFormErrors);
    setUser({ ...user, [name]: value });
  }
  function submit(e) {
    e.preventDefault();
    console.log(user);
  }

  return (
    <Box>
      <form onSubmit={submit}>
        <Box>
          <UnorderedList listStyleType="none" color="red">
            {Object.entries(formErrors || {}).map(([prop, value]) => {
              return <ListItem key={prop}>{value}</ListItem>;
            })}
          </UnorderedList>

          <FormControl id="full-name">
            <FormLabel color="#122888" fontSize="16px" fontWeight="400">
              Full Name
            </FormLabel>
            <Box pos="relative">
              <Input
                _placeholder={{ color: "#7B7B7B" }}
                pl={"40"}
                placeholder="Emeka obi"
                borderColor="#7B7B7B"
                focusBorderColor="#122888"
                name="fullName"
                maxW={{base:"342px",md:"342px",lg:"500px"}}
                type="text"
                onBlur={handleChange}
                errorBorderColor={
                  formErrors && formErrors.fullName ? "red.300" : "#122888"
                }
              />
              <Box
                color="#B8B8B8"
                fontSize="16px"
                pos="absolute"
                top="2"
                left="2"
              >
                Enter your full name
              </Box>
            </Box>
          </FormControl>
        </Box>
        <Box>
          <FormControl mt="6" id="email">
            <FormLabel color="#122888" fontSize="16px" fontWeight="400">
              Email address
            </FormLabel>
            <Box pos="relative">
              <Input
                _placeholder={{ color: "#7B7B7B" }}
                pl="40"
                placeholder="Emekaobi@gmail.com"
                borderColor="#7B7B7B"
                focusBorderColor="#122888"
                maxW={{base:"342px",md:"342px",lg:"500px"}}
                type="email"
                name="email"
                onBlur={handleChange}
                errorBorderColor={
                  formErrors && formErrors.email ? "red.300" : "#122888"
                }
              />
              <Box
                color="#B8B8B8"
                fontSize="16px"
                pos="absolute"
                top="2"
                left="2"
              >
                Enter your email
              </Box>
            </Box>
          </FormControl>
        </Box>
        <Box>
          <FormControl mt="6" id="email">
            <FormLabel color="#122888" fontSize="16px" fontWeight="400">
              Password
            </FormLabel>
            <Box pos="relative">
              <Input
                borderColor="#7B7B7B"
                pl="40"
                focusBorderColor="#122888"
                type="password"
                maxW={{base:"342px",md:"342px",lg:"500px"}}
                name="password"
                onBlur={handleChange}
                errorBorderColor={
                  formErrors && formErrors.password ? "red.300" : "#122888"
                }
              />
              <Box
                color="#B8B8B8"
                fontSize="16px"
                pos="absolute"
                top="2"
                left="2"
              >
                Password should contain at least 5 characters
              </Box>
              <FormHelperText color="#000000" fontWeight="bold" fontSize="12px">
                Password should contain the following
              </FormHelperText>
              <Box d="flex" flexDirection="row">
                <BsCheckCircle color="#15D004" />
                <Text ml="2" color="#444444" fontSize="12px">
                  A lower case letter
                </Text>
              </Box>
              <Box d="flex" flexDirection="row">
                <ImCancelCircle color="#D00404" />
                <Text ml="2" color=" #444444" fontSize="12px">
                  A character
                </Text>
              </Box>
            </Box>
          </FormControl>
        </Box>
        <Box mt="15%">
          <Button
            backgroundColor="#E29925"
            color="#FAFAFA"
            colorSchem="orange"
            rightIcon={<FaAngleDoubleRight />}
            type="submit"
            disabled={Object.entries(formErrors || {}).length > 0}
          >
            Next
          </Button>
        </Box>
        `
      </form>
    </Box>
  );
};
