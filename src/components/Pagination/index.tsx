import { Box, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <Stack
      direction={["column", "row"]}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" justify="space-between" align="center" spacing="4">
        <PaginationItem number={1} />
        <PaginationItem number={2} isCurrent={true} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
      </Stack>
    </Stack>
  );
}
