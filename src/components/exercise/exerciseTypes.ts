import { FaRunning } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { MdSportsBasketball } from "react-icons/md";
import type { IconType } from "react-icons";

export type ExerciseType = {
  slug: string;
  label: string;
  description: string;
  icon: IconType;
};

export const exerciseTypes: ExerciseType[] = [
  {
    slug: "weight-lifting",
    label: "Weight Lifting",
    description: "Strength sessions and progressive overload.",
    icon: GiWeightLiftingUp,
  },
  {
    slug: "running",
    label: "Running",
    description: "Easy runs, intervals, and long distance.",
    icon: FaRunning,
  },
  {
    slug: "basketball",
    label: "Basketball",
    description: "Pickup games, drills, and conditioning.",
    icon: MdSportsBasketball,
  },
];

export function getExerciseType(slug: string | undefined) {
  return exerciseTypes.find((type) => type.slug === slug);
}
