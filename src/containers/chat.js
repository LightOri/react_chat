import React from 'react';
import Chat from '../components/Chat';


let conatctList = (function getContacts () {
    // list of contacts
  fetch(`http://eleksfrontendcamp-mockapitron.rhcloud.com/users`)
      .then(response => response.json())
      .then(data => validUsers(data))
      .then(filteredData => localStorage.setItem('userList', JSON.stringify(filteredData)))
      .catch(err => console.error(err));

  function validUsers(data){
    return data.filter(item => item.username);
  };

  const userList = JSON.parse(localStorage.getItem('userList'));
  return userList;
})();



class ChatContainer extends React.Component {
  render() {
    return (
      <Chat contacts={conatctList}/>
    );
  }
}

export { ChatContainer };
