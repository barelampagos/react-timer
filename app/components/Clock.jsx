var React = require('react');

var Clock = React.createClass({
	getDefaultProps: function() {
		totalSeconds: 0;
	},
	propTypes: function() {
		totalSeconds: React.PropTypes.number;
	},
	// Renders total: -> clock display equivalent
	// i.e. 61 -> 1:01
	formatSeconds: function(totalSeconds) {
		var seconds = totalSeconds % 60;
		var minutes = Math.floor(totalSeconds / 60);

		if (seconds < 10) seconds = '0' + seconds;
		if (minutes < 10) minutes = '0' + minutes;

		return minutes + ':' + seconds;
	},
	render: function() {
		var { totalSeconds } = this.props;

		return (
			<div className='clock'>
				<span className='clock-text'>{this.formatSeconds(totalSeconds)}</span>
			</div>
		);
	}
});

module.exports = Clock;
