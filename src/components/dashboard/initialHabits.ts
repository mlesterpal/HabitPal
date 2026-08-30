import type { Habit } from "./habitDashboard.types";
import { PASTEL_HABIT_COLORS, monthKey } from "./habitMonth";

function seedCurrentMonth(days: number[]) {
  const now = new Date();
  return { [monthKey(now.getFullYear(), now.getMonth())]: days };
}

export const initialHabits: Habit[] = [
  {
    id: "1",
    name: "Reading",
    goal: 20,
    color: PASTEL_HABIT_COLORS[0],
    href: "/admin/dashboard/reading",
    completedByMonth: seedCurrentMonth([
      1, 2, 4, 8, 9, 11, 15, 16, 18, 22, 23, 25, 29,
    ]),
  },
  {
    id: "2",
    name: "Exercise",
    goal: 20,
    color: PASTEL_HABIT_COLORS[1],
    href: "/admin/dashboard/exercise",
    completedByMonth: seedCurrentMonth([
      2, 3, 4, 9, 10, 11, 16, 17, 18, 23, 24, 25,
    ]),
  },
  {
    id: "3",
    name: "Bathe + Moisturize",
    goal: 25,
    color: PASTEL_HABIT_COLORS[2],
    completedByMonth: seedCurrentMonth([
      1, 2, 3, 4, 8, 9, 10, 11, 15, 16, 17, 18, 22, 23, 24, 25, 29,
    ]),
  },
  {
    id: "4",
    name: "Eat a healthy breakfast",
    goal: 25,
    color: PASTEL_HABIT_COLORS[3],
    completedByMonth: seedCurrentMonth([
      1, 2, 3, 4, 8, 9, 10, 11, 15, 16, 17, 18, 22, 23, 24,
    ]),
  },
  {
    id: "5",
    name: "No alcohol",
    goal: 25,
    color: PASTEL_HABIT_COLORS[0],
    completedByMonth: seedCurrentMonth([
      1, 2, 3, 4, 8, 9, 10, 11, 15, 16, 17, 18, 22, 23, 24, 25, 29,
    ]),
  },
  {
    id: "6",
    name: "No concentrated sugar",
    goal: 20,
    color: PASTEL_HABIT_COLORS[1],
    completedByMonth: seedCurrentMonth([
      2, 3, 4, 9, 10, 11, 16, 17, 18, 23, 24, 25, 29,
    ]),
  },
  {
    id: "7",
    name: "Eat a light dinner",
    goal: 20,
    color: PASTEL_HABIT_COLORS[2],
    completedByMonth: seedCurrentMonth([
      1, 2, 3, 8, 9, 10, 15, 16, 17, 22, 23, 24, 29,
    ]),
  },
  {
    id: "8",
    name: "Sleep for 7.5 hrs",
    goal: 25,
    color: PASTEL_HABIT_COLORS[3],
    completedByMonth: seedCurrentMonth([
      1, 2, 3, 4, 8, 9, 10, 11, 15, 16, 17, 18, 22, 23, 24, 25,
    ]),
  },
];
