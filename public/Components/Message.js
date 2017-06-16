import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles.css'
import Heading from './Heading';
import MessageContent from './MessageContent';
import ChatBox from './ChatBox';

export default class Message extends React.Component {
	constructor(props) {
		super(props); 
	}
	render() {
			console.log('Message props: ', this.props);
		return (
			<div className="right-container">
				<Heading currentRoomUser={this.props.currentRoomUser} currentRoom={this.props.currentRoom}/>
				<MessageContent currentRoomMessage={this.props.currentRoomMessage}/>
				<ChatBox />
			</div>
			)
	}
}