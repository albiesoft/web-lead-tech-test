import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Button from "./Button";

describe("<Button>", () => {
  it("should match the snapshot", () => {
    const comp = render(<Button>button</Button>);

    expect(comp).toMatchSnapshot();
  });
});
