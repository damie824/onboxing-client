import axios from "axios";
import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";

export default function ChatInput(props: {
  io: Socket;
  chatId: string;
  userId: number;
}) {
  const [message, setMessage] = useState("");
  const io = props.io;

  return (
    <div className="chat-input-container">
      <form
        className="chat-input"
        onSubmit={(e) => {
          e.preventDefault();
          io.emit("message", message, Number(props.chatId), props.userId);
          setMessage("");
        }}
      >
        <input
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
        />
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
