import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface InterfaceProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: InterfaceProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Samuel Alves</Text>
          <Text color="gray.300">samuelalves681@gmail.com</Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Samuel Alves"
        src="https://github.com/samuelalv3s.png"
      />
    </Flex>
  );
}
