export type LiftEntry = {
  id: string;
  date: string;
  time: string;
  muscleGroupSlug: string;
  musclePartSlug: string;
  weightKg: number;
  note: string;
};

function daysAgoIso(days: number) {
  const date = new Date();
  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() - days);
  return date.toISOString().slice(0, 10);
}

export const liftLog: LiftEntry[] = [
  {
    id: "1",
    date: daysAgoIso(0),
    time: "18:10",
    muscleGroupSlug: "chest",
    musclePartSlug: "upper",
    weightKg: 40,
    note: "Incline dumbbell press, last set slow negatives.",
  },
  {
    id: "2",
    date: daysAgoIso(0),
    time: "18:35",
    muscleGroupSlug: "triceps",
    musclePartSlug: "long-head",
    weightKg: 22.5,
    note: "Overhead cable extensions, 3x12.",
  },
  {
    id: "3",
    date: daysAgoIso(1),
    time: "17:45",
    muscleGroupSlug: "back",
    musclePartSlug: "lats",
    weightKg: 55,
    note: "Lat pulldown, paused at the bottom.",
  },
  {
    id: "4",
    date: daysAgoIso(2),
    time: "19:00",
    muscleGroupSlug: "chest",
    musclePartSlug: "middle",
    weightKg: 60,
    note: "Flat bench, missed the last rep on set 3.",
  },
  {
    id: "5",
    date: daysAgoIso(2),
    time: "19:20",
    muscleGroupSlug: "triceps",
    musclePartSlug: "short-head",
    weightKg: 18,
    note: "Pushdowns, focus on lockout.",
  },
  {
    id: "6",
    date: daysAgoIso(3),
    time: "07:30",
    muscleGroupSlug: "shoulders",
    musclePartSlug: "side",
    weightKg: 12,
    note: "Lateral raises, no swing.",
  },
  {
    id: "7",
    date: daysAgoIso(4),
    time: "18:00",
    muscleGroupSlug: "biceps",
    musclePartSlug: "long-head",
    weightKg: 16,
    note: "Incline curls, full stretch.",
  },
  {
    id: "8",
    date: daysAgoIso(5),
    time: "18:50",
    muscleGroupSlug: "chest",
    musclePartSlug: "lower",
    weightKg: 45,
    note: "Decline press, controlled tempo.",
  },
  {
    id: "9",
    date: daysAgoIso(6),
    time: "17:15",
    muscleGroupSlug: "back",
    musclePartSlug: "upper",
    weightKg: 50,
    note: "Chest-supported rows.",
  },
];

function startOfDay(date: Date) {
  const copy = new Date(date);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

export function lastSevenDaysLifts(entries: LiftEntry[] = liftLog) {
  const today = startOfDay(new Date());
  const cutoff = new Date(today);
  cutoff.setDate(cutoff.getDate() - 6);

  return entries
    .filter((entry) => {
      const liftDate = startOfDay(new Date(`${entry.date}T12:00:00`));
      return liftDate >= cutoff && liftDate <= today;
    })
    .sort((a, b) => {
      const byDate = b.date.localeCompare(a.date);
      if (byDate !== 0) return byDate;
      return b.time.localeCompare(a.time);
    });
}

export function liftsForMusclePart(
  muscleGroupSlug: string,
  musclePartSlug: string,
  entries: LiftEntry[] = liftLog,
) {
  return entries
    .filter(
      (entry) =>
        entry.muscleGroupSlug === muscleGroupSlug &&
        entry.musclePartSlug === musclePartSlug,
    )
    .sort((a, b) => {
      const byDate = b.date.localeCompare(a.date);
      if (byDate !== 0) return byDate;
      return b.time.localeCompare(a.time);
    });
}

export function formatLiftDate(isoDate: string) {
  return new Date(`${isoDate}T12:00:00`).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export function formatLiftTime(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}
