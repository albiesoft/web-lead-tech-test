import { useSocket } from "@/context/socketContext";
import useMessagesStore, { type Message } from "@/store/messages.store";
import { decodeMsg } from "@/utils/messages";
import { useEffect, useState } from "react";

export const useGetMessages = () => {
  const [loading, setLoading] = useState(true);
  const messages = useMessagesStore((state) => state.messages);
  const createMessage = useMessagesStore((state) => state.createMessage);
  const ws = useSocket((state) => state.ws);

  useEffect(() => {
    if (!!loading) {
      ws?.on("chat-msg-recieved", (chatMsg: string) => {
        const message = decodeMsg(chatMsg);
        createMessage(message);
      });
      setLoading(() => false);
    }
  }, [ws, loading]);

  return { messages, loading };
};
