import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import User1 from "./routes/user1";
import User2 from "./routes/user2";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="user1" element={<User1 />} />
      <Route path="user2" element={<User2 />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
