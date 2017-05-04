import React from 'react';
import './MessagesPanel.css';
import Messages from './Messages';
import UserInput from './UserInput';

class MessagesPanel extends React.Component {
  render() {
    return (
    	<section className="chat">
    		<header>
    			<div>
    				<img src="/img/Skype_logo.png" alt="skype-logo" />
    			</div>
    		</header>
    		<Messages />
    		<UserInput />
    	</section>
    );
  }
}

export default MessagesPanel;