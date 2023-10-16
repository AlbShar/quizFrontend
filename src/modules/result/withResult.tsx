import { Result } from "./result";

import type { TResults } from "./types";

export const withResult = (typeResult: TResults) => () =>
  <Result typeResult={typeResult} />;

