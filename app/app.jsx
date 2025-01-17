var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

// Load foundation
$(document).foundation();

// app.css
require('style!css!sass!applicationStyles');

// JSX Code --> JS XML
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<Route path='countdown' component={Countdown} />
			<IndexRoute component={Timer} />
		</Route>
	</Router>,
	document.getElementById('app')
);
