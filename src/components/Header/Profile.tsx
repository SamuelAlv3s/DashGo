import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Samuel Alves</Text>
        <Text color="gray.300">samuelalves681@gmail.com</Text>
      </Box>
      <Avatar
        size="md"
        name="Samuel Alves"
        src="https://github.com/samuelalv3s.png"
      />
    </Flex>
  );
}
