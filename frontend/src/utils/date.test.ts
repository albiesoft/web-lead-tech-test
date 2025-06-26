import { describe, it, expect } from "vitest";
import { daysAgo } from "./dates";

describe("daysAgo", () => {
  it("should return Today if timestamp is now", () => {
    const timestamp = new Date().toISOString();

    const result = daysAgo(timestamp);

    expect(result).toBe("Today");
  });

  it("should return Yesterday if timestamp is one day before", () => {
    const timestamp = new Date();
    timestamp.setDate(timestamp.getDate() - 1);

    const result = daysAgo(timestamp.toISOString());

    expect(result).toBe("Yesterday");
  });

  it("should return the formated date if timestamp is no today or yesterday", () => {
    const timestamp = new Date("2025-01-15").toISOString();

    const result = daysAgo(timestamp);
    expect(result).toBe("January 15, 2025");
  });
});
