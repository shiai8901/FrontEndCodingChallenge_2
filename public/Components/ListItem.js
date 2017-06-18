import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles.css'

export default class ListItem extends React.Component {
	constructor(props) {
		super(props); 
	}

	render() {
		console.log('ListItem props: ', this.props);
		return (
			<div className="leftColListItem" onClick={() => this.props.handleChangeRoom(this.props.id)}>{this.props.name}
			</div>
			)
	}
}