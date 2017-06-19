import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles.css'

export default class Heading extends React.Component {
	constructor(props) {
		super(props); 
	}

	render() {
		// console.log('Heading props: ', this.props);
		let users = "";
		let client = "";
		if (this.props.currentRoomUser !== undefined) {
			client = <span className="username_heading">{this.props.username}</span>;
			users = this.props.currentRoomUser.map((user) => <span className="other_user">, {user}</span>);
		} 

		return (
			<div className="heading">
				<div className="container textCenter">
					<h3>{this.props.currentRoom}</h3>
					<p>
					{client}{users}						
					</p>
				</div>
			</div>
			)
	}
}