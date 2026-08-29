import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import ExerciseTypeCard from "../components/exercise/ExerciseTypeCard";
import BackLink from "../components/exercise/BackLink";
import { exerciseTypes } from "../components/exercise/exerciseTypes";

const ExerciseTypesPage = () => {
  return (
    <Box>
      <BackLink to="/admin/dashboard">← Dashboard</BackLink>
      <Text fontSize="2xl" fontWeight="semibold" mb="2">
        Exercise
      </Text>
      <Text fontSize="sm" color="#666" mb="6">
        Choose a type to track.
      </Text>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap="4">
        {exerciseTypes.map((exerciseType) => (
          <ExerciseTypeCard key={exerciseType.slug} exerciseType={exerciseType} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ExerciseTypesPage;
