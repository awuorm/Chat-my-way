import React, { useState } from "react";
import "./App.css";
import Chat from "./components/ChatMessage";
import Signup from "./components/SignUp";

function App() {
  const [currentView, setCurrentView] = useState("ChatMessage");

  let view = "";
  if (currentView === "ChatMessage") {
    view = <Chat setCurrentView={setCurrentView} />;
  } else if (currentView === "signup") {
    view = <Signup />;
  }

  return <div className="App">{view}</div>;
}

export default App;
