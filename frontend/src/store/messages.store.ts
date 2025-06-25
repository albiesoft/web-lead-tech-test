import { create } from "zustand";

export type Message = {
  id: number;
  senderId: number;
  recipientId: number;
  content: string;
  timestamp: string;
};

export type MessageInput = {
  senderId: number;
  recipientId: number;
  content: string;
};

type MessagesState = {
  messages: Message[];
  createMessage: (message: Message) => void;
};

const useMessagesStore = create<MessagesState>()((set) => ({
  messages: [],
  createMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
}));

export default useMessagesStore;
