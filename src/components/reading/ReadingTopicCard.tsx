import { Link } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import { READING_BASE, type ReadingTopic } from "./readingTopics";

type ReadingTopicCardProps = {
  topic: ReadingTopic;
};

const ReadingTopicCard = ({ topic }: ReadingTopicCardProps) => {
  return (
    <Box
      as={Link}
      to={`${READING_BASE}/${topic.slug}`}
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
        {topic.label}
      </Text>
      <Text fontSize="sm" opacity={0.75} mt="1">
        {topic.kind === "book" ? "Book" : "Ministry"}
      </Text>
    </Box>
  );
};

export default ReadingTopicCard;
