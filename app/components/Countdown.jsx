var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
	getInitialState: function() {
		return {
			count: 0,
			countdownStatus: 'stopped'
		};
	},
	// Called AFTER change to application (props + state)
	componentDidUpdate: function(prevProps, prevState) {
		if (this.state.countdownStatus !== prevState.countdownStatus) {
			switch (this.state.countdownStatus) {
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
		// Remove 1 from count every second
		this.timer = setInterval(() => {
			var newCount = this.state.count - 1;
			this.setState({
				count: newCount >= 0 ? newCount : 0
			});

			if (newCount == 0) {
				this.setState({
					countdownStatus: 'stopped'
				});
			}
		}, 1000);
	},
	handleSetCountdown: function(seconds) {
		this.setState({
			count: seconds,
			countdownStatus: 'started'
		});
	},
	handleStatusChange: function(newStatus) {
		this.setState({
			countdownStatus: newStatus
		});
	},
	render: function() {
		var { count, countdownStatus } = this.state;

		var renderControlArea = () => {
			if (countdownStatus !== 'stopped') {
				return (
					<Controls
						countdownStatus={countdownStatus}
						onStatusChange={this.handleStatusChange}
					/>
				);
			} else {
				return <CountdownForm onSetCountdown={this.handleSetCountdown} />;
			}
		};

		return (
			<div>
				<h1 className='page-title'>Countdown</h1>
				<Clock totalSeconds={count}></Clock>
				{renderControlArea()}
			</div>
		);
	}
});

module.exports = Countdown;
