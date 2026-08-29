import { Box, Flex, Text } from "@chakra-ui/react";
import { FiClock } from "react-icons/fi";
import { PiFootprints } from "react-icons/pi";
import { formatLiftDate } from "./liftLog";
import { runLog } from "./runLog";

const RunningLog = () => {
  return (
    <Box>
      <Text fontSize="lg" fontWeight="semibold" mb="4">
        Run log
      </Text>
      <Box display="flex" flexDirection="column" gap="4">
      {runLog.map((run) => (
        <Box key={run.id}>
          <Text>{formatLiftDate(run.date)}</Text>
          <Flex align="center" gap="4" fontSize="sm" color="#666" mt="1">
            <Flex align="center" gap="1.5">
              <FiClock size={14} />
              <Text as="span">{run.minutes} min</Text>
            </Flex>
            <Flex align="center" gap="1.5">
              <PiFootprints size={14} />
              <Text as="span">{run.steps.toLocaleString()} steps</Text>
            </Flex>
          </Flex>
        </Box>
      ))}
      </Box>
    </Box>
  );
};

export default RunningLog;
