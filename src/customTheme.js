import { extendTheme } from "@chakra-ui/react";
<Box>
  <FormControl id="full-name">
    <FormLabel color="#122888" fontSize="16px" fontWeight="400">
      Full Name
    </FormLabel>
    <Box pos="relative">
      <Input
        pl={"40"}
        placeholder="Emeka obi"
        borderColor="#7B7B7B"
        focusBorderColor="#122888"
        type="text"
      />
      <Box color="#B8B8B8" fontSize="16px" pos="absolute" top="2" left="2">
        Enter your full name
      </Box>
    </Box>
  </FormControl>
</Box>;
