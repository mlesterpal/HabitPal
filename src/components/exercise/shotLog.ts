export type ShotEntry = {
  id: string;
  date: string;
  shots: number;
  seconds: number;
};

function daysAgoIso(days: number) {
  const date = new Date();
  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() - days);
  return date.toISOString().slice(0, 10);
}

export const shotLog: ShotEntry[] = [
  { id: "1", date: daysAgoIso(0), shots: 50, seconds: 252 },
  { id: "2", date: daysAgoIso(0), shots: 100, seconds: 540 },
  { id: "3", date: daysAgoIso(1), shots: 50, seconds: 238 },
  { id: "4", date: daysAgoIso(2), shots: 100, seconds: 510 },
  { id: "5", date: daysAgoIso(3), shots: 50, seconds: 265 },
  { id: "6", date: daysAgoIso(5), shots: 100, seconds: 498 },
];

export const SHOT_MILESTONES = [50, 100];

export function bestTimeForShotTarget(
  shotsTarget: number,
  entries: ShotEntry[] = shotLog,
) {
  const qualifying = entries.filter((entry) => entry.shots >= shotsTarget);
  if (qualifying.length === 0) return undefined;
  return [...qualifying].sort((a, b) => a.seconds - b.seconds)[0];
}

export function formatShotTimer(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${minutes}:${String(rest).padStart(2, "0")}`;
}

export function shotLogByDay(entries: ShotEntry[] = shotLog) {
  const sorted = [...entries].sort((a, b) => {
    const byDate = b.date.localeCompare(a.date);
    if (byDate !== 0) return byDate;
    return a.shots - b.shots;
  });
  const groups: { date: string; entries: ShotEntry[] }[] = [];
  for (const entry of sorted) {
    const last = groups[groups.length - 1];
    if (last && last.date === entry.date) {
      last.entries.push(entry);
    } else {
      groups.push({ date: entry.date, entries: [entry] });
    }
  }
  return groups;
}
