export type Habit = {
  id: string;
  name: string;
  goal: number;
  color: string;
  completedByMonth: Record<string, number[]>;
};

export type MonthCursor = {
  year: number;
  month: number;
};
