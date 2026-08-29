import { Link } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import type { ExerciseType } from "./exerciseTypes";

type ExerciseTypeCardProps = {
  exerciseType: ExerciseType;
};

const ExerciseTypeCard = ({ exerciseType }: ExerciseTypeCardProps) => {
  const Icon = exerciseType.icon;

  return (
    <Box
      as={Link}
      to={`/admin/dashboard/exercise/${exerciseType.slug}`}
      display="flex"
      flexDirection="column"
      gap="3"
      p="6"
      borderWidth="1px"
      borderColor="black"
      bg="white"
      color="black"
      textDecoration="none"
      _hover={{ bg: "black", color: "white" }}
    >
      <Box fontSize="3xl">
        <Icon />
      </Box>
      <Text fontSize="lg" fontWeight="semibold">
        {exerciseType.label}
      </Text>
      <Text fontSize="sm" opacity={0.75}>
        {exerciseType.description}
      </Text>
    </Box>
  );
};

export default ExerciseTypeCard;
