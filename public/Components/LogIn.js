import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles.css';
// import { Redirect, Link } from 'react-router-dom';
import Chat from './Chat';

export default class LogIn extends React.Component {
	constructor(props) {
		super(props); 
	}

	render () {
		// console.log(this.state);
		return (
			<div>
				<form id="logIn" onSubmit={this.props.submitUsername}>
					<input id="logInInput" type="text" name="username" placeholder="Type your username..." /><br></br>
					<button id="logInButton" type="submit" >Join the DoorDash Chat!</button>
				</form>
			</div>
			)		
	}
}