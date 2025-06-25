import { describe, expect, test } from "@jest/globals";
import { decodeMsg, encodeMsg } from "./messages";

describe("Messages Utils", () => {
  test("encodeMsg should return a different string than the message", () => {
    const msg = "Hello, this is a test!";
    const result = encodeMsg(msg);

    expect(result).not.toBe(msg);
  });

  test("decodeMsg should return same string as the initial message after encoding it", () => {
    const msg = "Hello, this is a test!";
    const encoded = encodeMsg(msg);
    const result = decodeMsg(encoded);
    expect(result).toBe(msg);
  });
});
