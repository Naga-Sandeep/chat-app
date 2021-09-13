import React, { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';

const SOCKET_SERVER_URL = 'http://localhost:8000';
// const SOCKET_SERVER_URL = 'http://10.0.0.199:8000';
const GET_USER_INFO_EVENT = 'GET_USER_INFO_EVENT';
const USER_INFO_EVENT = 'USER_INFO_EVENT';
const NEW_MESSAGE_EVENT = 'NEW_MESSAGE_EVENT';
const GET_CONVERSATION_EVENT = 'GET_CONVERSATION_EVENT';
const CONVERSATION_EVENT = 'CONVERSATION_EVENT';
const TYPING_EVENT_START = 'TYPING_EVENT_START';
const TYPING_EVENT_STOP = 'TYPING_EVENT_STOP';

/* React hook that will allow us to connect to the server and send our messages */
const useChatRoom = (userName) => {
  // const [socket, setSocket] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [messages, setMessages] = useState([]);
  // const [isTyping, setIsTyping] = useState(false);
  const socketRef = useRef(null);

  const transformMessage = (message) => ({
    ...message,
    // isOwner: message.senderId === userInfo.id,
    // isOwner: message.senderId === socketRef.current.id,
  });

  useEffect(() => {
    // 1. Create a new client with our server URL
    console.log('creating connection...', userName);
    socketRef.current = io(SOCKET_SERVER_URL);
    socketRef.current.emit(GET_USER_INFO_EVENT, { name: userName });
    socketRef.current.on(USER_INFO_EVENT, (userRawData) => {
      console.log('received user data >> ', userRawData);
      const userData = {
        id: userRawData.id,
        name: userRawData.name,
        friends: userRawData.friends,
      };
      setUserInfo(userData);
    });

    socketRef.current.on(NEW_MESSAGE_EVENT, (message) => {
      console.log('receiving message >>>', message);
      if (!message) return;
      const incomingMessage = transformMessage(message);
      setMessages((prevMessages) => [...prevMessages, incomingMessage]);
    });

    socketRef.current.on(CONVERSATION_EVENT, (conversations) => {
      console.log('receiving conversation ', conversations);
      if (!conversations) {
        setMessages([]);
        return;
      }
      const incomingConversation = conversations.map(transformMessage);
      setMessages(incomingConversation);
    });

    // socketRef.current.on(TYPING_EVENT_START, (typingEvent) => {
    //   if (!typingEvent) return;
    //
    //   console.log('receiving typing started...', typingEvent.senderId);
    //   setIsTyping(typingEvent.senderId !== socketRef.current.id);
    // });
    //
    // socketRef.current.on(TYPING_EVENT_STOP, () => {
    //   console.log('receiving typing stopped...');
    //   setIsTyping(false);
    // });

    // 4. Clean up the socket connection
    return () => {
      console.log('disconnecting connection...');
      socketRef.current.disconnect();
    };
  }, [userName]);

  const getConversation = (friendName) => {
    console.log('get conversation >> ', friendName);
    socketRef.current.emit(GET_CONVERSATION_EVENT, { userName, friendName });
  };

  const sendMessage = (message, acknowledgementCB) => {
    const messageBody = {
      message,
      senderId: userInfo.id,
    };
    console.log('emitting message >>>', messageBody);
    socketRef.current.emit(NEW_MESSAGE_EVENT, messageBody, acknowledgementCB);
  };

  // const sendTypingStart = () => {
  //   console.log('typing start...');
  //   socketRef.current?.emit(TYPING_EVENT_START, {
  //     senderId: socketRef.current.id,
  //   });
  // };
  //
  // const sendTypingStop = () => {
  //   console.log('typing stop...');
  //   socketRef.current?.emit(TYPING_EVENT_STOP);
  // };

  return {
    userInfo,
    messages,
    getConversation,
    // isTyping,
    sendMessage,
    // sendTypingStart,
    // sendTypingStop,
  };
};

export default useChatRoom;
