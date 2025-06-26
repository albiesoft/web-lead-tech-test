import { render } from "@testing-library/react";
import Header from "./Header";

describe("<ChatTab />", () => {
  it("should render correctly", () => {
    const comp = render(<Header />);

    expect(comp).toMatchSnapshot();
  });
});
