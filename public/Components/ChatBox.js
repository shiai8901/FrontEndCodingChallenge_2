import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles.css'

export default class ChatBox extends React.Component {
	constructor(props) {
		super(props); 
	}

	render() {
		// console.log('ChatBox props: ', this.props);
		return (
			<div className="chatbox">
				<div className="container">
					<form id="messagebox" onSubmit={this.props.handleSubmitMessage}>
						<textarea type="text" name="message" placeholder="Type a message..."/>
						<input type="submit" value="Send" />

					</form>
				</div>
			</div>
			)
	}
}