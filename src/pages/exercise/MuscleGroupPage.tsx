import { Navigate, useParams } from "react-router-dom";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import MusclePartCard from "../../components/exercise/MusclePartCard";
import BackLink from "../../components/exercise/BackLink";
import {
  WEIGHT_LIFTING_BASE,
  getMuscleGroup,
} from "../../components/exercise/muscleGroups";

const MuscleGroupPage = () => {
  const { muscleGroup } = useParams();
  const group = getMuscleGroup(muscleGroup);

  if (!group) {
    return <Navigate to={WEIGHT_LIFTING_BASE} replace />;
  }

  return (
    <Box>
      <BackLink to={WEIGHT_LIFTING_BASE}>← Weight Lifting</BackLink>
      <Text fontSize="2xl" fontWeight="semibold" mb="2">
        {group.label}
      </Text>
      <Text fontSize="sm" color="#666" mb="6">
        Choose a part to see lift details.
      </Text>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap="4">
        {group.parts.map((part) => (
          <MusclePartCard key={part.slug} group={group} part={part} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default MuscleGroupPage;
