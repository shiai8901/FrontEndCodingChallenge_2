import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles.css'
import MessageContentListItem from './MessageContentListItem'

export default class MessageContent extends React.Component {
	constructor(props) {
		super(props); 
	}

	render() {
		// console.log('MessageContent props: ', this.props);
		let listItems = "";
		if (this.props.currentRoomMessage !== undefined) {
			listItems = this.props.currentRoomMessage.map((item, i) => 
			<MessageContentListItem 
						message={item.message}
						name={item.name} 
						key={i}
						username={this.props.username} />
			);
		}
		return (
			<div className="content">
				<div className="container">
				{listItems}
				</div>
			</div>
			)
	}
}