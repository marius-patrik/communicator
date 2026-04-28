import { expect, test } from "bun:test";
import { appendMessage, initialThread } from "./message-state";

test("appendMessage preserves thread identity and appends in order", () => {
  const nextThread = appendMessage(initialThread, {
    id: "user-1",
    channelId: "commonwealth",
    author: "user",
    body: "hello",
    createdAt: "2026-04-28T00:01:00.000Z",
  });

  expect(nextThread.id).toBe(initialThread.id);
  expect(nextThread.messages.map((message) => message.id)).toEqual([
    "system-1",
    "user-1",
  ]);
});
