import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles.css'

export default class MessageContentListItem extends React.Component {
	constructor(props) {
		super(props); 
	}

	render() {
		console.log('MessageContentListItem props: ', this.props);
		return (
			<div className="MessageContentListItem">
				<p className="other_user">{this.props.name}</p>
				<p className="incoming_message">{this.props.message}</p>
			</div>
			)
	}
}