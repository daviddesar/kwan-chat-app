import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { StringQueryParam } from '../../utils/types';
import './chat-header.style.scss';

type Props = {
    chatRoomName: StringQueryParam
}

const ChatHeader: FC<Props> = ({chatRoomName}) => {
    // passing props to get chat room name
    return (
        <div className="chat-room__header">
            <Link to="/" className="back-button">
                <i className="fa fa-chevron-left"></i>
            </Link>
            <p className="chat-room__name">Chat room: {chatRoomName}</p>
            <i className="fa fa-circle online-status"></i>
        </div>
    )
}

export default ChatHeader;