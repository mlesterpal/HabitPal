export const PASTEL_HABIT_COLORS = [
  "#FFF9E1",
  "#E2F3E9",
  "#E1E9FF",
  "#EBE1FF",
];

export const HABIT_HEADER_COLOR = "#6B7AA8";
export const HABIT_CELL_SIZE = "32px";

const WEEKDAY = ["S", "M", "T", "W", "T", "F", "S"] as const;

export function monthKey(year: number, month: number) {
  return `${year}-${String(month + 1).padStart(2, "0")}`;
}

export function monthDays(year: number, month: number) {
  const count = new Date(year, month + 1, 0).getDate();
  return Array.from({ length: count }, (_, i) => i + 1);
}

export function weekdayLetter(year: number, month: number, day: number) {
  return WEEKDAY[new Date(year, month, day).getDay()];
}

export function formatMonthLabel(year: number, month: number) {
  return new Date(year, month, 1)
    .toLocaleString("en-US", { month: "long", year: "numeric" })
    .replace(" ", ", ");
}

export function shiftMonth(year: number, month: number, delta: number) {
  const date = new Date(year, month + delta, 1);
  return { year: date.getFullYear(), month: date.getMonth() };
}

export function isSameCalendarDay(
  year: number,
  month: number,
  day: number,
  date: Date,
) {
  return (
    year === date.getFullYear() &&
    month === date.getMonth() &&
    day === date.getDate()
  );
}

export function dayColumnBorder(isTodayColumn: boolean) {
  return isTodayColumn ? "1px solid black" : "1px solid #eee";
}
