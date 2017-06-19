import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles.css'
import Heading from './Heading';
import MessageContentList from './MessageContentList';
import ChatBox from './ChatBox';

export default class Message extends React.Component {
	constructor(props) {
		super(props); 
	}
	render() {
		// console.log('Message props: ', this.props);
		if (this.props.currentRoom) {

			return (
				<div className="right-container">
					<Heading 
						currentRoomUser={this.props.currentRoomUser} 
						currentRoom={this.props.currentRoom}
						username={this.props.username}/>
					<MessageContentList 
						currentRoomMessage={this.props.currentRoomMessage}
						username={this.props.username} />
					<ChatBox 
						handleSubmitMessage={this.props.handleSubmitMessage}/>
				</div>
				)
		} else {
			return null;
		}
	}
}