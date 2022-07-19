import { useEffect, useState } from "react";
import io from "socket.io-client";
import { v4 } from "uuid";
import "./styles/Chat.css";
import axios from "axios";


export default function Chat(props) {
  const [name, setName] = useState("");
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [socket, setSocket] = useState();
  const userID = document.cookie.slice(7);
  const [chat, setChat] = useState(true);

  axios
    .get(`/api/owners/${userID}`)
    .then((response) => {
      // console.log("response for user:", response);
      // console.log("username", response.data.name);
      setName(response.data.name);
      return response;
    })
    .catch((err) => console.error(err));

  useEffect(() => {
    // Connect to server
    const socket = io();
    setSocket(socket);

    socket.on("connect", () => {
      console.log("Connected!");
    });

    socket.on("user", (msg) => {
      setMessages((prev) => [`${msg.name} says: ${msg.text}`, ...prev]);
    });

    socket.on("server", (msg) => {
      setMessages((prev) => [msg, ...prev]);
    });

    socket.on("name", (name) => {
      setName(name);
    });

    return () => socket.disconnect(); // prevents memory leak!
  }, []);

  const list = messages
    .map((msg) => (
      <div className="chatBubble" key={v4()}>
        {msg}
      </div>
    ))
    .sort()
    .reverse();

  const send = function () {
    socket.emit("message", { name, text });
  };

  const hideChat = (event) => {
    setChat((current) => !current);
  };

  return (
    <div className="chat">
      <h3 className="headerChat">Chat</h3>
      <button className="closechat" onClick={hideChat}>
        <i className="fa-solid fa-square-xmark fa-2xl"></i>
      </button>
      <div className="email">{name},</div>

      <div className="headerChat">
        You're chatting with:
        <img className="userChatThumb" src={props.owner_photo} />
        {props.owner_name}
      </div>
      <div className="messagehistory">
        <div className="messages">{list}</div>
      </div>
      <div id="newmessagebox">
        <textarea
          className="newmessage"
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message"
        />
      </div>
      <div id="chatbottom">
        <button className="clear" onClick={() => setMessages([])}>
          Clear
        </button>
        <button className="send" onClick={send}>
          Send
        </button>
      </div>
    </div>
  );
}
