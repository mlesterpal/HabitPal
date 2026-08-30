export const READING_BASE = "/admin/dashboard/reading";

export type ReadingKind = "book" | "ministry";

export type ReadingTopic = {
  slug: string;
  label: string;
  kind: ReadingKind;
};

export const readingTopics: ReadingTopic[] = [
  { slug: "atomic-habits", label: "Atomic Habits", kind: "book" },
  { slug: "ministry", label: "Ministry", kind: "ministry" },
  {
    slug: "how-to-win-friends-and-influence-people",
    label: "How to Win Friends and Influence People",
    kind: "book",
  },
];

export function getReadingTopic(slug: string | undefined) {
  return readingTopics.find((topic) => topic.slug === slug);
}
