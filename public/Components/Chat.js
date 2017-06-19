import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles.css'
import LeftCol from './LeftCol';
import RightCol from './RightCol';
import axios from 'axios';

export default class Chat extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {
			currentRoom: "",
			currentRoomId: ""
		}
		this.handleChangeRoom = this.handleChangeRoom.bind(this);
		this.handleSubmitMessage = this.handleSubmitMessage.bind(this);
		this.updateMessages = this.updateMessages.bind(this);
	}

	handleChangeRoom(id) {
		axios.get('http://localhost:8080/api/rooms/' + id)
			.then(res => {
				this.setState({currentRoomUser: res.data.users, 
								currentRoom: res.data.name, 
								currentRoomId: id});
			})
			.then(() => this.updateMessages(id))
			.catch(err => console.log(err.message));
	}

	handleSubmitMessage(e) {
		e.preventDefault();
		let data = {};
		data.name = this.props.username;
		data.message = e.target.message.value;
		console.log('submit message ---> ', this.state.currentRoomId, this.props.username, ": ", e.target.message.value);
		axios.post("http://localhost:8080/api/rooms/" + this.state.currentRoomId + "/messages", data)
			.then(() => this.updateMessages(this.state.currentRoomId))
			.catch(err => console.log(err.message));
		e.target.message.value = "";
	}

	updateMessages(id) {
		axios.get("http://localhost:8080/api/rooms/" + id + "/messages")
			.then(res => {
				this.setState({currentRoomMessage: res.data})
			})
			.catch(err => console.log(err.message));
	}

	render() {
		// console.log('props in Chat', this.props);
		return (
			<div>
				<LeftCol handleChangeRoom={this.handleChangeRoom} 
						username={this.props.username} 
						rooms={this.props.rooms} 
						onlineSince={this.props.onlineSince}
						currentRoom={this.state.currentRoom} />
				<RightCol currentRoomUser={this.state.currentRoomUser} 
						currentRoom={this.state.currentRoom} 
						currentRoomMessage={this.state.currentRoomMessage}
						handleSubmitMessage={this.handleSubmitMessage}
						username={this.props.username} 
						className="content" />
			</div>
			)
	}
}