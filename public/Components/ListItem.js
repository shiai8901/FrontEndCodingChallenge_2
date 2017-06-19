import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles.css'

export default class ListItem extends React.Component {
	constructor(props) {
		super(props); 
	}

	render() {
		// console.log('ListItem props: ', this.props);

		let classes = this.props.currentRoom === this.props.name ? "leftColListItem selected" : "leftColListItem";

		return (
			<div className={classes} onClick={() => this.props.handleChangeRoom(this.props.id)}>{this.props.name}
			</div>
			)
	}
}