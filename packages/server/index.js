import Express from 'express';
import { createServer } from 'http';
import { Server as WebSocketServer } from 'socket.io';
import { Conversations, Users } from './config/constants';

const WebSocketOptions = {
  cors: {
    // origin: 'http://10.0.0.199:8000',
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
};
const PORT = 8000;
const GENERAL_ROOM = 'GENERAL';
const GET_USER_INFO_EVENT = 'GET_USER_INFO_EVENT';
const USER_INFO_EVENT = 'USER_INFO_EVENT';
const NEW_MESSAGE_EVENT = 'NEW_MESSAGE_EVENT';
const GET_CONVERSATION_EVENT = 'GET_CONVERSATION_EVENT';
const CONVERSATION_EVENT = 'CONVERSATION_EVENT';
const TYPING_EVENT_START = 'TYPING_EVENT_START';
const TYPING_EVENT_STOP = 'TYPING_EVENT_STOP';
const sendStatusReceivedToClient = { status: 'ok' };

const chatApp = Express();
const Server = createServer(chatApp);
const IO = new WebSocketServer(Server, WebSocketOptions);

IO.on('connection', (socket) => {
  console.log('user is connected.. ', socket.id);
  socket.join(GENERAL_ROOM);                                            // 1. Create the room

  socket.on(GET_USER_INFO_EVENT,(userInfo) => {
    const user = Users.find(user => user.name === userInfo.name);
    const friends = user.friends.map(({ userId }) => Users.find(user => user.id === userId));
    socket.emit(USER_INFO_EVENT, { ...user, friends });
  });

  socket.on(GET_CONVERSATION_EVENT, ({ userName, friendName }) => {
    const key = `${userName}-${friendName}`;
    const conversation = Conversations[key];

    IO.in(GENERAL_ROOM).emit(CONVERSATION_EVENT, conversation);
  });

  socket.on(NEW_MESSAGE_EVENT, (message, acknowledgement) => {   // 2. Listen to message events
    console.log('message >>>', message);
    acknowledgement && acknowledgement(sendStatusReceivedToClient);

    IO.in(GENERAL_ROOM).emit(NEW_MESSAGE_EVENT, message);               // 3. Emit the message to the whole room
  });

  // socket.on(TYPING_EVENT_START, (typingEvent) => {
  //   console.log('typing...');
  //   IO.in(GENERAL_ROOM).emit(TYPING_EVENT_START, typingEvent);
  // });
  //
  // socket.on(TYPING_EVENT_STOP, () => {
  //   console.log('typing stop...');
  //   IO.in(GENERAL_ROOM).emit(TYPING_EVENT_STOP);
  // });

  socket.on('disconnect', () => socket.leave(GENERAL_ROOM));  // 4. Leave room on disconnect
});

Server.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});

chatApp.get('/', (req, res) => {
  res.send('<h2>Bad Bitch!</h2>');
});


