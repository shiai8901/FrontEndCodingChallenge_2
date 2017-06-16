import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles.css'
import ListItem from './ListItem.js'

export default class RoomList extends React.Component {
	constructor(props) {
		super(props); 
	}
	render() {

		const listItems = this.props.rooms.map((room) => 
			<ListItem handleChangeRoom={this.props.handleChangeRoom} 
						key={room.id}
						name={room.name} />
		);

		return (
			<div className="leftColList">
					{listItems}
			</div>
			)
	}


}