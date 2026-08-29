import { useMemo, useState } from "react";
import { Box } from "@chakra-ui/react";
import HabitMonthGrid from "./HabitMonthGrid";
import MonthNavigator from "./MonthNavigator";
import NewHabitForm from "./NewHabitForm";
import { initialHabits } from "./initialHabits";
import type { Habit } from "./habitDashboard.types";
import {
  PASTEL_HABIT_COLORS,
  formatMonthLabel,
  isSameCalendarDay,
  monthDays,
  monthKey,
  shiftMonth,
} from "./habitMonth";

const HabitDashboard = () => {
  const today = useMemo(() => new Date(), []);
  const [cursor, setCursor] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });
  const [habits, setHabits] = useState<Habit[]>(initialHabits);

  const days = useMemo(
    () => monthDays(cursor.year, cursor.month),
    [cursor],
  );

  const todayColumnDay = isSameCalendarDay(
    cursor.year,
    cursor.month,
    today.getDate(),
    today,
  )
    ? today.getDate()
    : null;

  const toggleDay = (habitId: string, day: number) => {
    const key = monthKey(cursor.year, cursor.month);
    setHabits((prev) =>
      prev.map((habit) => {
        if (habit.id !== habitId) return habit;
        const current = habit.completedByMonth[key] ?? [];
        const next = current.includes(day)
          ? current.filter((d) => d !== day)
          : [...current, day];
        return {
          ...habit,
          completedByMonth: { ...habit.completedByMonth, [key]: next },
        };
      }),
    );
  };

  const addHabit = (name: string) => {
    setHabits((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name,
        goal: 20,
        color: PASTEL_HABIT_COLORS[prev.length % PASTEL_HABIT_COLORS.length],
        completedByMonth: {},
      },
    ]);
  };

  return (
    <Box color="#333" fontSize="sm">
      <MonthNavigator
        label={formatMonthLabel(cursor.year, cursor.month)}
        onPreviousMonth={() =>
          setCursor((prev) => shiftMonth(prev.year, prev.month, -1))
        }
        onNextMonth={() =>
          setCursor((prev) => shiftMonth(prev.year, prev.month, 1))
        }
      />
      <HabitMonthGrid
        cursor={cursor}
        days={days}
        habits={habits}
        todayColumnDay={todayColumnDay}
        onToggleDay={toggleDay}
      />
      <NewHabitForm onAddHabit={addHabit} />
    </Box>
  );
};

export default HabitDashboard;
