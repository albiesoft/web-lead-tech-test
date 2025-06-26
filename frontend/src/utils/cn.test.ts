import { describe, it, expect } from "vitest";
import { cn } from "./cn";

describe("CN Util - Class Merge", () => {
  it("should merge multiple strings", () => {
    const classes = ["flex", "gap-2", "items-center"];

    const result = cn(classes);

    expect(result).toBe(classes.join(" "));
  });
});
