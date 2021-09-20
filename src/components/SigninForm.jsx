import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Text,
  Button,
  LinkBox,
  UnorderedList,
  ListItem,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const SigninForm = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Box>
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
                w={"80%"}
                type="email"
                name="email"
                // onBlur={handleChange}
                // errorBorderColor= {formErrors && formErrors.email ? "red.300" : "#122888"}
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
            <InputGroup>
              <Input
                borderColor="#7B7B7B"
                focusBorderColor="#122888"
                type={show ? "text" : "password"}
                w={"80%"}
                name="password"
                placeholder={"Password should be contain at least 5 characters"}
                // onBlur={handleChange}
                // errorBorderColor= {formErrors && formErrors.password ? "red.300" : "#122888"}
              />
              <InputRightElement mr="100px">
                <AiOutlineEye onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </AiOutlineEye>
              </InputRightElement>
            </InputGroup>
            <FormHelperText
              alignSelf="flex-end"
              color="#000000"
              fontWeight="bold"
              fontSize="12px"
            >
              Forgot Password?
            </FormHelperText>
          </FormControl>
        </Box>
        <Box mt="15%">
          <Button
            backgroundColor="#E29925"
            color="#FAFAFA"
            colorSchem="orange"
            rightIcon={<FaAngleDoubleRight />}
            type="submit"
            // disabled= {Object.entries(formErrors || {}).length > 0}
          >
            Next
          </Button>
        </Box>
        <Box my={5}>
          <Text>You don't have an account</Text>
          <LinkBox>
            <Link to="/">
              <Text color="#122888" fontSize="18px" fontWeight="bold">
                Create Account
              </Text>
            </Link>
          </LinkBox>
        </Box>
      </Box>
    </>
  );
};

export default SigninForm;
