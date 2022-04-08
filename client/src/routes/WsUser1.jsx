import React, { useEffect, useState } from "react";
const { io } = require("socket.io-client");

const WsUser1 = () => {
  const socket = io("ws://localhost:3001");

  const [value, setValue] = useState("");
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log(users, "users");
  }, [users]);

  useEffect(() => {
    console.log(messages, "messages");
  }, [messages]);

  const connect = () => {
    socket.emit("join", { username: "Roman", room: "806" });
    socket.on("getUsers", ({ users }) => setUsers(users));
    socket.on("message", (message) =>
      setMessages((prev) => [message, ...prev])
    );
  };

  const sendMessage = () => {
    socket.emit("chatMessage", {
      username: "Roman",
      room: "806",
      msg: value,
    });
  };

  return (
    <div className="center">
      <div>
        <div onClick={() => connect()}>Sign In</div>
        <div className="form">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
          />
          <button onClick={() => sendMessage()}>SEND</button>
        </div>
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index}>
              <div className="message">
                {msg.username} - {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WsUser1;
