import MessageItem from "./_components/message/MessageItem";
import { ChatForm } from "./_components/form";
import { useGetMessages } from "@/hooks/useGetMessages";

const ChatTab = () => {
  const { messages } = useGetMessages();

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 flex flex-col p-[5px] overflow-auto max-h-[490px]">
        <div className="mt-auto">
          {messages.map((message) => (
            <div key={message.timestamp}>
              <MessageItem message={message} key={message.id} />
            </div>
          ))}
        </div>
      </div>
      <ChatForm />
    </div>
  );
};

export default ChatTab;
