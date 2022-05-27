import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Heading,
  Button,
  ButtonGroup,
  Link,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" p="2">
      <Box p="2">
        <Heading size="md">Logo</Heading>
      </Box>
      <Flex marginLeft="25px">
        <Box as="a" p="3" href="#">Inspiration</Box>
        <Box as="a" href="#" p="3">Find Work</Box>
        <Box as="a" href="#" p="3">Learn Design</Box>
        <Box as="a" href="#" p="3">Hire Designers</Box>
      </Flex>
      <Spacer/>
      <ButtonGroup gap="2">
        <Link p="2">Sign In</Link>
        <Button colorScheme="pink">Sign Up</Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Navbar;
