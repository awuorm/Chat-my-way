import React from "react";

const Chat = props => {
  const changeView = () => {
    props.changeView("signUp");
  };
  return (
    <div>
      <button className="chat-button" onClick={changeView}>
        Send a message
      </button>
    </div>
  );
};

export default Chat;
