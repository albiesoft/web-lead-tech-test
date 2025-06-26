import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import UserCard, { type UserCardProps } from "./UserCard";

describe("<UserCard>", () => {
  const defaultProps: UserCardProps = {
    user: {
      id: 1,
      name: "Alisha",
      profile: "https://randomuser.me/api/portraits/women/89.jpg",
    },
  };

  it("should match the snapshot", () => {
    const comp = render(<UserCard {...defaultProps} />);

    expect(comp).toMatchSnapshot();
  });
});
