import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles.css'

export default class App extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {
			username: ""
		}
		this.usernameChange = this.usernameChange.bind(this);
		this.submitUsername = this.submitUsername.bind(this);
	}

	usernameChange(e) {
		this.setState({username: e.target.value});
	}

	submitUsername() {
		
	}
	render () {
		return (
			<div>
				<form id="logIn">
					<input id="logInInput" type="text" name="username" placeholder="Type your username..." onChange={this.usernameChange} /><br></br>
					<button id="logInButton" type="submit" onClick={this.submitUsername}>Join the DoorDash Chat!</button>
				</form>
			</div>
			)
	}
}