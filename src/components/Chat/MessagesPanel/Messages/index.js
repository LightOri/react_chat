import React from 'react';
import './Messages.css';
import OpponentMessage from './opponent_message';
import YourMessage from './your_message';


// list of contacts
fetch(`http://eleksfrontendcamp-mockapitron.rhcloud.com/messages`)
		.then(response => response.json())
		.then(data => valid(data))
		.then(filteredData => localStorage.setItem('messagesList', JSON.stringify(filteredData)))
		.catch(err => console.error(err));

function valid(data){
	return data.filter(item => item.msg);
}

const messagesList = JSON.parse(localStorage.getItem('messagesList'));

// add 'key' and 'description' fields to userlist
const messagesListWithKey = messagesList.map((item, i)=>{
		// added 'key'
		item.id = i;
		return item;
		}
	);

	

class Messages extends React.Component {
  render() {
  	const currentUser = JSON.parse(localStorage.getItem('userData')).user.username;


    return (



    	<section>
    		{messagesListWithKey.map(item => {
    			if (item.user.username === currentUser) {
    				return <YourMessage key={item.id} message={item.msg} />
	    		} else {
	    			return <OpponentMessage key={item.id} message={item.msg} />
	    		}})
    		}
    		
    	</section>
    );
  }
}

export default Messages;