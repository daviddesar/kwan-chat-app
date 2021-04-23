import React from 'react';
import { Route, Switch } from 'react-router';
import ChatRoom from './components/ChatRoom/ChatRoom';
import Login from './components/Login/Login';
import './styles/index.scss';
function App() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/chat-room" component={ChatRoom} />
    </Switch>
  );
}

export default App;
