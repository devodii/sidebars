export const parseElementsContext = <T>(ctx: T, name: string): T => {
  if (!ctx) {
    throw new Error(`${name} context must be used within it's provider`);
  }

  return ctx;
};
