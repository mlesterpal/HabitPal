export type Habit = {
  id: string;
  name: string;
  goal: number;
  color: string;
  completedByMonth: Record<string, number[]>;
  href?: string;
};

export type MonthCursor = {
  year: number;
  month: number;
};
