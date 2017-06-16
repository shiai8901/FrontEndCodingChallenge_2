import React from 'react';
// import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import App from './Components/App';
import Chat from './Components/Chat';
import LogIn from './Components/LogIn';
// history={browserHistory}

ReactDOM.render(<App />, document.getElementById('app'));

// ReactDOM.render(
// 	(<BrowserRouter>
// 		<div>
// 			<Route path="/" component={App} />
// 			<Route path="/chat" component={Chat}/>
// 		</div>
// 	</BrowserRouter>
// 	)
// 	, document.getElementById('app'));