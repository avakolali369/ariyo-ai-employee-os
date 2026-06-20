import { mockApiClient } from "@/lib/api/mockClient";
import { realApiClient } from "@/lib/api/realClient";
import type { AriyoApiClient } from "@/lib/api/types";
import { appConfig } from "@/lib/config/app-config";

export const apiClient: AriyoApiClient =
  appConfig.apiMode === "mock" ? mockApiClient : realApiClient;
