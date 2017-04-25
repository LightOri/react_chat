import React from 'react';
import './UserInput.css';

class UserInput extends React.Component {
    constructor() {
    super();
    this.sendMessage = this.sendMessage.bind(this);
    // entered message - after press 'Enter' key;
  }


    // sending message
  sendMessage(e){
    if (e.keyCode === 13) {
      const message = document.getElementById('send_msg').value;


// ..............імпорт відправки-месенджів через модуль

        console.log(message);
        return false;
      }
  }

  render() {
    return (
    	<div className="bottom-area">
    		<div className="typing-box">
				<input onKeyDown={this.sendMessage} id='send_msg' type="text" name="" placeholder="Type something..." />
				<div id="smiley">&#9786;</div>
			</div>
			<input type="file" name="file" id="file" />
			<label htmlFor="file"></label>
    	</div>
    );
  }
}

export default UserInput;