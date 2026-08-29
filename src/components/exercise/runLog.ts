export type RunEntry = {
  id: string;
  date: string;
  minutes: number;
  steps: number;
};

function daysAgoIso(days: number) {
  const date = new Date();
  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() - days);
  return date.toISOString().slice(0, 10);
}

export const runLog: RunEntry[] = [
  { id: "1", date: daysAgoIso(0), minutes: 32, steps: 4200 },
  { id: "2", date: daysAgoIso(1), minutes: 28, steps: 3800 },
  { id: "3", date: daysAgoIso(2), minutes: 45, steps: 6100 },
  { id: "4", date: daysAgoIso(4), minutes: 20, steps: 2500 },
  { id: "5", date: daysAgoIso(6), minutes: 36, steps: 4900 },
];

export const STEP_MILESTONES = [3000, 4000, 5000];

export function bestTimeForStepTarget(
  stepsTarget: number,
  entries: RunEntry[] = runLog,
) {
  const qualifying = entries.filter((run) => run.steps >= stepsTarget);
  if (qualifying.length === 0) return undefined;
  return [...qualifying].sort((a, b) => a.minutes - b.minutes)[0];
}
