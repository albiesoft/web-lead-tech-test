import { ChatForm } from "./_components/form/ChatForm";
import { MessagesList } from "./_components/messages/MessagesList";

const ChatTab = () => {
  return (
    <div className="flex-1 flex flex-col min-h-screen">
      <MessagesList />
      <ChatForm />
    </div>
  );
};

export default ChatTab;
