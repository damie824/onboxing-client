import { useEffect, useState } from "react";
import ChatHeader from "../../components/chats/chat-header";
import ChatInput from "../../components/chats/chat-input";
import Chat, { target } from "../../components/chats/chats";
import DisableFooter from "../../components/global/disableFooter";
import * as io from "socket.io-client";
import axios from "axios";
import { useParams } from "react-router-dom";

interface chats {
  target: "me" | "another";
  contents: string;
}

export default function Chats() {
  const params = useParams();

  const [userId, setUserId] = useState(0);
  const [chattings, setChats] = useState([] as chats[]);
  const socket = io.connect(process.env.REACT_APP_BACKEND_URL || "");

  useEffect(() => {
    const prepare = async () => {
      try {
        const res = await axios.get(
          `http://${process.env.REACT_APP_BACKEND_URL}/auth/check-login`,
          { withCredentials: true }
        );
        setUserId(res.data.user.id);
      } catch (error) {
        console.warn(error);
      }
    };
    prepare();
  }, []);

  useEffect(() => {
    window.scrollTo({ left: 0, top: 100 });
    socket.emit("enter_room", 1);
    socket.on("message", (message: string, target: number) => {
      const newChats = [...chattings];
      console.log(userId);
      console.log(target);
      console.log(Number(target) === userId ? "me" : "another");
      newChats.push({
        target: (target == userId ? "me" : "another") as "me" | "another",
        contents: message,
      });
      setChats(newChats);
    });
  }, [chattings, userId]);
  return (
    <main className="chat-main">
      <DisableFooter />
      <ChatHeader />
      <ChatInput io={socket} chatId={params?.id || ""} userId={userId} />
      {chattings.map((a, i) => {
        return <Chat target={target[a.target]} contents={a.contents} key={i} />;
      })}
    </main>
  );
}
