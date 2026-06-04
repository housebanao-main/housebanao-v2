export const GA_ID = "G-RRHNPC8S6W";

export function getUtmParams() {
  if (typeof window === "undefined") return {};
  const p = new URLSearchParams(window.location.search);
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
  const result = {};
  keys.forEach((k) => { if (p.get(k)) result[k] = p.get(k); });
  return result;
}

export function gtagEvent(eventName, params = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}
