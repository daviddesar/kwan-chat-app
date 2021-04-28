import React, { FC } from 'react';
import './chat-message.style.scss'

interface IMessageInfo {
    message: string,
    username: string
}
type Props = {
    messageInfo: IMessageInfo
}
const ChatMessage: FC<Props> = (props) => {
    
    const {username, message} = props.messageInfo;
    
    if (username !== null) {
        return (
            <div className="other-message">
                <div className="owner-message">{username}</div>
                <div className="message-content">{message}</div>
            </div>
        )
    }
    return (
        <div className="my-message">
          <div className="message-content"></div>
        </div>
    )
}

export default ChatMessage;