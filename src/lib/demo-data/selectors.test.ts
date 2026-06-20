import { describe, expect, it } from "vitest";

import { selectDashboardOverview, selectLocalizedShell } from "@/lib/demo-data/selectors";

describe("demo data selectors", () => {
  it("derives dashboard metrics from canonical fixtures", () => {
    const overview = selectDashboardOverview();

    expect(overview.company.name).toBe("Novara Group");
    expect(overview.metrics.activeAiEmployees).toBeGreaterThan(0);
    expect(overview.metrics.monthlyAiCost).toBe(3840);
  });

  it("returns locale-aware shell copy and direction", () => {
    expect(selectLocalizedShell("fa-IR").direction).toBe("rtl");
    expect(selectLocalizedShell("en-DE").direction).toBe("ltr");
  });
});
