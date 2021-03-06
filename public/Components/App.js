import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles.css';
import Chat from './Chat';
import LogIn from './LogIn';
import axios from 'axios';
import http from 'http';

export default class App extends React.Component {

	constructor(props, context) {
		super(props, context); 
		
		this.state = {
			username: ""
		}
		this.submitUsername = this.submitUsername.bind(this);
	}

	componentDidMount() {
		this.setState({onlineSince: new Date()});
	}

	submitUsername(e) {
		e.preventDefault();
		this.setState({username: e.target.username.value});
		var context = this;
		axios.get('http://localhost:8080/api/rooms')
			.then((res) => {
				this.setState({rooms: res.data});
				// console.log(this.state);
			})
			.catch(function(err) {
				console.log(err);
			});
	}

	render() {
		if (this.state.rooms === undefined || this.state.username === "") {
			return <LogIn submitUsername={this.submitUsername}/>
		} else {
			return <Chat username={this.state.username} rooms={this.state.rooms} onlineSince={this.state.onlineSince} />
		}
		
	}

}
