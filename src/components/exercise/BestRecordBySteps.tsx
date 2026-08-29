import { Box, Flex, Text } from "@chakra-ui/react";
import { FiClock } from "react-icons/fi";
import { PiFootprints } from "react-icons/pi";
import { formatLiftDate } from "./liftLog";
import { STEP_MILESTONES, bestTimeForStepTarget } from "./runLog";

const BestRecordBySteps = () => {
  return (
    <Box mb="8">
      <Text fontSize="lg" fontWeight="semibold" mb="1">
        Best record by steps
      </Text>
      <Text fontSize="sm" color="#666" mb="4">
        Fastest time at 3,000, 4,000, and 5,000 steps.
      </Text>
      <Flex gap="10" flexWrap="wrap">
        {STEP_MILESTONES.map((steps) => {
          const best = bestTimeForStepTarget(steps);
          return (
            <Box key={steps}>
              <Flex align="baseline" gap="2">
                <Text fontSize="3xl" fontWeight="semibold" lineHeight="1">
                  {steps.toLocaleString()}
                </Text>
                <PiFootprints size={16} />
              </Flex>
              <Text fontSize="sm" color="#666" mt="1" mb="3">
                steps
              </Text>
              {best ? (
                <>
                  <Flex align="center" gap="2">
                    <FiClock size={14} />
                    <Text fontWeight="medium">{best.minutes} min</Text>
                  </Flex>
                  <Text fontSize="sm" mt="1">
                    {formatLiftDate(best.date)}
                  </Text>
                </>
              ) : (
                <Text fontSize="sm" color="#666">
                  No run yet
                </Text>
              )}
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default BestRecordBySteps;
