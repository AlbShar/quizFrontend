import { Chart } from "./chart";

import type { TTypeChart } from "./types";

export const withChart = (typeChart: TTypeChart) => () =>
  <Chart typeChart={typeChart} />;

