import React, { useEffect } from 'react';
import { Widget, addResponseMessage, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import './style.css';

interface ChatWidget {
  title: string;
  subTitle: string;
  profileAvatar: string;
  chatId: string;
}

function ChatWidget(props: ChatWidget) {
  const { title, subTitle, profileAvatar, chatId } = props;
  useEffect(() => {
    addResponseMessage('Welcome to this awesome chat!');
    // addUserMessage('Welcome to this awesome chat!', '1');
  }, []);

  const handleNewUserMessage = (newMessage: string) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    // addResponseMessage(response);
  };

  return (
    <div className="App">
      <Widget
        emojis={true}
        resizable={true}
        title={title}
        subtitle={subTitle}
        senderPlaceHolder=""
        handleNewUserMessage={handleNewUserMessage}
        profileAvatar={profileAvatar}
        chatId={chatId}
      />
    </div>
  );
}

export default ChatWidget;
