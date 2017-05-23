import React from 'react';
import './UserInput.css';
import * as io from 'socket.io-client';

class UserInput extends React.Component {
    constructor() {
    super();
    this.sendMessage = this.sendMessage.bind(this);
    // entered message - after press 'Enter' key;
  }


    // sending message
  sendMessage(e){
    if (e.keyCode === 13) {
      const socket = io.connect('http://eleksfrontendcamp-mockapitron.rhcloud.com:8000'); //port 8000 for home network
          
      // sending message
      const message = document.getElementById('send_msg').value;
      socket.emit('message', message);


      // ***************
      // setState - to force re-rendering component?
      // it's a message LIST -> (move to place with messages rendering)

      socket.on('message', msg => { console.log(msg) });
      // ****************


      console.log(message);
      document.getElementById('send_msg').value = '';
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