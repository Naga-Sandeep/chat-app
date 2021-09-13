import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useChatRoom from '../../hooks/useChatRoom';
import ChatHistory from '../ChatHistory';
import TypingIndicator from '../TypingIndicator';
import FriendsList from '../FriendsList';
import TypeBox from '../TypeBox';
import useStyles from './styles';

interface ChatRoomProps {
  userName: string;
}

const ChatRoom = ({ userName }: ChatRoomProps) => {
  const classes = useStyles();
  const { userInfo, getConversation, messages, sendMessage } = useChatRoom(
    userName
  ) as any;

  return (
    <>
      <h2>Username: {userName}</h2>
      <Grid container justify="center">
        <Grid item sm={6} className={classes.chatContainer}>
          <Typography variant="h4" align="center" className={classes.heading}>
            General Room
          </Typography>
          {userInfo && (
            <Grid container className={classes.contentContainer}>
              <Grid item sm={4} className={classes.friendsList}>
                <FriendsList
                  friends={userInfo.friends}
                  onFriendSelect={getConversation}
                />
              </Grid>
              <Grid item sm={8}>
                <ChatHistory user={userInfo} chatHistory={messages} />
                {/* {isTyping ? <TypingIndicator /> : null} */}
                <TypeBox
                  onSend={sendMessage}
                  // sendTypingStart={sendTypingStart}
                  // sendTypingStop={sendTypingStop}
                />
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default ChatRoom;
