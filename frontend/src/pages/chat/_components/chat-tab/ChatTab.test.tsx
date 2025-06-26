import SocketProvider from "@/context/socketContext";
import { render } from "@testing-library/react";
import ChatTab from "./ChatTab";

describe("<ChatTab />", () => {
  const wrapper = () => (
    <SocketProvider>
      <ChatTab />
    </SocketProvider>
  );

  it("should render correctly", () => {
    const comp = render(wrapper());

    expect(comp).toMatchSnapshot();
  });
});
