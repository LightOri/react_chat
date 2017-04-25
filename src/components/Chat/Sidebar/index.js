import React from 'react';
import './Sidebar.css';
import ContactList from './ContactList';

class Sidebar extends React.Component {

	constructor(props) {
		super(props);
		this.filtering = this.filtering.bind(this);
		this.state = {filter: ''};
	}

	filtering(e){
		const enteredSymbols = document.forms['Filter'].elements['search'].value;
		this.setState({filter: enteredSymbols});
		return enteredSymbols;
	}



  render() {
    return (
	<section className="left-panel">
		<header className="left-panel__header">
		
			{/* collapse button */}
			<input type="checkbox" id="collapse-button" />
			<label htmlFor="collapse-button">
				<div id="expand">
					<svg width="30px" height="30px" viewBox="0 0 50 80" xmlSpace="preserve">
						<polyline fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points="30,0 0,30 30,60"/>
					</svg>
				</div>
				<div id="collapse">
					<svg width="30px" height="30px" viewBox="0 0 50 80" xmlSpace="preserve">
						<polyline fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points="0,0 30,30 0,60"/>
					</svg>
				</div>
			</label>

			{/* search field */}
			<form method="get" action="/search" name="Filter">
				<input type="search" name="search" placeholder="Search..." className="users-search" onInput={this.filtering}/>
			</form>

			{/* hamburger menu button */}
			<button className="menu-button">&#9776;</button>
		</header>

		<ContactList filter={this.state.filter}/>
	</section>
    );
  }
}

export default Sidebar;