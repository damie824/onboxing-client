import { Helmet } from "react-helmet";
import Chatroom from "../../components/chats/chatroom";

import "../../styles/chats/chat.scss";
import { useEffect, useState } from "react";
import axios from "axios";

interface chatroom {
  id: string;
  locationX: number;
  locationY: number;
  purchased: boolean;
  thumbnail: string;
  title: string;
}

export default function ChatRoom() {
  const [chatrooms, setChatrooms] = useState([] as chatroom[]);

  useEffect(() => {
    const prepare = async () => {
      const res = await axios.get(
        `http://${process.env.REACT_APP_BACKEND_URL}/group/get`,
        {
          withCredentials: true,
        }
      );
      console.log(res.data.data);
      setChatrooms(res.data.data);
    };
    console.log("http://" + process.env.REACT_APP_BACKEND_URL + "/group/get");
    prepare();
  }, []);

  return (
    <main>
      <Helmet>
        <title>채팅 - ONBOXING</title>
      </Helmet>
      <div className="chat-title">
        <h1>채팅방 목록이 준비되었어요!</h1>
        <p>주문이 완료된 채팅은 보여지지 않아요.</p>
      </div>
      <div className="chatroom-container">
        {chatrooms.map((a, i) => {
          return (
            <Chatroom
              id={a.id}
              title={a.title}
              date="2024-05-06"
              thumbnail={a.thumbnail}
              recent="ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ"
              key={i}
            />
          );
        })}
      </div>
    </main>
  );
}
