import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Container from "./Container";

describe("<Container>", () => {
  it("should match the snapshot", () => {
    const comp = render(<Container>children</Container>);

    expect(comp).toMatchSnapshot();
  });
});
