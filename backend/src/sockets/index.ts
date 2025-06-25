import { DefaultEventsMap, Server, Socket } from "socket.io";
import { decodeMsg, encodeMsg } from "@/utils/messages";

export type WSServer = Server<
  DefaultEventsMap,
  DefaultEventsMap,
  DefaultEventsMap,
  any
>;
export type WSSocket = Socket<
  DefaultEventsMap,
  DefaultEventsMap,
  DefaultEventsMap,
  any
>;

// This is a provisional way to hold online users.
// in a real application I would use something like Redis.
const onlineUsers: number[] = [];

export const initSocket = (io: WSServer) => {
  io.on("connection", (socket: WSSocket) => {
    const userId = socket.handshake.query.userId as string;

    if (userId != "undefined") {
      const parsed = parseInt(userId, 10);

      if (!Number.isNaN(parsed)) {
        onlineUsers.push(parsed);
        socket.join(`USER#${parsed}`);
      }
    }

    io.emit("broadcast-online-users", encodeMsg({ onlineUsers }));

    socket.on("chat-msg-sent", (msg) => {
      const { userId } = socket.handshake.query;
      const { recipientId, content } = decodeMsg(msg);

      console.log("info", { userId, recipientId, content });

      io.to(`USER#${recipientId}`).emit(
        "chat-msg-recieved",
        encodeMsg({ content, sender: userId })
      );
    });

    socket.on("disconnect", () => {
      const userId = socket.handshake.query.userId as string;

      if (userId != "undefined") {
        const parsed = parseInt(userId, 10);

        if (!Number.isNaN(parsed)) {
          delete onlineUsers[parsed];
        }
      }

      io.emit("broadcast-online-users", encodeMsg({ onlineUsers }));
    });
  });
};
