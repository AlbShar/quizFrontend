export const getShortFilterName = <T extends string>(filter: T) => {
  return filter.length > 15 ? `${filter.slice(0, 15)}...` : filter;
};
