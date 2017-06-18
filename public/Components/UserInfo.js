import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles.css'

export default class UserInfo extends React.Component {
	constructor(props) {
		super(props); 
		this.state = {
			onlineDuration: 0
		}
		this.updateOnlineDuration = this.updateOnlineDuration.bind(this);
	}

	componentDidMount() {
		this.setState({startTime: (new Date()).getTime(), onlineDuration: 0});
		var timer;
		setInterval(this.updateOnlineDuration, 60000);
	}

	updateOnlineDuration() {
		var context = this;
		this.setState({onlineDuration: context.state.onlineDuration + 1});
	}

	render() {
		console.log('UserInfo props: ', this.props);
		return (
			<div>
				<p className="userName">{this.props.username}</p>
				<p className="onlineTime">Online for {this.state.onlineDuration} minutes</p>
			</div>
			)
	}
}