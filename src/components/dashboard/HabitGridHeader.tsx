import {
  HABIT_CELL_SIZE,
  HABIT_HEADER_COLOR,
  dayColumnBorder,
  weekdayLetter,
} from "./habitMonth";
import type { MonthCursor } from "./habitDashboard.types";

type HabitGridHeaderProps = {
  days: number[];
  cursor: MonthCursor;
  todayColumnDay: number | null;
};

const HabitGridHeader = ({
  days,
  cursor,
  todayColumnDay,
}: HabitGridHeaderProps) => {
  return (
    <thead>
      <tr>
        <th
          rowSpan={2}
          style={{
            position: "sticky",
            left: 0,
            zIndex: 2,
            background: "white",
            minWidth: 200,
            padding: "8px 12px",
            textAlign: "left",
            fontWeight: 500,
            color: HABIT_HEADER_COLOR,
            borderBottom: "1px solid #eee",
            borderRight: "1px solid #eee",
          }}
        >
          Habits
        </th>
        {days.map((day) => {
          const isTodayColumn = day === todayColumnDay;
          return (
            <th
              key={`weekday-${day}`}
              style={{
                width: HABIT_CELL_SIZE,
                minWidth: HABIT_CELL_SIZE,
                padding: 0,
                textAlign: "center",
                fontSize: 11,
                fontWeight: 500,
                color: isTodayColumn ? "white" : HABIT_HEADER_COLOR,
                background: isTodayColumn ? "black" : "white",
                border: dayColumnBorder(isTodayColumn),
                borderBottom: "none",
              }}
            >
              {weekdayLetter(cursor.year, cursor.month, day)}
            </th>
          );
        })}
        <th
          rowSpan={2}
          style={{
            width: 64,
            minWidth: 64,
            fontWeight: 500,
            color: HABIT_HEADER_COLOR,
            borderBottom: "1px solid #eee",
            borderLeft: "1px solid #eee",
          }}
        >
          Goal
        </th>
        <th
          rowSpan={2}
          style={{
            width: 88,
            minWidth: 88,
            fontWeight: 500,
            color: HABIT_HEADER_COLOR,
            borderBottom: "1px solid #eee",
            borderLeft: "1px solid #eee",
          }}
        >
          Achieved
        </th>
      </tr>
      <tr>
        {days.map((day) => {
          const isTodayColumn = day === todayColumnDay;
          return (
            <th
              key={`date-${day}`}
              style={{
                width: HABIT_CELL_SIZE,
                minWidth: HABIT_CELL_SIZE,
                height: 28,
                padding: 0,
                textAlign: "center",
                fontSize: 12,
                fontWeight: 500,
                color: isTodayColumn ? "white" : "#555",
                background: isTodayColumn ? "black" : "white",
                border: dayColumnBorder(isTodayColumn),
              }}
            >
              {day}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default HabitGridHeader;
