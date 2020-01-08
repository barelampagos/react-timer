var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
	getInitialState: function() {
		return {
			count: 0,
			timerStatus: 'paused'
		};
	},
	// Called AFTER change to application (props + state)
	componentDidUpdate: function(prevProps, prevState) {
		if (this.state.timerStatus !== prevState.timerStatus) {
			switch (this.state.timerStatus) {
				case 'started':
					this.startTimer();
					break;
				case 'stopped':
					this.setState({
						count: 0
					});
				case 'paused':
					clearInterval(this.timer);
					this.timer = undefined;
					break;
			}
		}
	},
	// Called when component is 'unrendered' from view
	componentWillUnmount: function() {
		clearInterval(this.timer);
		this.timer = undefined;
	},
	startTimer: function() {
		// Add 1 to count every second
		this.timer = setInterval(() => {
			var newCount = this.state.count + 1;
			this.setState({
				count: newCount
			});
		}, 1000);
	},
	handleSetCountdown: function(seconds) {
		this.setState({
			count: seconds,
			timerStatus: 'started'
		});
	},
	handleStatusChange: function(newStatus) {
		this.setState({
			timerStatus: newStatus
		});
	},
	render: function() {
		var { count, timerStatus } = this.state;

		return (
			<div>
				<h1 className='page-title'>Timer</h1>
				<Clock totalSeconds={count}></Clock>
				<Controls
					countdownStatus={timerStatus}
					onStatusChange={this.handleStatusChange}
				/>
			</div>
		);
	}
});

module.exports = Timer;
