import React from 'react';
import './opponent_message.css';

class OpponentMessage extends React.Component {
  render() {
    return (
    	<div className="message">
			<div className="message__icon round-user-icon"></div>
			<div className="message__text">
				To take a trivial example
				<div className="message__time">13:58</div>
			</div>
		</div>
    );
  }
}

export default OpponentMessage;