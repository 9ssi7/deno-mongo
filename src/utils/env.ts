export const getRequiredEnv = <T>(key: string): T => {
  const value = Deno.env.get(key);
  if (!value) {
    throw new Error(`${key} is required`);
  }
  return value as T;
};
