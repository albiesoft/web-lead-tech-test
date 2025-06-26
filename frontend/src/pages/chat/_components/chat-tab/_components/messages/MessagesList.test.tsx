import SocketProvider from "@/context/socketContext";
import { MessagesList } from "./MessagesList";
import { render } from "@testing-library/react";
import type { Message } from "@/store/messages.store";

const mockedMessages: Message[] = [
  {
    id: 1,
    senderId: 1,
    recipientId: 2,
    content: "Hello",
    timestamp: new Date().toISOString(),
  },
  {
    id: 2,
    senderId: 1,
    recipientId: 2,
    content: "How are you?",
    timestamp: new Date().toISOString(),
  },
  {
    id: 3,
    senderId: 2,
    recipientId: 1,
    content: "Hey!",
    timestamp: new Date().toISOString(),
  },
  {
    id: 4,
    senderId: 2,
    recipientId: 1,
    content: "I am good and you?",
    timestamp: new Date().toISOString(),
  },
];

vi.mock("@/hooks/useGetMessages", () => ({
  useGetMessages: () => ({ messages: mockedMessages, loading: false }),
}));

describe("<MessageList />", () => {
  const wrapper = () => (
    <SocketProvider>
      <MessagesList />
    </SocketProvider>
  );

  it("should render correctly", () => {
    const comp = render(wrapper());

    expect(comp).toMatchSnapshot();
  });
});
