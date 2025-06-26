import type { FC } from "react";
import MessageItem from "./_components/MessageItem";
import { useGetMessages } from "@/hooks/useGetMessages";
import { differenceInSeconds, format } from "date-fns";
import { daysAgo } from "@/utils/dates";

export const MessagesList: FC = () => {
  const { messages } = useGetMessages();

  return (
    <div className="flex-1 flex flex-col p-[5px] overflow-auto max-h-[490px]">
      <div className="mt-auto">
        {messages.map((message, idx) => {
          const oldMsg = messages[idx - 1];
          if (!!oldMsg) {
            const diff = differenceInSeconds(
              message.timestamp,
              oldMsg.timestamp
            );

            if (
              diff > 3600 ||
              (oldMsg.senderId === message.senderId && diff > 20)
            ) {
              return (
                <>
                  <div>
                    <p className="text-sm text-center mb-6">
                      <strong>{daysAgo(message.timestamp)}</strong>{" "}
                      <span>{format(message.timestamp, "H:mm aa")}</span>
                    </p>
                  </div>
                  <MessageItem message={message} key={message.id} />
                </>
              );
            }
          } else {
            return (
              <>
                <div>
                  <p className="text-sm text-center mb-6">
                    <strong>{daysAgo(message.timestamp)}</strong>{" "}
                    <span>{format(message.timestamp, "H:mm aa")}</span>
                  </p>
                </div>
                <MessageItem message={message} key={message.id} />
              </>
            );
          }
          return <MessageItem message={message} key={message.id} />;
        })}
      </div>
    </div>
  );
};
