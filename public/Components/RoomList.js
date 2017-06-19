import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles.css'
import ListItem from './ListItem.js'

export default class RoomList extends React.Component {
	constructor(props) {
		super(props); 
	}
	render() {
		// console.log("RoomList props: ", this.props);
		const listItems = this.props.rooms.map((room) => 
			<ListItem handleChangeRoom={this.props.handleChangeRoom} 
						key={room.id}
						id={room.id}
						name={room.name} 
						currentRoom={this.props.currentRoom} />
		);

		return (
			<div className="leftColList">
				{listItems}
			</div>
			)
	}


}