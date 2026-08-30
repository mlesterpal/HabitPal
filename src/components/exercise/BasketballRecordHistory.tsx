import { Box, Flex, Text } from "@chakra-ui/react";
import { FiClock } from "react-icons/fi";
import { MdSportsBasketball } from "react-icons/md";
import { formatLiftDate } from "./liftLog";
import { formatShotTimer, shotLogByDay } from "./shotLog";

const BasketballRecordHistory = () => {
  const days = shotLogByDay();

  return (
    <Box>
      <Text fontSize="lg" fontWeight="semibold" mb="4">
        Record history
      </Text>
      <Box display="flex" flexDirection="column" gap="5">
        {days.map((day) => (
          <Box key={day.date}>
            <Text mb="1">{formatLiftDate(day.date)}</Text>
            {day.entries.map((entry) => (
              <Flex
                key={entry.id}
                align="center"
                gap="4"
                fontSize="sm"
                color="#666"
                mt="1"
              >
                <Flex align="center" gap="1.5">
                  <MdSportsBasketball size={14} />
                  <Text as="span">{entry.shots} shots</Text>
                </Flex>
                <Flex align="center" gap="1.5">
                  <FiClock size={14} />
                  <Text as="span">{formatShotTimer(entry.seconds)}</Text>
                </Flex>
              </Flex>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BasketballRecordHistory;
