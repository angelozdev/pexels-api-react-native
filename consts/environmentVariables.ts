import { PEXELS_API_KEY } from "@env";

if (!PEXELS_API_KEY) throw new Error("PEXELS_API_KEY is not defined");

export const EnvironmentVariables = {
  pexels: {
    apiKey: PEXELS_API_KEY,
  },
};
