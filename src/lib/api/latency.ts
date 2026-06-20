export const DEFAULT_MOCK_LATENCY_MS = 300;
export const SLOW_MOCK_LATENCY_MS = 1200;

export function waitForMockLatency(latencyMs = DEFAULT_MOCK_LATENCY_MS): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, latencyMs);
  });
}
