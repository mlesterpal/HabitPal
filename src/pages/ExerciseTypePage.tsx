import { Navigate, useParams } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import BackLink from "../components/exercise/BackLink";
import { getExerciseType } from "../components/exercise/exerciseTypes";
import { WEIGHT_LIFTING_BASE } from "../components/exercise/muscleGroups";

const ExerciseTypePage = () => {
  const { exerciseType } = useParams();

  if (exerciseType === "weight-lifting") {
    return <Navigate to={WEIGHT_LIFTING_BASE} replace />;
  }

  const type = getExerciseType(exerciseType);

  if (!type) {
    return <Navigate to="/admin/dashboard/exercise" replace />;
  }

  const Icon = type.icon;

  return (
    <Box>
      <BackLink to="/admin/dashboard/exercise">← Exercise</BackLink>
      <Box
        borderWidth="1px"
        borderColor="black"
        p="8"
        maxW="lg"
      >
        <Box fontSize="4xl" mb="3">
          <Icon />
        </Box>
        <Text fontSize="2xl" fontWeight="semibold" mb="2">
          {type.label}
        </Text>
        <Text fontSize="sm" color="#666">
          {type.description}
        </Text>
      </Box>
    </Box>
  );
};

export default ExerciseTypePage;
