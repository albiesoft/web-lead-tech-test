import { createContext, type FC, useContext, useState } from "react";
import { createStore, useStore, type StoreApi } from "zustand";

import io, { Socket } from "socket.io-client";

const WS_URL = import.meta.env.VITE_WS_URL;

type CustomSocket = Socket & {
  userId?: number;
};

interface ProviderProps {
  children: any;
}

type SocketState = {
  ws: Socket | null;
  changeUser: (userId: number) => void;
};

const SocketContext = createContext<StoreApi<SocketState>>(
  {} as StoreApi<SocketState>
);

const useSocket = <T,>(selector: (state: SocketState) => T) => {
  const store = useContext(SocketContext);

  if (!store) {
    throw new Error("Missing SocketProvider");
  }
  return useStore(store, selector);
};

const SocketProvider: FC<ProviderProps> = ({ children }) => {
  const ws: CustomSocket = io(WS_URL, {
    query: {
      userId: 1,
    },
  });

  const [store] = useState(() =>
    createStore<SocketState>((set) => ({
      ws,
      changeUser: (userId: number) =>
        set(() => {
          const ws: CustomSocket = io(WS_URL, {
            query: {
              userId,
            },
          });

          return {
            ws,
          };
        }),
    }))
  );

  return (
    <SocketContext.Provider value={store}>{children}</SocketContext.Provider>
  );
};

export { SocketProvider as default, useSocket, SocketContext };
