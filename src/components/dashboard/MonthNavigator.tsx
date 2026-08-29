import { Box, Flex, Text } from "@chakra-ui/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type MonthNavigatorProps = {
  label: string;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
};

const MonthNavigator = ({
  label,
  onPreviousMonth,
  onNextMonth,
}: MonthNavigatorProps) => {
  return (
    <Flex align="center" justify="center" gap="6" mb="5">
      <Box
        as="button"
        type="button"
        aria-label="Previous month"
        onClick={onPreviousMonth}
        cursor="pointer"
        color="#888"
        bg="transparent"
        border="none"
        p="1"
      >
        <FiChevronLeft size={22} />
      </Box>
      <Text fontSize="lg" fontWeight="medium" letterSpacing="tight">
        {label}
      </Text>
      <Box
        as="button"
        type="button"
        aria-label="Next month"
        onClick={onNextMonth}
        cursor="pointer"
        color="#888"
        bg="transparent"
        border="none"
        p="1"
      >
        <FiChevronRight size={22} />
      </Box>
    </Flex>
  );
};

export default MonthNavigator;
