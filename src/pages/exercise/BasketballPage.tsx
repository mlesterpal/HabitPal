import { Box, Text } from "@chakra-ui/react";
import BackLink from "../../components/exercise/BackLink";
import BestRecordByShots from "../../components/exercise/BestRecordByShots";
import BasketballRecordHistory from "../../components/exercise/BasketballRecordHistory";

const BasketballPage = () => {
  return (
    <Box>
      <BackLink to="/admin/dashboard/exercise">← Exercise</BackLink>
      <Text fontSize="2xl" fontWeight="semibold" mb="6">
        Basketball
      </Text>
      <BestRecordByShots />
      <BasketballRecordHistory />
    </Box>
  );
};

export default BasketballPage;
