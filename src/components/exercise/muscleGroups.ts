export type MusclePart = {
  slug: string;
  label: string;
};

export type MuscleGroup = {
  slug: string;
  label: string;
  parts: MusclePart[];
};

export const muscleGroups: MuscleGroup[] = [
  {
    slug: "chest",
    label: "Chest",
    parts: [
      { slug: "upper", label: "Upper chest" },
      { slug: "middle", label: "Middle chest" },
      { slug: "lower", label: "Lower chest" },
    ],
  },
  {
    slug: "triceps",
    label: "Triceps",
    parts: [
      { slug: "long-head", label: "Long head" },
      { slug: "short-head", label: "Short head" },
    ],
  },
  {
    slug: "biceps",
    label: "Biceps",
    parts: [
      { slug: "long-head", label: "Long head" },
      { slug: "short-head", label: "Short head" },
    ],
  },
  {
    slug: "shoulders",
    label: "Shoulders",
    parts: [
      { slug: "front", label: "Front delt" },
      { slug: "side", label: "Side delt" },
      { slug: "rear", label: "Rear delt" },
    ],
  },
  {
    slug: "back",
    label: "Back",
    parts: [
      { slug: "lats", label: "Lats" },
      { slug: "upper", label: "Upper back" },
      { slug: "lower", label: "Lower back" },
    ],
  },
];

export function getMuscleGroup(slug: string | undefined) {
  return muscleGroups.find((group) => group.slug === slug);
}

export function getMusclePart(
  groupSlug: string | undefined,
  partSlug: string | undefined,
) {
  const group = getMuscleGroup(groupSlug);
  if (!group) return undefined;
  const part = group.parts.find((item) => item.slug === partSlug);
  if (!part) return undefined;
  return { group, part };
}

export const WEIGHT_LIFTING_BASE = "/admin/dashboard/exercise/weight-lifting";
