import { useState } from "react";
import useUserStore from "@/store/user.store";
import { useSendMessage } from "@/hooks/useSendMessage";

export const ChatForm = () => {
  const [currentMessage, setCurrentMessage] = useState("");
  const currentUser = useUserStore((state) => state.currentUser);
  const currentRecipient = useUserStore((state) => state.currentRecipient);
  const { sendMessage } = useSendMessage();

  const handleMessageSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!currentRecipient || !currentMessage.trim()) return;

    sendMessage({
      senderId: currentUser.id,
      recipientId: currentRecipient.id,
      content: currentMessage.trim(),
    });

    setCurrentMessage("");
  };

  return (
    <div className="p-[20px] px-[10px]">
      <form
        onSubmit={(e) => handleMessageSend(e)}
        className="flex gap-[10px]"
        data-testid="chat-form"
      >
        <input
          type="text"
          data-testid="chat-form-input"
          placeholder={`Message ${currentRecipient?.name || ""}`}
          className="flex-1 rounded-full border-[8px] border-[#cfcfcf] px-[12px] py-[8px]"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
      </form>
    </div>
  );
};
