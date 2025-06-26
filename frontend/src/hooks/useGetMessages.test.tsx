import { renderHook } from "@testing-library/react";
import { useGetMessages } from "./useGetMessages";
import SocketProvider from "@/context/socketContext";

describe("useGetMessages", () => {
  const wrapper = ({ children }: { children: any }) => {
    return <SocketProvider>{children}</SocketProvider>;
  };

  it("should return an array of messages", () => {
    const { result, rerender } = renderHook(() => useGetMessages(), {
      wrapper,
      initialProps: { ws: vi.fn() },
    });
    rerender();

    expect(result.current.messages.length).toBe(0);
    expect(result.current.loading).toBe(false);
  });
});
