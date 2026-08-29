import { Link } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import type { MuscleGroup, MusclePart } from "./muscleGroups";
import { WEIGHT_LIFTING_BASE } from "./muscleGroups";

type MusclePartCardProps = {
  group: MuscleGroup;
  part: MusclePart;
};

const MusclePartCard = ({ group, part }: MusclePartCardProps) => {
  return (
    <Box
      as={Link}
      to={`${WEIGHT_LIFTING_BASE}/${group.slug}/${part.slug}`}
      display="block"
      p="5"
      borderWidth="1px"
      borderColor="black"
      bg="white"
      color="black"
      textDecoration="none"
      _hover={{ bg: "black", color: "white" }}
    >
      <Text fontSize="lg" fontWeight="semibold">
        {part.label}
      </Text>
      <Text fontSize="sm" opacity={0.75} mt="1">
        {group.label}
      </Text>
    </Box>
  );
};

export default MusclePartCard;
