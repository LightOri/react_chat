import React from 'react';
import './your_message.css';

class YourMessage extends React.Component {
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
		<div className="message message--right">
			<div className="message__icon round-user-icon"></div>
			<div className="message__text message__text--right">
				{formattedMessage}
				<div className="message__time message__time--right">13:58</div>
			</div>
		</div>
    );
  }
}

export default YourMessage;