import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import BackLink from "../../components/exercise/BackLink";
import ReadingTopicCard from "../../components/reading/ReadingTopicCard";
import { readingTopics } from "../../components/reading/readingTopics";

const ReadingTopicsPage = () => {
  return (
    <Box>
      <BackLink to="/admin/dashboard">← Dashboard</BackLink>
      <Text fontSize="2xl" fontWeight="semibold" mb="6">
        Reading Topics
      </Text>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap="4">
        {readingTopics.map((topic) => (
          <ReadingTopicCard key={topic.slug} topic={topic} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ReadingTopicsPage;
