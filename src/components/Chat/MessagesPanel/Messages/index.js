import React from 'react';
import './Messages.css';
import OpponentMessage from './opponent_message';
import YourMessage from './your_message';

class Messages extends React.Component {
  render() {
    return (
    	<section>
    		<OpponentMessage />
    		<YourMessage />
    	</section>
    );
  }
}

export default Messages;