export const getShortListTopics = <T extends string>(topics: T[]): string[] => {
  return topics.map((topic) =>
    topic.length > 25 ? `${topic.slice(0, 25)}...` : topic,
  );
};
