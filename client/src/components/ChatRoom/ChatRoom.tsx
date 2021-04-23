import React, { FC } from 'react';
import {Location} from 'history';
import queryString from 'query-string'
interface IHistory {
    location: Location
}


const ChatRoom:FC<IHistory> = ({location}) => {
    const {username, room}   = queryString.parse(location.search);
    return (
        <div className="chat-room">
            
        </div>
    )
}

export default ChatRoom;