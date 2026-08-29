import { Link } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import {
  WEIGHT_LIFTING_BASE,
  getMuscleGroup,
  getMusclePart,
} from "./muscleGroups";
import { formatLiftDate, lastSevenDaysLifts, type LiftEntry } from "./liftLog";

function liftsByDay(lifts: LiftEntry[]) {
  const groups: { date: string; lifts: LiftEntry[] }[] = [];
  for (const lift of lifts) {
    const last = groups[groups.length - 1];
    if (last && last.date === lift.date) {
      last.lifts.push(lift);
    } else {
      groups.push({ date: lift.date, lifts: [lift] });
    }
  }
  return groups;
}

const RecentLiftHistory = () => {
  const lifts = lastSevenDaysLifts();
  const days = liftsByDay(lifts);

  return (
    <Box mb="8">
      <Text fontSize="lg" fontWeight="semibold" mb="4">
        Last 7 days
      </Text>
      {days.length === 0 ? (
        <Text fontSize="sm" color="#666">
          No lifts logged in the last 7 days.
        </Text>
      ) : (
        <Box display="flex" gap="8" overflowX="auto" pb="2">
          {days.map((day) => (
            <Box key={day.date} flexShrink={0} minW="160px">
              <Text mb="1">{formatLiftDate(day.date)}</Text>
              {day.lifts.map((lift) => {
                const part = getMusclePart(
                  lift.muscleGroupSlug,
                  lift.musclePartSlug,
                );
                const group = getMuscleGroup(lift.muscleGroupSlug);
                const href = `${WEIGHT_LIFTING_BASE}/${lift.muscleGroupSlug}/${lift.musclePartSlug}`;
                return (
                  <Text key={lift.id} fontSize="sm" whiteSpace="nowrap">
                    <Link to={href} style={{ color: "inherit" }}>
                      {group?.label ?? lift.muscleGroupSlug} ·{" "}
                      {part?.part.label ?? lift.musclePartSlug} | {lift.weightKg}{" "}
                      kg
                    </Link>
                  </Text>
                );
              })}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default RecentLiftHistory;
