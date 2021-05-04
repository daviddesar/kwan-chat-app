import React, { FC } from "react";
import Emoji from "react-emoji-render";
import { IMessageInfo } from "../../utils/interfaces";
import { StringQueryParam } from "../../utils/types";
import "./chat-message.style.scss";

type Props = {
  messageInfo: IMessageInfo;
  currentUser: StringQueryParam;
};
const ChatMessage: FC<Props> = (props) => {
  const { username, message } = props.messageInfo;
  const currentUser = props.currentUser;

  if (username === "admin") {
    return <p className="admin-message">{message}</p>;
  } else if (username !== currentUser) {
    return (
      <div className="other-message">
        <div className="owner-message">{username}</div>
        <div className="message-content">
          <Emoji text={message} />
        </div>
      </div>
    );
  }
  return (
    <div className="my-message">
      <div className="message-content">
        <Emoji text={message} />
      </div>
    </div>
  );
};

export default ChatMessage;
