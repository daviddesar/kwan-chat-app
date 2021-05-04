import React, { FC, FormEvent, useEffect, useState } from "react";
import queryString, { ParsedQuery } from "query-string";
import "./chatroom.style..scss";
import DefaultContainer from "../../containers/DefaultContainer/DefaultContainer";
import ChatHeader from "../../components/ChatHeader/ChatHeader";
import io from 'socket.io-client';
import ChatMessage from "../../components/ChatMessage/ChatMessage";
import { StringQueryParam } from "../../utils/types";
import { IHistory, IMessageInfo } from "../../utils/interfaces";

let socket: SocketIOClient.Socket;
const ENDPOINT = 'localhost:5000';
const ChatRoom: FC<IHistory> = ({ location }) => {
  const [room, setRoom] = useState<StringQueryParam>("");
  const [username, setUsername] = useState<StringQueryParam>("");
  const [messages, setMessage] = useState<IMessageInfo[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
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
    });
    return disconnectSocket;
  }, [location.search]);
  useEffect(() => {
    socket.on('message', (message: IMessageInfo) => {

      const newArray: IMessageInfo[] = [...messages];
      newArray.push(message)
      setMessage(newArray)
    });
  }, [messages]);
  const renderMessages = (messageList: IMessageInfo[]) => {
    return messageList.map((item: any) => {
      return <ChatMessage key={item.username + item.message} messageInfo={item} currentUser={username}/>
    })
  }
  const sendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentMessage.trim() !== "") {
      socket.emit('sendMessage', {currentMessage, username});
      setCurrentMessage("");
    }
  }
  const disconnectSocket = () => {
    socket.disconnect()
  }
  return (
    <DefaultContainer>
      {/* Header chat */}
      <ChatHeader chatRoomName={room}/>
      {/* Chat fields */}
      <div className="chat-field">
        {renderMessages(messages)}
      </div>

      {/* Typining input */}
      <form className="message-box" onSubmit={e => sendMessage(e)}>
        <input className="regular-input message-input" placeholder="Message" onChange={e => setCurrentMessage(e.target.value)} value={currentMessage}/>
        <button value="Submit" className="secondary-button">Send</button>
      </form>
    </DefaultContainer>
  );
};

export default ChatRoom;
