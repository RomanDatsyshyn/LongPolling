import React, { useState } from "react";
const { io } = require("socket.io-client");

const WsUser2 = () => {
  const socket = io("ws://localhost:3001");

  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);

  const connect = () => {
    socket.emit("join", { room: "serviceSellerFeed-62528a7938fc9299aa8b9306" });
    socket.on("message", (messages) => setMessages(messages));
  };

  const sendMessage = () => {
    socket.emit("sendServiceSellerOfferToUser", {
      userId: "62486b2ccc97633ca1a504c4",
      serviceSellerId: "62528a7938fc9299aa8b9306",
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
              <div className="message">{msg}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WsUser2;
