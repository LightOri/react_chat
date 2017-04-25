import React from 'react';
import './Chat.css';
import Sidebar from './Sidebar';
import MessagesPanel from './MessagesPanel';

class Chat extends React.Component {
  render() {
    return (
		<section className="chat-window">
			<Sidebar />
			<MessagesPanel />
		</section>
    );
  }
}

export default Chat;