import React, { useState } from "react";
import { Link } from "react-router-dom";
import DefaultContainer from "../../containers/DefaultContainer/DefaultContainer";
import "./login.style.scss";
import Emoji from 'react-emoji-render'

const Login = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="login">
      {/* Login box */}
      <DefaultContainer>
      <div className="login__header">
          <Emoji text="👀💬" className="emoji-header"/>
          <h1 className="header">Hello</h1>
          <p className="sub-header">Your friends are waiting!!! Join now</p>
        </div>
        <form className="login__form" onSubmit={e => e.preventDefault()}>
          <input className="regular-input login-input" placeholder="Username"
          onChange={e => setUsername(e.target.value)}
          />
          <input 
          className="regular-input login-input" 
          placeholder="Room"
          onChange={e => setRoom(e.target.value)}
          />
          <Link to={`/chat-room?username=${username}&room=${room}`}>
            <button className="primary-button login-button" value="Submit">Gooooo!!!</button>
          </Link>
        </form>
      </DefaultContainer>
    </div>
  );
};

export default Login;
