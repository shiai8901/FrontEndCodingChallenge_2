import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles.css'
import LeftCol from './LeftCol';
import Message from './Message';
import axios from 'axios';

export default class Chat extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {
			currentRoom: "",
			currentRoomId: ""
		}
		this.handleChangeRoom = this.handleChangeRoom.bind(this);
	}

	handleChangeRoom(id) {
		console.log(id);
		// this.setState({currentRoom: id});
		console.log('http://localhost:8080/api/rooms/' + id);
		axios.get('http://localhost:8080/api/rooms/' + id)
			.then(res => {
				this.setState({currentRoomUser: res.data.users, 
								currentRoom: res.data.name, 
								currentRoomId: id});
			})
			.catch(err => console.log(err.message));
		axios.get("http://localhost:8080/api/rooms/" + id + "/messages")
			.then(res => {
				this.setState({currentRoomMessage: res.data})
			})
			.catch(err => console.log(err.message));
	}

	render() {
		console.log('props in Chat', this.props);
		return (
			<div>
				<LeftCol handleChangeRoom={this.handleChangeRoom} 
						username={this.props.username} 
						rooms={this.props.rooms} 
						onlineSince={this.props.onlineSince}/>
				<Message currentRoomUser={this.state.currentRoomUser} 
						currentRoom={this.state.currentRoom} 
						currentRoomMessage={this.state.currentRoomMessage}
						className="content" />
			</div>
			)
	}
}