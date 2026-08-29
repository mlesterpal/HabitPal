import { Link } from "react-router-dom";
import DayCheckCell from "./DayCheckCell";
import type { Habit } from "./habitDashboard.types";

type HabitRowProps = {
  habit: Habit;
  days: number[];
  completedDays: number[];
  todayColumnDay: number | null;
  onToggleDay: (habitId: string, day: number) => void;
};

const HabitRow = ({
  habit,
  days,
  completedDays,
  todayColumnDay,
  onToggleDay,
}: HabitRowProps) => {
  const achieved = completedDays.length;
  const goalMet = achieved >= habit.goal;

  return (
    <tr>
      <td
        style={{
          position: "sticky",
          left: 0,
          zIndex: 1,
          background: "white",
          padding: "8px 12px",
          whiteSpace: "nowrap",
          borderBottom: "1px solid #eee",
          borderRight: "1px solid #eee",
        }}
      >
        {habit.href ? (
          <Link
            to={habit.href}
            style={{ color: "inherit", fontWeight: 600 }}
          >
            {habit.name}
          </Link>
        ) : (
          habit.name
        )}
      </td>
      {days.map((day) => (
        <DayCheckCell
          key={day}
          day={day}
          isCompleted={completedDays.includes(day)}
          isTodayColumn={day === todayColumnDay}
          accentColor={habit.color}
          onToggle={() => onToggleDay(habit.id, day)}
        />
      ))}
      <td
        style={{
          textAlign: "center",
          borderBottom: "1px solid #eee",
          borderLeft: "1px solid #eee",
          color: "#666",
        }}
      >
        {habit.goal}
      </td>
      <td
        style={{
          textAlign: "center",
          fontWeight: 600,
          borderBottom: "1px solid #eee",
          borderLeft: "1px solid #eee",
          background: goalMet ? "#00D084" : "#FFF04B",
          color: "black",
        }}
      >
        {achieved}
      </td>
    </tr>
  );
};

export default HabitRow;
