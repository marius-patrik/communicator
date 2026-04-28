import { MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { appendMessage, initialThread } from "./message-state";

export function CommunicatorMount() {
  const [thread, setThread] = useState(initialThread);
  const [draft, setDraft] = useState("");

  function sendDraft() {
    const body = draft.trim();

    if (!body) {
      return;
    }

    setThread((currentThread) =>
      appendMessage(currentThread, {
        id: `user-${currentThread.messages.length + 1}`,
        channelId: currentThread.id,
        author: "user",
        body,
        createdAt: new Date().toISOString(),
      }),
    );
    setDraft("");
  }

  return (
    <section className="communicator">
      <header className="communicator-header">
        <MessageSquare aria-hidden="true" />
        <div>
          <p>Channel</p>
          <h1>{thread.title}</h1>
        </div>
      </header>
      <ol className="communicator-messages">
        {thread.messages.map((message) => (
          <li className="communicator-message" key={message.id}>
            <span>{message.author}</span>
            <p>{message.body}</p>
          </li>
        ))}
      </ol>
      <form
        className="communicator-composer"
        onSubmit={(event) => {
          event.preventDefault();
          sendDraft();
        }}
      >
        <input
          aria-label="Message"
          onChange={(event) => setDraft(event.currentTarget.value)}
          placeholder="Message"
          value={draft}
        />
        <button title="Send" type="submit">
          <Send aria-hidden="true" />
        </button>
      </form>
    </section>
  );
}
