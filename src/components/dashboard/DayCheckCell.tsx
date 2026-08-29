import { HABIT_CELL_SIZE, dayColumnBorder } from "./habitMonth";

type DayCheckCellProps = {
  day: number;
  isCompleted: boolean;
  isTodayColumn: boolean;
  accentColor: string;
  onToggle: () => void;
};

const DayCheckCell = ({
  day,
  isCompleted,
  isTodayColumn,
  accentColor,
  onToggle,
}: DayCheckCellProps) => {
  return (
    <td
      onClick={onToggle}
      aria-label={`Day ${day}${isCompleted ? ", completed" : ""}`}
      style={{
        width: HABIT_CELL_SIZE,
        minWidth: HABIT_CELL_SIZE,
        height: HABIT_CELL_SIZE,
        padding: 0,
        textAlign: "center",
        verticalAlign: "middle",
        cursor: "pointer",
        background: isCompleted ? accentColor : "white",
        color: "#888",
        fontSize: 12,
        border: dayColumnBorder(isTodayColumn),
      }}
    >
      {isCompleted ? "✓" : ""}
    </td>
  );
};

export default DayCheckCell;
