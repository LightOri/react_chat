import React from 'react';
import './opponent_message.css';

class OpponentMessage extends React.Component {
  render() {
  	const message = JSON.stringify(this.props.message);

    return (
    	<div className="message">
			<div className="message__icon round-user-icon"></div>
			<div className="message__text">
				{message}
				<div className="message__time">13:58</div>
			</div>
		</div>
    );
  }
}

export default OpponentMessage;