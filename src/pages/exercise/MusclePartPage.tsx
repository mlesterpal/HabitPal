import { Navigate, useParams } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import BackLink from "../../components/exercise/BackLink";
import {
  WEIGHT_LIFTING_BASE,
  getMusclePart,
} from "../../components/exercise/muscleGroups";
import {
  formatLiftDate,
  formatLiftTime,
  liftsForMusclePart,
} from "../../components/exercise/liftLog";

const MusclePartPage = () => {
  const { muscleGroup, musclePart } = useParams();
  const match = getMusclePart(muscleGroup, musclePart);

  if (!match) {
    return <Navigate to={WEIGHT_LIFTING_BASE} replace />;
  }

  const lifts = liftsForMusclePart(match.group.slug, match.part.slug);

  return (
    <Box>
      <BackLink to={`${WEIGHT_LIFTING_BASE}/${match.group.slug}`}>
        ← {match.group.label}
      </BackLink>
      <Text fontSize="2xl" fontWeight="semibold" mb="1">
        {match.part.label}
      </Text>
      <Text fontSize="sm" color="#666" mb="6">
        {match.group.label} · date, weight, time, and notes
      </Text>
      {lifts.length === 0 ? (
        <Text fontSize="sm" color="#666">
          No lifts logged for this part yet.
        </Text>
      ) : (
        <Box display="flex" flexDirection="column" gap="3">
          {lifts.map((lift) => (
            <Box key={lift.id} borderWidth="1px" borderColor="black" p="4">
              <Text fontWeight="semibold" mb="1">
                {formatLiftDate(lift.date)} · {formatLiftTime(lift.time)}
              </Text>
              <Text fontSize="sm" mb="2">
                {lift.weightKg} kg
              </Text>
              <Text fontSize="sm" color="#666">
                {lift.note}
              </Text>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default MusclePartPage;
