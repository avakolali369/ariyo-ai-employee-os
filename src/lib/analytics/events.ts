export type AnalyticsEventName =
  | "surface_viewed"
  | "empty_state_viewed"
  | "mock_api_state_loaded"
  | "rtl_ltr_direction_changed";

export type AnalyticsEvent = {
  eventName: AnalyticsEventName;
  eventVersion: 1;
  occurredAt: string;
  source: "frontend";
  properties: Record<string, string | number | boolean>;
};

export function createAnalyticsEvent(
  eventName: AnalyticsEventName,
  properties: AnalyticsEvent["properties"],
): AnalyticsEvent {
  return {
    eventName,
    eventVersion: 1,
    occurredAt: new Date().toISOString(),
    source: "frontend",
    properties,
  };
}
