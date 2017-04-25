import React from 'react';
import './your_message.css';

class YourMessage extends React.Component {
  render() {
    return (
		<div className="message message--right">
			<div className="message__icon round-user-icon"></div>
			<div className="message__text message__text--right">
				Which of us ever undertakes lab. physical exerrcise, except to obtain some advantage from it?
				<div className="message__time message__time--right">13:58</div>
			</div>
		</div>
    );
  }
}

export default YourMessage;