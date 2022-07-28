import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="light"
      w="64"
    >
      DashGo
      <Text as="span" color="pink.500" ml="1">
        .
      </Text>
    </Text>
  );
}
