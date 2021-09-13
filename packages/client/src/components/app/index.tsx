import React, { useState } from 'react';
import useStyles from './styles';
import ChatRoom from '../ChatRoom';
import SignIn from '../SignIn';

const App = () => {
  const [userName, setUserName] = useState('');

  return userName ? (
    <ChatRoom userName={userName} />
  ) : (
    <SignIn setUserName={setUserName} />
  );
};

export default App;
