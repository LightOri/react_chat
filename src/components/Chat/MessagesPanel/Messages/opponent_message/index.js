import React from 'react';
import './opponent_message.css';

class OpponentMessage extends React.Component {
  render() {
  	const message = this.props.message;
    const formattedMessage = transformMessages(message);

    function transformMessages(data) {
        const messageData = data;
        if (typeof messageData === 'string') {
            return messageData;
        } else if (messageData.msg){
          return messageData.msg;
        }else {
            return "wrong message format"
        }
    }

    return (
    	<div className="message">
			<div className="message__icon round-user-icon"></div>
			<div className="message__text">
				{formattedMessage}
				<div className="message__time">13:58</div>
			</div>
		</div>
    );
  }
}

export default OpponentMessage;