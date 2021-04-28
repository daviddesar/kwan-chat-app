import React from 'react';
import './chat-header.style.scss';

const ChatHeader = () => {
    // passing props to get chat room name
    return (
        <div className="chat-room__header">
            <i className="fa fa-chevron-left back-button"></i>
            <p className="chat-room__name">Chat room name</p>
            <i className="fa fa-circle online-status"></i>
        </div>
    )
}

export default ChatHeader;