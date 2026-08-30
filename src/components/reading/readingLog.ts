export type BookSession = {
  id: string;
  bookSlug: string;
  date: string;
  lastPage: number;
};

export type MinistrySession = {
  id: string;
  topic: string;
  date: string;
};

function daysAgoIso(days: number) {
  const date = new Date();
  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() - days);
  return date.toISOString().slice(0, 10);
}

export const bookSessions: BookSession[] = [
  { id: "1", bookSlug: "atomic-habits", date: daysAgoIso(0), lastPage: 142 },
  { id: "2", bookSlug: "atomic-habits", date: daysAgoIso(2), lastPage: 128 },
  { id: "3", bookSlug: "atomic-habits", date: daysAgoIso(5), lastPage: 96 },
  {
    id: "4",
    bookSlug: "how-to-win-friends-and-influence-people",
    date: daysAgoIso(1),
    lastPage: 54,
  },
  {
    id: "5",
    bookSlug: "how-to-win-friends-and-influence-people",
    date: daysAgoIso(4),
    lastPage: 31,
  },
];

export const ministrySessions: MinistrySession[] = [
  { id: "1", topic: "Sunday teaching", date: daysAgoIso(0) },
  { id: "2", topic: "Small group", date: daysAgoIso(3) },
  { id: "3", topic: "Prayer meeting", date: daysAgoIso(6) },
];

export function formatReadDate(isoDate: string) {
  return new Date(`${isoDate}T12:00:00`).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export function sessionsForBook(bookSlug: string) {
  return bookSessions
    .filter((session) => session.bookSlug === bookSlug)
    .sort((a, b) => b.date.localeCompare(a.date));
}
