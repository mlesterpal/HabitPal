import { Navigate, useParams } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import BackLink from "../../components/exercise/BackLink";
import {
  formatReadDate,
  sessionsForBook,
} from "../../components/reading/readingLog";
import {
  READING_BASE,
  getReadingTopic,
} from "../../components/reading/readingTopics";

const BookReadingPage = () => {
  const { bookSlug } = useParams();
  const topic = getReadingTopic(bookSlug);

  if (!topic || topic.kind !== "book") {
    return <Navigate to={READING_BASE} replace />;
  }

  const sessions = sessionsForBook(topic.slug);
  const latest = sessions[0];

  return (
    <Box>
      <BackLink to={READING_BASE}>← Reading</BackLink>
      <Text fontSize="2xl" fontWeight="semibold" mb="1">
        {topic.label}
      </Text>
      {latest && (
        <Text fontSize="sm" color="#666" mb="6">
          Last page read: {latest.lastPage}
        </Text>
      )}
      {sessions.length === 0 ? (
        <Text fontSize="sm" color="#666">
          No reading logged yet.
        </Text>
      ) : (
        <Box display="flex" flexDirection="column" gap="4">
          {sessions.map((session) => (
            <Box key={session.id}>
              <Text>{formatReadDate(session.date)}</Text>
              <Text fontSize="sm" color="#666">
                Page {session.lastPage}
              </Text>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default BookReadingPage;
