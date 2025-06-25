import { useSocket } from "@/context/socketContext";
import useMessagesStore, {
  type Message,
  type MessageInput,
} from "@/store/messages.store";
import { encodeMsg } from "@/utils/messages";

export const useSendMessage = () => {
  const messageId = useMessagesStore((state) => state.messages?.length + 1);
  const createMessage = useMessagesStore((state) => state.createMessage);
  const ws = useSocket((state) => state.ws);

  const sendMessage = (message: MessageInput) => {
    const newMessage: Message = {
      id: messageId,
      senderId: message.senderId,
      recipientId: message.recipientId,
      content: message.content,
      timestamp: new Date().toISOString(),
    };

    createMessage(newMessage);
    ws?.emit("chat-msg-sent", encodeMsg(newMessage));
  };

  return { sendMessage };
};
