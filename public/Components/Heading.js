import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles.css'

export default class Heading extends React.Component {
	constructor(props) {
		super(props); 
	}

	render() {
		console.log('Heading props: ', this.props);
		return (
			<div className="heading">
				<div className="container textCenter">
					<h3>{this.props.currentRoom}</h3>
					<ul>
						{this.props.currentRoomUser}
					</ul>
				</div>
			</div>
			)
	}
}