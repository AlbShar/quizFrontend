import type { TPoints } from "../types";

const getTotalPoints = (points: TPoints): number => {
  if (points) {
    return Object.values(points).reduce((sum, curr) => sum + curr, 0);
  } else return 0;
};

export {getTotalPoints}