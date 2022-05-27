import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Heading,
  Button,
  ButtonGroup,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Text,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" p="2" borderBottom="0.1px solid grey">
      <Box p="2">
        <Heading>Logo</Heading>
      </Box>
      <Flex marginLeft="25px">
        <Popover trigger="hover">
          <PopoverTrigger>
            <Box as="a" href="#" p="3">
              Inspiration
            </Box>
          </PopoverTrigger>
          <PopoverContent ml="30%">
            <PopoverBody>
              <Heading as="h5" size="sm">
                Explore Design Work
              </Heading>
              <Text>Trending Design to inspire you</Text>
              <Spacer p="2" />
              <Heading as="h5" size="sm">
                Explore Design Work
              </Heading>
              <Text>Trending Design to inspire you</Text>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Popover trigger="hover">
          <PopoverTrigger>
            <Box as="a" href="#" p="3">
              Find Work
            </Box>
          </PopoverTrigger>
          <PopoverContent ml="30%" p="2">
            <Heading as="h5" size="sm">
              Job Board
            </Heading>
            <Text>Find your dream Design Job</Text>
            <Spacer p="2" />
            <Heading as="h5" size="sm">
              Freelance Projects
            </Heading>
            <Text>An exclusive list for contract work</Text>
          </PopoverContent>
        </Popover>
        <Box as="a" href="#" p="3">
          Learn Design
        </Box>
        <Box as="a" href="#" p="3">
          Hire Designers
        </Box>
      </Flex>
      <Spacer />
      <ButtonGroup gap="2">
        <Link p="2">Sign In</Link>
        <Button colorScheme="pink">Sign Up</Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Navbar;
