import React from 'react';
import './your_message.css';

class YourMessage extends React.Component {
  render() {
  	const message = JSON.stringify(this.props.message);

    return (
		<div className="message message--right">
			<div className="message__icon round-user-icon"></div>
			<div className="message__text message__text--right">
				{message}
				<div className="message__time message__time--right">13:58</div>
			</div>
		</div>
    );
  }
}

export default YourMessage;