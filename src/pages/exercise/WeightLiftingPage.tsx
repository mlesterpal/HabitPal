import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import MuscleGroupCard from "../../components/exercise/MuscleGroupCard";
import RecentLiftHistory from "../../components/exercise/RecentLiftHistory";
import BackLink from "../../components/exercise/BackLink";
import { muscleGroups } from "../../components/exercise/muscleGroups";

const WeightLiftingPage = () => {
  return (
    <Box>
      <BackLink to="/admin/dashboard/exercise">← Exercise</BackLink>
      <Text fontSize="2xl" fontWeight="semibold" mb="6">
        Weight Lifting
      </Text>
      <RecentLiftHistory />
      <Text fontSize="lg" fontWeight="semibold" mb="1">
        Muscle groups
      </Text>
      <Text fontSize="sm" color="#666" mb="4">
        Open a muscle to see its parts.
      </Text>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap="4">
        {muscleGroups.map((group) => (
          <MuscleGroupCard key={group.slug} group={group} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default WeightLiftingPage;
