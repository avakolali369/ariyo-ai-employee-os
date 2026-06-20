import { describe, expect, it } from "vitest";

import { getDirection, getTextAlignment } from "@/lib/i18n/direction";

describe("locale direction", () => {
  it("maps Persian and Arabic locales to RTL", () => {
    expect(getDirection("fa-IR")).toBe("rtl");
    expect(getDirection("ar-AE")).toBe("rtl");
    expect(getTextAlignment("fa-IR")).toBe("right");
  });

  it("maps English and European locales to LTR", () => {
    expect(getDirection("en-US")).toBe("ltr");
    expect(getDirection("en-DE")).toBe("ltr");
    expect(getTextAlignment("en-IT")).toBe("left");
  });
});
