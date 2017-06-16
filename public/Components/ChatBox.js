import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles.css'

export default class ChatBox extends React.Component {
	constructor(props) {
		super(props); 
	}

	render() {
		console.log('ChatBox props: ', this.props);
		return (
			<div className="chatbox">
				<div className="container">
				ChatBox
				</div>
			</div>
			)
	}
}