import { cn } from "@/utils/cn";
import type { Message } from "@/store/messages.store";
import useUserStore from "@/store/user.store";

export type MessageProps = {
  message: Message;
};

const MessageItem = ({ message }: MessageProps) => {
  const currentUser = useUserStore((state) => state.currentUser);

  return (
    <div
      className={cn(
        "flex",
        message?.senderId === currentUser.id ? "flex-row" : "flex-row-reverse"
      )}
    >
      <div>
        <div
          className={cn(
            "rounded-lg px-4 py-3 text-sm m-2",
            message?.senderId === currentUser.id
              ? "bg-gray-50 rounded-bl-none"
              : "bg-accent text-white rounded-br-none"
          )}
        >
          {message.content}
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
