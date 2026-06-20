export type ApiMode = "mock" | "real";

function readApiMode(): ApiMode {
  const mode = import.meta.env.VITE_ARIYO_API_MODE;

  return mode === "real" ? "real" : "mock";
}

export const appConfig = {
  apiMode: readApiMode(),
  appEnv: import.meta.env.MODE,
} as const;
