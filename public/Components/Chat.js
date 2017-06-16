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
			currentRoom: ""
		}
		this.handleChangeRoom = this.handleChangeRoom.bind(this);
	}

	handleChangeRoom(roomname) {
		console.log(roomname);
		this.setState({currentRoom: roomname});
		axios.get('http://localhost:8080/api/rooms/0')
			.then(res => {
				this.setState({currentRoomUser: res.data.users});
			})
			.catch(err => console.log(err.message));
	}

	render() {
		console.log('props in Chat', this.props);
		return (
			<div>
				<LeftCol handleChangeRoom={this.handleChangeRoom} username={this.props.username} rooms={this.props.rooms} onlineSince={this.props.onlineSince}/>
				<Message currentRoomUser={this.state.currentRoomUser} currentRoom={this.state.currentRoom} className="content" />
			</div>
			)
	}
}