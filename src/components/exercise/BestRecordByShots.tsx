import { Box, Flex, Text } from "@chakra-ui/react";
import { FiClock } from "react-icons/fi";
import { MdSportsBasketball } from "react-icons/md";
import { formatLiftDate } from "./liftLog";
import {
  SHOT_MILESTONES,
  bestTimeForShotTarget,
  formatShotTimer,
} from "./shotLog";

const BestRecordByShots = () => {
  return (
    <Box mb="8">
      <Text fontSize="lg" fontWeight="semibold" mb="1">
        Best record
      </Text>
      <Text fontSize="sm" color="#666" mb="4">
        Fastest time at 50 and 100 shots.
      </Text>
      <Flex gap="4" flexWrap="wrap">
        {SHOT_MILESTONES.map((shots) => {
          const best = bestTimeForShotTarget(shots);
          return (
            <Box
              key={shots}
              p="5"
              minW="160px"
              flex="1"
              borderWidth="1px"
              borderColor="black"
              bg="white"
            >
              <Flex align="baseline" gap="2">
                <Text fontSize="3xl" fontWeight="semibold" lineHeight="1">
                  {shots}
                </Text>
                <MdSportsBasketball size={18} />
              </Flex>
              <Text fontSize="sm" color="#666" mt="1" mb="3">
                shots
              </Text>
              {best ? (
                <>
                  <Flex align="center" gap="2">
                    <FiClock size={14} />
                    <Text fontWeight="medium">{formatShotTimer(best.seconds)}</Text>
                  </Flex>
                  <Text fontSize="sm" mt="1">
                    {formatLiftDate(best.date)}
                  </Text>
                </>
              ) : (
                <Text fontSize="sm" color="#666">
                  No record yet
                </Text>
              )}
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default BestRecordByShots;
