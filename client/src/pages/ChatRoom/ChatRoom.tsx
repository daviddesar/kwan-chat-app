import React, { FC, useEffect, useState } from "react";
import { Location } from "history";
import queryString, { ParsedQuery } from "query-string";
import "./chatroom.style..scss";
import DefaultContainer from "../../containers/DefaultContainer/DefaultContainer";
import ChatHeader from "../../components/ChatHeader/ChatHeader";
import io from 'socket.io-client';
import ChatMessage from "../../components/ChatMessage/ChatMessage";
interface IHistory {
  location: Location;
}
interface IQuery {
  username: string,
  room: string
}
let socket: any;
const ENDPOINT = 'localhost:5000';
const ChatRoom: FC<IHistory> = ({ location }) => {
  const [room, setRoom] = useState<string | string[] | null>("");
  const [userName, setUsername] = useState<string | string[] | null>("");
  const [messages, setMessage] = useState<any[]>([])
  // connect web socket
  useEffect(() => {
    const { username, room }: ParsedQuery = queryString.parse(location.search);
    socket = io(ENDPOINT, {transports: ['websocket']});
    setRoom(room);
    setUsername(username)
    socket.emit('join', {username, room}, (error: string) => {
      if (error) {
        alert (error)
      }
    })
  }, [ENDPOINT, location.search]);
  useEffect(() => {
    socket.on('message', (message: any) => {

      const newArray: any[] = [...messages];
      newArray.push(message)
      setMessage(newArray)
    })
  }, [messages]);
  const renderMessages: any = (messageList: any) => {
    const myList: FC[] = messageList.map((item: any) => {
      
      return <ChatMessage key={item.username + item.message} messageInfo={item}/>
    })
    return myList;
  }
  return (
    <DefaultContainer>
      {/* Header chat */}
      <ChatHeader />
      {/* Chat fields */}
      <div className="chat-field">
        {renderMessages(messages)}
      </div>

      {/* Typining input */}
      <div className="message-box">
        <input className="regular-input message-input" placeholder="Message" />
        <button className="secondary-button">Send</button>
      </div>
    </DefaultContainer>
  );
};

export default ChatRoom;
