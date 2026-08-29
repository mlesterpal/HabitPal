import { Link } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import type { MuscleGroup } from "./muscleGroups";
import { WEIGHT_LIFTING_BASE } from "./muscleGroups";

type MuscleGroupCardProps = {
  group: MuscleGroup;
};

const MuscleGroupCard = ({ group }: MuscleGroupCardProps) => {
  return (
    <Box
      as={Link}
      to={`${WEIGHT_LIFTING_BASE}/${group.slug}`}
      display="block"
      p="5"
      borderWidth="1px"
      borderColor="black"
      bg="white"
      color="black"
      textDecoration="none"
      _hover={{ bg: "black", color: "white" }}
    >
      <Text fontSize="lg" fontWeight="semibold" mb="1">
        {group.label}
      </Text>
      <Text fontSize="sm" opacity={0.75}>
        {group.parts.map((part) => part.label).join(" · ")}
      </Text>
    </Box>
  );
};

export default MuscleGroupCard;
