import { Box } from "@chakra-ui/react";
import HabitGridHeader from "./HabitGridHeader";
import HabitRow from "./HabitRow";
import type { Habit, MonthCursor } from "./habitDashboard.types";
import { monthKey } from "./habitMonth";

type HabitMonthGridProps = {
  cursor: MonthCursor;
  days: number[];
  habits: Habit[];
  todayColumnDay: number | null;
  onToggleDay: (habitId: string, day: number) => void;
};

const HabitMonthGrid = ({
  cursor,
  days,
  habits,
  todayColumnDay,
  onToggleDay,
}: HabitMonthGridProps) => {
  const key = monthKey(cursor.year, cursor.month);

  return (
    <Box overflowX="auto" borderWidth="1px" borderColor="#eee">
      <table className="habit-grid">
        <HabitGridHeader
          days={days}
          cursor={cursor}
          todayColumnDay={todayColumnDay}
        />
        <tbody>
          {habits.map((habit) => (
            <HabitRow
              key={habit.id}
              habit={habit}
              days={days}
              completedDays={habit.completedByMonth[key] ?? []}
              todayColumnDay={todayColumnDay}
              onToggleDay={onToggleDay}
            />
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default HabitMonthGrid;
