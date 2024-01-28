import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/authContext";
import { ChatContext } from "../context/ChatContext";

export const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const ref = useRef();

  useEffect(() => {
    // Brings Message View to bottom whenever new message sends
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const imageCondition =
    message.senderId === currentUser.uid
      ? currentUser.photoURL
      : data.user.photoURL;

  const ownerCondition = message.senderId === currentUser.uid && "owner";

  return (
    <div ref={ref} className={`message ${ownerCondition}`}>
      <div className="messageInfo">
        <img src={imageCondition} alt="" />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};
