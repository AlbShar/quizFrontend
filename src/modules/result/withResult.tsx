import { SpentTime } from './components/spentTime/spentTime';
import { ResultScores } from './components/resultScores/resultScores';

import type { TResults } from './types';

export const withResult = (typeResult: TResults) => () => {
  return <>{typeResult === 'time' ? <SpentTime /> : <ResultScores />}</>;
};
