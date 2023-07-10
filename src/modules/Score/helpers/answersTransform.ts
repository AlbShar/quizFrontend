import type { TAnswersDB, TPoints } from "../types";

const answersTransform = (response: TAnswersDB | null): TPoints | null => {
  if (response) {
    const points = Object.fromEntries(
      Object.entries({ ...response }).map(([key, value]) => [key, value.point]),
    );
    return points;
  } else {
    return null;
  }
};

export { answersTransform };