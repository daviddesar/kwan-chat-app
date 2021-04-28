import React from 'react';
import { Route, Switch } from 'react-router';
import ChatRoom from './pages/ChatRoom/ChatRoom';
import Login from './pages/Login/Login';
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
