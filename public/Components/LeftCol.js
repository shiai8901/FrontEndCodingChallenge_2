import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles.css'
import RoomList from './RoomList';
import UserInfo from './UserInfo';

export default class LeftCol extends React.Component {
	constructor(props) {
		super(props); 
	}
	render() {
		// console.log('props in LeftCol', this.props);
		return (
			<div className="leftCol" >
				<div className="container">
					<UserInfo 
						username={this.props.username} 
						onlineSince={this.props.onlineSince} />
				</div>
					<RoomList 
						handleChangeRoom={this.props.handleChangeRoom} 
						rooms={this.props.rooms}
						currentRoom={this.props.currentRoom} />
			</div>
			)
	}
}