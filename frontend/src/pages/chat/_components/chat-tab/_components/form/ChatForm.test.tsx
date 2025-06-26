import { render } from "@testing-library/react";
import { ChatForm } from "./ChatForm";
import SocketProvider from "@/context/socketContext";

describe("<ChatForm/>", () => {
  const wrapper = () => (
    <SocketProvider>
      <ChatForm />
    </SocketProvider>
  );

  it("should match the snapshot", () => {
    const comp = render(wrapper());

    expect(comp).toMatchSnapshot();
  });
});
