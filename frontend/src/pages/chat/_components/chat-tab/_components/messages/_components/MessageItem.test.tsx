import SocketProvider from "@/context/socketContext";
import type { MessageProps } from "./MessageItem";
import MessageItem from "./MessageItem";
import { render } from "@testing-library/react";

describe("<MessageItem />", () => {
  const wrapper = (initialProps: MessageProps) => (
    <SocketProvider>
      <MessageItem {...initialProps} />
    </SocketProvider>
  );
  it("should render correctly", () => {
    const props: MessageProps = {
      message: {
        id: 1,
        recipientId: 1,
        senderId: 2,
        content: "Message to Rudy",
        timestamp: new Date().toISOString(),
      },
    };
    const comp = render(wrapper(props));

    expect(comp).toMatchSnapshot();
  });
});
