import { Box, Text } from "@chakra-ui/react";
import BackLink from "../../components/exercise/BackLink";
import {
  formatReadDate,
  ministrySessions,
} from "../../components/reading/readingLog";
import { READING_BASE } from "../../components/reading/readingTopics";

const MinistryReadingPage = () => {
  const sessions = [...ministrySessions].sort((a, b) =>
    b.date.localeCompare(a.date),
  );

  return (
    <Box>
      <BackLink to={READING_BASE}>← Reading</BackLink>
      <Text fontSize="2xl" fontWeight="semibold" mb="6">
        Ministry
      </Text>
      {sessions.length === 0 ? (
        <Text fontSize="sm" color="#666">
          No reading logged yet.
        </Text>
      ) : (
        <Box display="flex" flexDirection="column" gap="4">
          {sessions.map((session) => (
            <Box key={session.id}>
              <Text>{session.topic}</Text>
              <Text fontSize="sm" color="#666">
                {formatReadDate(session.date)}
              </Text>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default MinistryReadingPage;
