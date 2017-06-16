import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles.css'

export default class MessageContent extends React.Component {
	constructor(props) {
		super(props); 
	}

	render() {
		console.log('MessageContent props: ', this.props);
		return (
			<div className="container">
				MessageContent
			</div>
			)
	}
}