import React, { useState } from "react";
import "./App.css";
import Chat from "./components/ChatMessage";

function App() {
  const [currentView, setCurrentView] = useState(
   "ChatMessage"
  );

  const changeView = view => {
    setCurrentView( `${view} `);
  };

  let view = "";
  if (currentView === "ChatMessage") {
    view = <Chat changeView={changeView} />;
  };

  return (<div className="App">
    hELLO FROM APP!
          {view}
  </div>);
}

export default App;
