import React, { useState } from "react";
import { Link } from "react-router-dom";
import DefaultContainer from "../../containers/DefaultContainer/DefaultContainer";
import "./login.style.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="login">
      {/* Login box */}
      <DefaultContainer>
      <div className="login__header">
          <h1 className="header">Hello</h1>
          <p className="sub-header">Your friends are waiting!!! Join now</p>
        </div>
        <div className="login__form">
          <input className="regular-input login-input" placeholder="Username"
          onChange={e => setUsername(e.target.value)}
          />
          <input 
          className="regular-input login-input" 
          placeholder="Room"
          onChange={e => setRoom(e.target.value)}
          />
          <Link to={`/chat-room?username=${username}&room=${room}`}>
            <button className="primary-button login-button">Gooooo!!!</button>
          </Link>
        </div>
      </DefaultContainer>
    </div>
  );
};

export default Login;
