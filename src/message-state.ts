export type CommunicatorMessage = {
  id: string;
  channelId: string;
  author: "rommie" | "user" | "system";
  body: string;
  createdAt: string;
};

export type CommunicatorThread = {
  id: string;
  title: string;
  messages: CommunicatorMessage[];
};

export const initialThread: CommunicatorThread = {
  id: "commonwealth",
  title: "Commonwealth",
  messages: [
    {
      id: "system-1",
      channelId: "commonwealth",
      author: "system",
      body: "Mainframe messaging API pending.",
      createdAt: "2026-04-28T00:00:00.000Z",
    },
  ],
};

export function appendMessage(
  thread: CommunicatorThread,
  message: CommunicatorMessage,
): CommunicatorThread {
  return {
    ...thread,
    messages: [...thread.messages, message],
  };
}
