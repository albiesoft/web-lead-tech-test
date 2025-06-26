import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Tabs, { type TabsProps } from "./Tabs";

describe("<Tabs>", () => {
  const mockOnChange = vi.fn();
  const renderComponent = (props?: TabsProps<string>) => {
    const defaultProps: TabsProps<string> = {
      tabs: [
        {
          id: "tab1",
          label: "Tab 1",
        },
        {
          id: "tab2",
          label: "Tab 2",
        },
        {
          id: "tab3",
          label: "Tab 3",
        },
      ],
      activeTab: "tab1",
      onTabChange: mockOnChange,
    };
    return render(<Tabs {...(!!props ? props : defaultProps)} />);
  };

  it("should match the snapshot", () => {
    const comp = renderComponent();
    expect(comp).toMatchSnapshot();
  });

  it("should trigger onTabChange when click", () => {
    const comp = renderComponent();

    fireEvent.click(comp.getByTestId("tab-tab2"));

    expect(mockOnChange).toHaveBeenCalled();
  });
});
