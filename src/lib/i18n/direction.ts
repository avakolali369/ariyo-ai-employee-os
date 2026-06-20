export type DemoLocale = "en" | "en-US" | "en-DE" | "en-IT" | "fa" | "fa-IR" | "ar" | "ar-AE";
export type Direction = "ltr" | "rtl";

const rtlLanguageCodes = new Set(["fa", "ar"]);

export function getLanguageCode(locale: DemoLocale | string): string {
  return locale.split("-")[0]?.toLowerCase() ?? "en";
}

export function getDirection(locale: DemoLocale | string): Direction {
  return rtlLanguageCodes.has(getLanguageCode(locale)) ? "rtl" : "ltr";
}

export function getTextAlignment(locale: DemoLocale | string): "left" | "right" {
  return getDirection(locale) === "rtl" ? "right" : "left";
}
