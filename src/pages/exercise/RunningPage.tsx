import { Box, Text } from "@chakra-ui/react";
import BackLink from "../../components/exercise/BackLink";
import BestRecordBySteps from "../../components/exercise/BestRecordBySteps";
import RunningLog from "../../components/exercise/RunningLog";

const RunningPage = () => {
  return (
    <Box>
      <BackLink to="/admin/dashboard/exercise">← Exercise</BackLink>
      <Text fontSize="2xl" fontWeight="semibold" mb="6">
        Running
      </Text>
      <BestRecordBySteps />
      <RunningLog />
    </Box>
  );
};

export default RunningPage;
